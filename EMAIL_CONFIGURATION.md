# Email Configuration for Contact Form

## Current Email Setup

The contact form is currently configured to send emails to: **info@thedesertwhales.com**

## How to Change the Email Address

If you want to receive form submissions at a different email address, here are your options:

### Option 1: Use Formspree (Current Setup)

1. Go to [Formspree.io](https://formspree.io) and create a free account
2. Create a new form with your desired email address
3. Get your form endpoint (looks like: `https://formspree.io/f/YOUR_FORM_ID`)
4. Update the Contact.tsx file:

```javascript
// Find this line in src/components/Contact.tsx:
const response = await fetch("https://formspree.io/f/mjkvgqpw", {

// Replace with your new endpoint:
const response = await fetch("https://formspree.io/f/YOUR_NEW_FORM_ID", {
```

### Option 2: Direct Email Setup

I can also set up the form to send directly to any email address you specify.

## Current Configuration Details

**Form Endpoint:** `https://formspree.io/f/mjkvgqpw`
**Destination Email:** The email associated with this Formspree form
**Reply-To:** Customer's email (so you can reply directly)
**Subject Line:** "New Consultation Request from [Customer Name]"

## To Test Current Setup

1. Fill out the contact form on your website
2. Submit it
3. Check the inbox of the email address you want to receive notifications
4. If you don't receive the email, we need to update the configuration

## What Email Address Do You Want?

Please let me know which email address you'd like to receive the form submissions at, and I'll configure it properly for you:

- info@thedesertwhales.com (current)
- priya@thedesertwhales.com
- Your personal email
- Any other email address

Once you tell me the email, I'll set it up immediately!
