# 🌐 Azure Cosmos DB Integration Guide

Since your project is now saving data **directly** to Azure Cosmos DB without a separate backend server, follow these steps to ensure everything works correctly.

---

### Step 1: Add Credentials to Vercel
Because your `.env.local` file is not uploaded to GitHub, you **must** manually add these variables to Vercel for the live site to work.

1.  Go to your project on the [Vercel Dashboard](https://vercel.com).
2.  Go to **Settings** > **Environment Variables**.
3.  Add these keys with the values from your `.env.local`:
    *   `VITE_COSMOS_DB_URI`
    *   `VITE_COSMOS_DB_KEY`
    *   `VITE_EMAILJS_SERVICE_ID`
    *   `VITE_EMAILJS_TEMPLATE_ID`
    *   `VITE_EMAILJS_PUBLIC_KEY`

---

### 🛡️ Step 2: Fix "CORS Request Blocked" Errors
Azure Cosmos DB blocks direct connections from websites unless you explicitly authorize them.

1.  Log in to the **[Azure Portal](https://portal.azure.com/)**.
2.  Find and click on your **Azure Cosmos DB** account (`farmaura-nosql-db`).
3.  In the left sidebar, under the **Settings** category, click on **CORS**.
4.  In the **Allowed Origins** text box, add these lines:
    *   `https://farmauraco.vercel.app`
    *   `http://localhost:3000` (for local testing)
5.  Click **Save** at the top.
6.  **Wait 1-2 minutes** for Azure to apply the changes.

---

### 🧪 Step 3: Test the Integration
1.  Go to the **Contact** section of your website.
2.  Fill out the form and click **Send Pilot Inquiry**.
3.  Open the **Browser Console** (F12 > Console).
4.  You should see: `✅ Pilot enquiry saved to Cosmos DB: [ID]`
5.  Check your **Email** to verify the EmailJS notification arrived.

---

### ⚠️ Security Warning
By connecting directly to Cosmos DB from the frontend, your **Primary Key** is visible in the browser's "Network" tab. This is fine for development and low-traffic pilots, but for a production-scale app, we recommend moving the database save logic into a **Vercel Serverless Function** to keep your keys hidden.
