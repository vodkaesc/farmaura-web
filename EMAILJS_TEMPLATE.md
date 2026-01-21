# EmailJS Template Configuration

## Template Settings

### Template Name
`FarmAura Pilot Inquiry Notification`

### From Name
`FarmAura Contact Form`

### From Email
Use the default EmailJS email (will be configured automatically)

### To Email
```
{{to_email}}
```
⚠️ **Important**: This must be exactly `{{to_email}}` - it's a variable that will be replaced with Farmauraofc@gmail.com

### Reply To
```
{{from_email}}
```
This allows you to reply directly to the person who submitted the form.

---

## Email Subject
```
🌾 New Pilot Inquiry from {{from_name}} - {{organization}}
```

---

## Email Body (HTML Template)

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            background: linear-gradient(135deg, #2d5016 0%, #4a7c2c 100%);
            color: white;
            padding: 20px;
            border-radius: 8px 8px 0 0;
            text-align: center;
        }
        .content {
            background: #f8f9fa;
            padding: 30px;
            border: 1px solid #e0e0e0;
            border-top: none;
            border-radius: 0 0 8px 8px;
        }
        .field {
            margin-bottom: 20px;
        }
        .label {
            font-weight: bold;
            color: #2d5016;
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        .value {
            margin-top: 5px;
            padding: 10px;
            background: white;
            border-left: 3px solid #4a7c2c;
            border-radius: 4px;
        }
        .objectives {
            white-space: pre-wrap;
            min-height: 60px;
        }
        .footer {
            margin-top: 20px;
            padding-top: 20px;
            border-top: 2px solid #e0e0e0;
            font-size: 12px;
            color: #666;
        }
        .cta {
            background: #4a7c2c;
            color: white;
            padding: 12px 24px;
            text-decoration: none;
            border-radius: 6px;
            display: inline-block;
            margin-top: 15px;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1 style="margin: 0; font-size: 24px;">🌾 New Pilot Inquiry</h1>
        <p style="margin: 5px 0 0 0; opacity: 0.9;">FarmAura Website Contact Form</p>
    </div>
    
    <div class="content">
        <div class="field">
            <div class="label">Contact Person</div>
            <div class="value">{{from_name}}</div>
        </div>
        
        <div class="field">
            <div class="label">Email Address</div>
            <div class="value">
                <a href="mailto:{{from_email}}" style="color: #2d5016;">{{from_email}}</a>
            </div>
        </div>
        
        <div class="field">
            <div class="label">Organization</div>
            <div class="value">{{organization}}</div>
        </div>
        
        <div class="field">
            <div class="label">Role / Designation</div>
            <div class="value">{{role}}</div>
        </div>
        
        <div class="field">
            <div class="label">Pilot Objectives</div>
            <div class="value objectives">{{pilot_objectives}}</div>
        </div>
        
        <div class="footer">
            <strong>Submitted:</strong> {{submission_date}}<br>
            <strong>Source:</strong> FarmAura Website Contact Form<br>
            <br>
            <a href="mailto:{{from_email}}" class="cta">Reply to {{from_name}}</a>
        </div>
    </div>
</body>
</html>
```

---

## Plain Text Version (Fallback)

```
NEW PILOT INQUIRY - FARMAURA

Contact Person: {{from_name}}
Email: {{from_email}}
Organization: {{organization}}
Role: {{role}}

PILOT OBJECTIVES:
{{pilot_objectives}}

---
Submitted: {{submission_date}}
Source: FarmAura Website Contact Form

Reply to this inquiry: {{from_email}}
```

---

## Template Variables Used

| Variable | Description | Example |
|----------|-------------|---------|
| `{{to_email}}` | Recipient email | Farmauraofc@gmail.com |
| `{{from_name}}` | Submitter's name | Dr. Rajesh Kumar |
| `{{from_email}}` | Submitter's email | rajesh@example.com |
| `{{organization}}` | Organization name | Karnataka Agriculture Dept |
| `{{role}}` | Job title/role | District Officer |
| `{{pilot_objectives}}` | Inquiry details | We want to pilot... |
| `{{submission_date}}` | Timestamp | 21/01/2026, 11:30:45 PM |

---

## How to Use This Template

1. Copy the **HTML Template** above
2. In EmailJS dashboard, go to **Email Templates**
3. Click **"Create New Template"**
4. Switch to **"HTML"** tab
5. Paste the HTML template
6. Set the **Subject**, **To Email**, and **Reply To** fields as shown above
7. Click **"Save"**
8. Copy the Template ID and add it to your `.env.local` file

---

## Preview

The email will look professional with:
- ✅ Green header with FarmAura branding
- ✅ Clearly labeled fields
- ✅ Easy-to-read layout
- ✅ Reply button for quick response
- ✅ Timestamp and source tracking

---

## Testing

After setting up:
1. Submit a test form on your website
2. Check Farmauraofc@gmail.com
3. Verify all fields are populated correctly
4. Test the "Reply" button works
