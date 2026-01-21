# EmailJS Setup Guide for FarmAura Contact Form

## Overview
The contact form now sends email notifications to **Farmauraofc@gmail.com** whenever someone submits a pilot inquiry. This is done using EmailJS, which means **you don't need to expose your email password in the code**.

---

## Setup Steps (5 minutes)

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **"Sign Up"** (it's FREE - 200 emails/month)
3. Sign up with any email (can use Farmauraofc@gmail.com or a different one)

### Step 2: Add Email Service
1. After logging in, go to **"Email Services"** in the left sidebar
2. Click **"Add New Service"**
3. Select **"Gmail"**
4. Click **"Connect Account"** and sign in with **Farmauraofc@gmail.com**
5. Give it a name like "FarmAura Gmail"
6. Click **"Create Service"**
7. **Copy the Service ID** (looks like `service_xxxxxxx`)

### Step 3: Create Email Template
1. Go to **"Email Templates"** in the left sidebar
2. Click **"Create New Template"**
3. Replace the template content with this:

```
Subject: New Pilot Inquiry - {{from_name}}

From: {{from_name}} ({{from_email}})
Organization: {{organization}}
Role: {{role}}

Pilot Objectives:
{{pilot_objectives}}

Submitted: {{submission_date}}

---
This inquiry was submitted via the FarmAura website contact form.
```

4. In the **"To email"** field at the top, enter: `{{to_email}}`
5. Click **"Save"**
6. **Copy the Template ID** (looks like `template_xxxxxxx`)

### Step 4: Get Public Key
1. Go to **"Account"** → **"General"** in the left sidebar
2. Find the **"Public Key"** section
3. **Copy your Public Key** (looks like a long string)

### Step 5: Update .env.local
Open your `.env.local` file and replace the placeholders:

```bash
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx    # From Step 2
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx  # From Step 3
VITE_EMAILJS_PUBLIC_KEY=your_public_key    # From Step 4
```

### Step 6: Restart Dev Server
```bash
# Stop the current dev server (Ctrl+C)
# Then restart it
npm run dev
```

---

## How It Works

1. **User fills out the contact form** on your website
2. **Form data is saved** to Azure Cosmos DB (as before)
3. **Email is sent** to Farmauraofc@gmail.com with all the details
4. **User sees success message**

### Email Content Example:
```
Subject: New Pilot Inquiry - Dr. Rajesh Kumar

From: Dr. Rajesh Kumar (rajesh@example.com)
Organization: Karnataka Agriculture Department
Role: District Officer

Pilot Objectives:
We want to pilot FarmAura in 5 districts for rice and wheat farmers...

Submitted: 21/01/2026, 11:30:45 PM
```

---

## Security Notes ✅

- ✅ **No email password in code** - EmailJS handles authentication
- ✅ **Public key is safe** - It's meant to be in frontend code
- ✅ **Emails are sent from EmailJS servers** - Not from your browser
- ✅ **Rate limited** - 200 emails/month on free tier (upgradable)

---

## Testing

1. Fill out the contact form on your website
2. Check the **Farmauraofc@gmail.com inbox** for the email
3. Check the **EmailJS dashboard** to see email logs

---

## Troubleshooting

### Email not received?
1. Check **spam/junk folder** in Gmail
2. Check **EmailJS dashboard** → "Email Log" for errors
3. Verify all 3 environment variables are set correctly
4. Make sure you restarted the dev server after updating .env.local

### Still having issues?
- Check browser console for errors
- Verify the EmailJS service is connected to the correct Gmail account
- Make sure the template has `{{to_email}}` in the "To email" field

---

## Free Tier Limits

- **200 emails/month** - More than enough for a landing page
- If you need more, upgrade to paid plan ($7/month for 1000 emails)

---

## Alternative: If You Want to Use Your Own Email Server

If you prefer to send emails directly from your backend without EmailJS, I can set up **Nodemailer** instead. This requires:
- Your Gmail address
- An **App Password** (not your regular password)
- Backend configuration

Let me know if you'd prefer this approach!
