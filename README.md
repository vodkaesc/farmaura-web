<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1-TP70sTE8YrCi6WngBTQAOG54i7B4Hbv

## Run Locally

**Prerequisites:**  Node.js

### Quick Start (Run Both Servers)

**Terminal 1 - Backend API Server:**
```bash
cd server
npm install  # First time only
npm start
```
Backend runs on: http://localhost:3001

**Terminal 2 - Frontend:**
```bash
npm install  # First time only
npm run dev
```
Frontend runs on: http://localhost:3000

### Environment Setup

1. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
2. Set Azure Cosmos DB credentials in [.env.local](.env.local):
   - `VITE_COSMOS_DB_URI`
   - `VITE_COSMOS_DB_KEY`

**Note:** Both servers must be running for the contact form to work!

## Features

- ✅ AI-powered content generation
- ✅ Pilot enquiry form with Azure Cosmos DB integration
- ✅ Fast form submissions (< 2 seconds)
- ✅ Secure backend API architecture

## Documentation

- [ARCHITECTURE_FIX.md](ARCHITECTURE_FIX.md) - Details on backend API architecture
- [COSMOS_DB_INTEGRATION.md](COSMOS_DB_INTEGRATION.md) - Database integration guide
