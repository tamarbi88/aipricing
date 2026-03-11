# Step-by-Step Deployment Guide

## PART 1: Upload Files to GitHub (5 minutes)

### Step 1: Create Repository on GitHub
1. Go to https://github.com and log in
2. Click the "+" icon in top right → "New repository"
3. Repository name: `monday-pricing-page`
4. Description: "monday.com AI Pricing Page"
5. Make it **Public** (so Render can access it)
6. **DO NOT** check "Add a README file"
7. Click "Create repository"

### Step 2: Upload Your Files
1. On the new repository page, you'll see "uploading an existing file"
2. Click "uploading an existing file" link
3. Open File Explorer on your computer
4. Navigate to: `C:\Users\TamarGal\Documents\New Project`
5. Select ALL these files and drag them into GitHub:
   - pricing.html
   - monday-vibe-logo.png
   - monday-sidekick-logo-new.png
   - render.yaml
   - Any other .png image files you have
6. Scroll down and click "Commit changes"
7. Wait for files to upload

## PART 2: Deploy on Render (3 minutes)

### Step 3: Create Render Account
1. Go to https://dashboard.render.com
2. Click "Get Started for Free"
3. Sign up with your GitHub account (easiest option)
4. Authorize Render to access your GitHub

### Step 4: Deploy Your Site
1. In Render dashboard, click "New +" button
2. Select "Static Site"
3. You'll see your GitHub repositories
4. Click "Connect" next to `monday-pricing-page`
5. Configure:
   - **Name:** `monday-pricing-page` (or any name you like)
   - **Branch:** `main` (or `master`)
   - **Root Directory:** (leave empty)
   - **Build Command:** (leave empty)
   - **Publish Directory:** (leave empty)
6. Click "Create Static Site"
7. Wait 2-3 minutes for deployment

### Step 5: Get Your URL
1. Once deployment completes, you'll see a green "Live" status
2. Your site URL will be: `https://monday-pricing-page.onrender.com`
3. Your pricing page: `https://monday-pricing-page.onrender.com/pricing.html`

## That's it! Your site is now live! 🎉
