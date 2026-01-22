# 🌐 How to find your Azure Backend URL

If you have deployed your Node.js/Express server (from the `server/` folder) to Azure, you need to find the **App Service URL**. This is the value you need for `VITE_API_URL`.

---

### Step 1: Find the URL in Azure Portal
1.  Log in to the [Azure Portal](https://portal.azure.com/).
2.  In the search bar at the top, type **App Services** and select it.
3.  Click on the name of your deployed backend service (e.g., `farmaura-backend`).
4.  On the **Overview** page (the first page that opens), look for the **Default domain** or **URL** in the top-right section.
    *   It usually looks like: `https://your-app-name.azurewebsites.net`
5.  **Copy this URL.**

---

### Step 2: Update your project files

#### 1. Update `.env.local`
Open your `.env.local` file and paste the URL you copied:
```env
# Example:
VITE_API_URL=https://farmaura-backend.azurewebsites.net
```

#### 2. Update Vercel (For the live site)
Since `.env` files are not pushed to GitHub, you **must** add this to Vercel manually:
1.  Go to your project on the [Vercel Dashboard](https://vercel.com).
2.  Go to **Settings** > **Environment Variables**.
3.  Add `VITE_API_URL` as the **Key**.
4.  Paste your Azure URL as the **Value**.
5.  Click **Save**.

---

### ⚠️ Important: Check CORS on Azure
When your website (on Vercel) tries to talk to your backend (on Azure), Azure might block it for security. You need to allow the Vercel domain:

1.  In your **Azure App Service** dashboard, look for **CORS** in the left sidebar (under "API").
2.  Add your Vercel URL (e.g., `https://farmauraco.vercel.app`) to the list of **Allowed Origins**.
3.  Add `http://localhost:3000` as well so you can test locally.
4.  Click **Save** at the top.

---

### 🧪 How to test if it's working
1.  Fill out the **Pilot Enquiry** form on your website.
2.  Open the **Inspect** (F12) Console in your browser.
3.  If you see "✅ Email notification sent successfully" and NO red errors, it's working!
