# Typebot Setup & Activation Guide for Goldfish Marketing

This guide explains how to activate your **Goldfish Growth Concierge** bot using the pre-configured template.

---

## 1. Why Did You See "The bot you're looking for doesn't exist"?

When the website loaded the Typebot viewer, it requested a bot with the identifier:
`https://viewer.typebot.io/goldfish-growth-concierge`

Because you have not yet created or clicked **"Publish"** on a bot with that ID in Typebot, Typebot's server returns its default 404 message: *"The bot you're looking for doesn't exist."*

**The good news:** Your website code and embed architecture are working properly! All that remains is to import the bot flow into Typebot and hit **Publish**.

---

## 2. Fast 3-Minute Setup (Using Free Typebot Cloud)

### **Step 1: Log in to Typebot**
1. Open [https://app.typebot.io](https://app.typebot.io) in your browser.
2. Sign in or create a free account.

### **Step 2: Import the Pre-Built Goldfish Bot**
We have pre-built the full flow for you with all 4 industry pathways (Luxury Villa, Restaurant, Safari, SME) and WhatsApp handoff:
1. Click **"Create a typebot"**.
2. Select **"Import a file"**.
3. Choose the template file from this repository:
   `c:\Users\Malik\Desktop\goldfish-digital-site\typebot-templates\goldfish-growth-concierge.json`

### **Step 3: Publish the Bot**
1. Review the canvas. Everything (questions, buttons, theme tokens in Goldfish gold and dark charcoal) is already set up.
2. In the top-right corner, click **"Publish"**.

### **Step 4: Copy Your Bot Identifier**
1. Go to the **"Share"** tab at the top.
2. Check your public bot URL. For example:
   - If the URL is `https://typebot.co/goldfish-growth-concierge`, your Bot ID is: `goldfish-growth-concierge`
   - If it gives you an auto-generated slug like `my-goldfish-bot-7x9`, that is your Bot ID.

### **Step 5: Add the Environment Variable to Vercel**
1. Go to your **Vercel Dashboard** → your project (`goldfish-digital-site`).
2. Go to **Settings** → **Environment Variables**.
3. Add:
   - **Key:** `NEXT_PUBLIC_TYPEBOT_ID`
   - **Value:** `your-bot-id` (e.g. `goldfish-growth-concierge`)
4. Redeploy, or push a commit.

---

## 3. Alternative: Self-Hosting Typebot on Your Local Desktop / VPS

If you prefer to host Typebot completely on your own machine or VPS:
1. Open a terminal in `c:\Users\Malik\Desktop\typebot`.
2. Run:
   ```bash
   docker compose up -d
   ```
3. Open `http://localhost:8080` in your browser.
4. Import `typebot-templates/goldfish-growth-concierge.json` and click **Publish**.
5. In `goldfish-digital-site/.env.local`:
   ```env
   NEXT_PUBLIC_TYPEBOT_API_HOST="http://localhost:8081"
   NEXT_PUBLIC_TYPEBOT_ID="goldfish-growth-concierge"
   ```

---

## 4. Built-In Native Fail-Safe (Zero Broken Screens)

While you are setting up your bot in Typebot Cloud, we updated the floating bubble so that it **never shows the Typebot 404 screen to visitors**:
- When `NEXT_PUBLIC_TYPEBOT_ID` is not yet configured, the floating bubble opens a **Native Goldfish Concierge Drawer** (with the 4 industry selectors, instant scope calculation, and 1-tap WhatsApp to Malack Bwana).
- As soon as you set `NEXT_PUBLIC_TYPEBOT_ID` in Vercel, it automatically switches to your live Typebot conversational canvas!
