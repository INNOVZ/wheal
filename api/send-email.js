// Vercel API route for sending emails
export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { fullName, email, phone, preferredDate, message, submittedAt } = req.body;

    // Validate required fields
    if (!fullName || !email) {
      return res.status(400).json({ message: 'Name and email are required' });
    }

    // Create email content
    const emailContent = {
      to: 'jithinkjacob@live.com',
      from: email,
      subject: `New Consultation Request from ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">
            🌟 New Consultation Request
          </h2>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #374151;">Contact Details:</h3>
            <p><strong>👤 Name:</strong> ${fullName}</p>
            <p><strong>📧 Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>📱 Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>📅 Preferred Date:</strong> ${preferredDate || 'Not specified'}</p>
          </div>

          ${message ? `
          <div style="background-color: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #92400e;">💬 Message:</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          ` : ''}

          <div style="background-color: #e5e7eb; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; color: #6b7280; font-size: 14px;">
              <strong>⏰ Submitted:</strong> ${new Date(submittedAt).toLocaleString()}
            </p>
            <p style="margin: 5px 0 0 0; color: #6b7280; font-size: 14px;">
              This consultation request was submitted through your website contact form.
            </p>
          </div>

          <div style="text-align: center; margin-top: 30px;">
            <a href="mailto:${email}" style="background-color: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
              Reply to ${fullName}
            </a>
          </div>
        </div>
      `,
      text: `
New Consultation Request

Name: ${fullName}
Email: ${email}
Phone: ${phone || 'Not provided'}
Preferred Date: ${preferredDate || 'Not specified'}

Message:
${message || 'No additional message provided'}

Submitted: ${new Date(submittedAt).toLocaleString()}

This consultation request was submitted through your website contact form.
Reply to: ${email}
      `
    };

    // Use Nodemailer with Gmail SMTP (most reliable)
    const nodemailer = require('nodemailer');
    
    // Create transporter using Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER || 'your-email@gmail.com',
        pass: process.env.GMAIL_APP_PASSWORD || 'your-app-password'
      }
    });

    // Send email
    const info = await transporter.sendMail({
      from: `"Website Contact Form" <${process.env.GMAIL_USER || 'noreply@example.com'}>`,
      to: 'jithinkjacob@live.com',
      replyTo: email,
      subject: `New Consultation Request from ${fullName}`,
      html: emailContent.html,
      text: emailContent.text
    });

    return res.status(200).json({ 
      success: true, 
      message: 'Email sent successfully',
      service: 'nodemailer',
      messageId: info.messageId
    });

  } catch (error) {
    console.error('Email sending error:', error);
    
    return res.status(500).json({ 
      success: false, 
      message: 'Failed to send email',
      error: error.message 
    });
  }
}