# How to Connect GitHub to Cursor

## Step 1: Install Git

1. **Download Git for Windows:**
   - Go to: https://git-scm.com/download/win
   - Download the latest version
   - Run the installer

2. **During Installation:**
   - Use default settings (recommended)
   - Make sure "Git from the command line and also from 3rd-party software" is selected
   - Complete the installation

3. **Restart Cursor** after installing Git

## Step 2: Configure Git

After installing Git, open a terminal in Cursor and run:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

(Replace with your actual name and GitHub email)

## Step 3: Connect to Your GitHub Repository

### Option A: If you already have a GitHub repository

1. **Open terminal in Cursor** (Terminal menu or Ctrl+`)

2. **Navigate to your project folder:**
   ```bash
   cd "C:\Users\TamarGal\Documents\New Project"
   ```

3. **Initialize Git (if not already done):**
   ```bash
   git init
   ```

4. **Add your GitHub repository as remote:**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   ```
   (Replace with your actual GitHub repository URL)

5. **Add and commit your files:**
   ```bash
   git add .
   git commit -m "Update pricing page with logo and remove Free text"
   ```

6. **Push to GitHub:**
   ```bash
   git push -u origin main
   ```
   (You may need to authenticate - GitHub will prompt you)

### Option B: Create a new GitHub repository

1. Go to https://github.com
2. Click the "+" icon → "New repository"
3. Name it (e.g., "monday-pricing")
4. Don't initialize with README
5. Copy the repository URL
6. Follow Option A steps above

## Step 4: Using GitHub Authentication

When you push, GitHub may ask for authentication. You can:

1. **Use GitHub Personal Access Token:**
   - Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
   - Generate new token with `repo` permissions
   - Use this token as your password when pushing

2. **Or use GitHub CLI:**
   - Install GitHub CLI: https://cli.github.com/
   - Run `gh auth login` in terminal

## After Setup

Once connected, you can:
- Use Cursor's built-in Git features (Source Control panel)
- Push changes directly from Cursor
- I can help you push files using terminal commands

## Quick Commands Reference

```bash
# Check status
git status

# Add files
git add .

# Commit changes
git commit -m "Your commit message"

# Push to GitHub
git push

# Pull latest changes
git pull
```
