# Quick Setup Checklist ✅

## EmailJS Configuration (5 minutes)

### 1. Sign up at EmailJS
🔗 https://www.emailjs.com/

### 2. Connect Gmail Service
- Add Gmail service
- Connect **Farmauraofc@gmail.com**
- Copy **Service ID**

### 3. Create Email Template
- Use the template from `EMAILJS_SETUP_GUIDE.md`
- Set "To email" field to: `{{to_email}}`
- Copy **Template ID**

### 4. Get Public Key
- Account → General → Copy **Public Key**

### 5. Update `.env.local`
```bash
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### 6. Restart Server
```bash
npm run dev
```

### 7. Test!
- Fill out contact form
- Check Farmauraofc@gmail.com inbox

---

## What Happens When Form is Submitted?

1. ✅ Data saved to **Azure Cosmos DB**
2. ✅ Email sent to **Farmauraofc@gmail.com**
3. ✅ User sees success message

---

## Do You Need Your Email Password? ❌ NO!

EmailJS handles authentication through OAuth. Your password is never exposed in the code.

---

See `EMAILJS_SETUP_GUIDE.md` for detailed instructions.
