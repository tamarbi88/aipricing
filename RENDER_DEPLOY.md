# Deploy to Render.com

## Option 1: Using Render Dashboard (Recommended)

### Step 1: Prepare Your Files
All your files are ready in the project folder.

### Step 2: Create a GitHub Repository
1. Go to https://github.com and sign up/login
2. Click "New repository"
3. Name it: `monday-pricing-page`
4. Don't initialize with README
5. Click "Create repository"

### Step 3: Upload Files to GitHub
1. On the repository page, click "uploading an existing file"
2. Drag and drop ALL files from your project folder:
   - pricing.html
   - monday-vibe-logo.png
   - monday-sidekick-logo-new.png
   - render.yaml
   - Any other image files
3. Click "Commit changes"

### Step 4: Deploy on Render
1. Go to https://dashboard.render.com
2. Sign up/login (free)
3. Click "New +" → "Static Site"
4. Connect your GitHub account
5. Select your repository: `monday-pricing-page`
6. Configure:
   - Name: `monday-pricing-page`
   - Build Command: (leave empty)
   - Publish Directory: `.` (or leave empty)
7. Click "Create Static Site"
8. Wait 2-3 minutes for deployment
9. Get your URL: `https://monday-pricing-page.onrender.com`

## Option 2: Manual Deploy (Without Git)

Render doesn't support direct file upload, so you'll need to use GitHub first.

## Your Site URL
Once deployed, your site will be at:
`https://monday-pricing-page.onrender.com/pricing.html`

Or configure it so pricing.html is the default page.
