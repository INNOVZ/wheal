// api/send-email.js
// This file goes in the /api folder at your project root (NOT in /src)

const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

module.exports = async (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { fullName, email, phone, message, preferredDate, submittedAt } = req.body;

    // Validate required fields
    if (!fullName || !email || !phone) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev', // Replace with your verified domain
      to: 'jithinkjacob@live.com',
      replyTo: email,
      subject: `New Consultation Request from ${fullName}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
              .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
              .field { margin-bottom: 15px; }
              .label { font-weight: bold; color: #667eea; }
              .value { margin-top: 5px; }
              .footer { margin-top: 20px; padding-top: 20px; border-top: 2px solid #667eea; font-size: 12px; color: #666; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2 style="margin: 0;">🌟 New Consultation Request</h2>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">👤 Full Name:</div>
                  <div class="value">${fullName}</div>
                </div>
                
                <div class="field">
                  <div class="label">📧 Email Address:</div>
                  <div class="value">${email}</div>
                </div>
                
                <div class="field">
                  <div class="label">📱 Phone Number:</div>
                  <div class="value">${phone}</div>
                </div>
                
                <div class="field">
                  <div class="label">📅 Preferred Date:</div>
                  <div class="value">${preferredDate}</div>
                </div>
                
                <div class="field">
                  <div class="label">💬 Message:</div>
                  <div class="value">${message || 'No additional message provided'}</div>
                </div>
                
                <div class="footer">
                  <p>Submitted on: ${new Date(submittedAt).toLocaleString('en-US', { 
                    dateStyle: 'full', 
                    timeStyle: 'short' 
                  })}</p>
                  <p><strong>Action Required:</strong> Please reply to ${email} to schedule the consultation.</p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error('Resend API error:', error);
      return res.status(400).json({ error: error.message || 'Failed to send email' });
    }

    return res.status(200).json({ 
      success: true, 
      message: 'Email sent successfully',
      data 
    });
  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({ 
      error: 'Internal server error. Please try again later.' 
    });
  }
};