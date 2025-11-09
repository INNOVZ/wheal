# Contact Form Setup Guide

Your contact form is now ready and has multiple options for receiving form submissions. Here are the available methods:

## Current Status

✅ Form collects all data (name, email, phone, date, message)
✅ Form validation and loading states
✅ Success/error notifications
✅ WhatsApp backup option
⚠️ Email delivery needs setup (see options below)

## Option 1: EmailJS (Recommended - Free & Easy)

EmailJS allows you to send emails directly from the frontend without a backend server.

### Setup Steps:

1. Go to [EmailJS.com](https://www.emailjs.com/) and create a free account
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template with these variables:

   - `{{from_name}}` - Customer's name
   - `{{from_email}}` - Customer's email
   - `{{phone}}` - Customer's phone
   - `{{preferred_date}}` - Preferred consultation date
   - `{{message}}` - Customer's message
   - `{{submitted_at}}` - Submission timestamp

4. Install EmailJS: `npm install @emailjs/browser`

5. Update the Contact.tsx file with your EmailJS credentials:

```javascript
import emailjs from "@emailjs/browser";

const sendViaEmailJS = async (data: any) => {
  const result = await emailjs.send(
    "YOUR_SERVICE_ID", // From EmailJS dashboard
    "YOUR_TEMPLATE_ID", // From EmailJS dashboard
    {
      to_email: "info@thedesertwhales.com",
      from_name: data.fullName,
      from_email: data.email,
      phone: data.phone,
      preferred_date: data.preferredDate,
      message: data.message,
      submitted_at: data.submittedAt,
    },
    "YOUR_PUBLIC_KEY" // From EmailJS dashboard
  );
  return result;
};
```

## Option 2: WhatsApp Notifications (Currently Active)

The form automatically formats and sends form data via WhatsApp as a backup. When someone submits the form, it will:

- Show a success message
- Open WhatsApp with formatted form data
- Send directly to your WhatsApp number: +971 52 867 8679

## Option 3: Backend API (Advanced)

If you want to store form submissions in a database or send emails via your own server:

1. Create a backend API endpoint (Node.js, PHP, Python, etc.)
2. Update the `sendToAPI` function in Contact.tsx
3. Handle email sending on your server

## Option 4: Form Services (Paid but Simple)

Services like Formspree, Netlify Forms, or Typeform can handle form submissions:

- Formspree: Add `action="https://formspree.io/f/YOUR_FORM_ID"` to the form
- Netlify Forms: Add `netlify` attribute to the form (if hosting on Netlify)

## Current Form Data Structure

When someone submits the form, you'll receive:

```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "phone": "+971 50 123 4567",
  "message": "I'm interested in hypnosis sessions for anxiety",
  "preferredDate": "December 15, 2024",
  "submittedAt": "2024-11-09T10:30:00.000Z"
}
```

## Testing the Form

1. Fill out the form on your website
2. Check browser console for form data
3. Verify WhatsApp message opens correctly
4. Once EmailJS is set up, check your email

## Recommended Next Steps

1. **Set up EmailJS** (15 minutes) - This will give you email notifications
2. **Test the form** - Make sure everything works as expected
3. **Customize email template** - Make it match your branding

## Need Help?

If you need assistance setting up any of these options, I can help you implement them step by step.
