# Hostinger Deployment Guide for Amoha Codes

## Architecture

- **Frontend**: Static files hosted on Hostinger (amohacodes.in)
- **Backend**: Remains on Railway (Python/FastAPI requires server runtime)

---

## Step 1: Build the Frontend

Run these commands in the `frontend` folder:

```bash
cd frontend
npm install
npm run build
```

This creates a `dist` folder with all static files.

---

## Step 2: Upload to Hostinger

### Option A: Using File Manager (Easiest)

1. Log in to Hostinger hPanel
2. Go to **Files** → **File Manager**
3. Navigate to `public_html` folder
4. **Delete** all existing files in `public_html` (if any)
5. Click **Upload** and upload ALL contents from your local `frontend/dist` folder:
   - `index.html`
   - `assets/` folder (with all JS, CSS files)
   - `.htaccess` file (important for SPA routing!)
   - Any other files in dist

### Option B: Using FTP

1. Get FTP credentials from Hostinger hPanel → **Files** → **FTP Accounts**
2. Use FileZilla or any FTP client
3. Connect and upload all contents of `frontend/dist` to `public_html`

---

## Step 3: Verify .htaccess is Uploaded

The `.htaccess` file is **critical** for React Router to work. Make sure:
- It's in the root of `public_html`
- It's not hidden (some FTP clients hide dotfiles)

If missing, create it manually with this content:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /

  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteRule ^ index.html [L]
</IfModule>
```

---

## Step 4: Enable SSL (HTTPS)

1. In Hostinger hPanel, go to **Security** → **SSL**
2. Enable **Free SSL** for amohacodes.in
3. Enable **Force HTTPS** redirect

---

## Step 5: Update Railway Backend Environment

In Railway dashboard, update these environment variables:

```
FRONTEND_URL=https://amohacodes.in
CORS_ORIGINS=https://amohacodes.in,https://www.amohacodes.in
```

Also update OAuth redirect URIs in Google/Facebook developer consoles if using OAuth.

---

## Step 6: Update DNS (If Not Already Done)

If your domain isn't pointing to Hostinger yet:

1. In Hostinger hPanel → **Domains** → **DNS Zone**
2. Note the nameservers or A record IP
3. Update your domain registrar to point to Hostinger

---

## Folder Structure After Deployment

```
public_html/
├── index.html          # Main entry point
├── .htaccess           # Apache routing config
├── assets/
│   ├── index-xxx.js    # Bundled JavaScript
│   ├── index-xxx.css   # Bundled CSS
│   └── ...
└── (any other static files)
```

---

## Troubleshooting

### Pages return 404 on refresh
→ Check `.htaccess` is present and correct

### API calls fail (CORS error)
→ Verify Railway backend has the correct CORS_ORIGINS

### Site shows "Index of /" instead of app
→ Make sure `index.html` is in `public_html` root

### CSS/JS not loading
→ Check `assets` folder was uploaded correctly

---

## Re-deployment Process

When you make changes:

1. Run `npm run build` in frontend folder
2. Upload the new `dist` contents to `public_html` (overwrite existing)

---

## Quick Commands

```bash
# Build for production
cd frontend
npm run build

# The built files are in:
frontend/dist/
```
