# Deployment Guide for GitHub Pages

This project is configured to automatically deploy to GitHub Pages using GitHub Actions.

## Setup Instructions

1. **Update the homepage URL in `package.json`**:
   - Replace `https://jasonchee816.github.io/CV` with your actual GitHub Pages URL
   - Format: `https://<your-username>.github.io/<repository-name>`

2. **Enable GitHub Pages in your repository**:
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - Save the settings

3. **Push your code**:
   ```bash
   git add .
   git commit -m "Setup GitHub Pages deployment"
   git push origin main
   ```

4. **Automatic Deployment**:
   - The GitHub Action will automatically build and deploy your app whenever you push to the `main` branch
   - You can check the deployment status in the **Actions** tab of your repository
   - Once deployed, your site will be available at: `https://<your-username>.github.io/<repository-name>`

## Manual Deployment (Alternative)

If you prefer to deploy manually:

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Deploy:
   ```bash
   npm run deploy
   ```

## Notes

- The build folder is automatically generated and should be in `.gitignore`
- The GitHub Action workflow will handle building and deploying automatically
- Make sure your repository is public (or you have GitHub Pro/Team for private repos with Pages)

