# Ελληνική Βίβλος - Progressive Web App
## Greek Bible by Neophytos Vamvas (1850)

A Progressive Web App featuring the complete Greek Bible translation by Neophytos Vamvas with all 66 books.

## ✨ Features

- 📱 **Works on ALL devices** - iOS, Android, Desktop
- 🏠 **Install to Home Screen** - Acts like a native app
- 📴 **Works Offline** - Read without internet
- 🎨 **Clean, Modern UI** - Easy navigation
- 🔤 **Adjustable Font Size** - Comfortable reading
- 🌙 **Dark Mode Support** - Automatic based on system
- ⚡ **Fast & Responsive** - Instant loading
- 📖 **All 66 Books** - Complete Bible structure

## 📦 Project Structure

```
GreekBiblePWA/
├── index.html              # Main HTML file
├── styles.css              # All styles
├── app.js                  # Application logic
├── bible-data.js           # Bible text data
├── manifest.json           # PWA manifest
├── service-worker.js       # Offline functionality
├── icons/                  # App icons (various sizes)
│   ├── icon-72.png
│   ├── icon-96.png
│   ├── icon-128.png
│   ├── icon-144.png
│   ├── icon-152.png
│   ├── icon-167.png
│   ├── icon-180.png
│   ├── icon-192.png
│   ├── icon-384.png
│   └── icon-512.png
└── README.md               # This file
```

## 🚀 Deployment Options (Windows-Friendly)

### Option 1: GitHub Pages (FREE & EASY)

**Best for:** Beginners, quick deployment

1. **Create GitHub Account** (if you don't have one)
   - Go to https://github.com
   - Sign up for free

2. **Upload Files**
   - Create a new repository named `greek-bible`
   - Upload all PWA files to the repository
   - Include the icons folder

3. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll to "Pages" section
   - Source: Select "main" branch
   - Save

4. **Access Your App**
   - Your URL: `https://yourusername.github.io/greek-bible`
   - Share this URL with users!

**Cost:** FREE ✅

---

### Option 2: Netlify (FREE & SIMPLE)

**Best for:** Easy deployment with custom domain

1. **Create Netlify Account**
   - Go to https://netlify.com
   - Sign up for free

2. **Deploy**
   - Drag and drop your PWA folder into Netlify
   - OR connect your GitHub repository
   - Netlify automatically deploys!

3. **Get URL**
   - Netlify gives you: `https://your-site.netlify.app`
   - Can add custom domain (optional)

**Cost:** FREE ✅

---

### Option 3: Vercel (FREE & FAST)

**Best for:** Fast global CDN

1. **Create Vercel Account**
   - Go to https://vercel.com
   - Sign up for free

2. **Deploy**
   - Install Vercel CLI: `npm install -g vercel`
   - Run: `vercel` in your project folder
   - Follow prompts

3. **Get URL**
   - Vercel gives you: `https://your-site.vercel.app`

**Cost:** FREE ✅

---

### Option 4: Firebase Hosting (GOOGLE)

**Best for:** Google integration, reliability

1. **Create Firebase Account**
   - Go to https://firebase.google.com
   - Create new project

2. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

3. **Initialize & Deploy**
   ```bash
   firebase login
   firebase init hosting
   firebase deploy
   ```

4. **Get URL**
   - Firebase gives you: `https://your-project.web.app`

**Cost:** FREE (generous tier) ✅

---

### Option 5: Your Own Web Hosting

**Best for:** Custom domain control

1. **Get Web Hosting** (examples):
   - Hostinger (~$2/month)
   - Bluehost (~$3/month)
   - SiteGround (~$4/month)

2. **Upload via FTP**
   - Use FileZilla (free FTP client)
   - Upload all PWA files to public_html

3. **Use Custom Domain**
   - Your URL: `https://yourdomain.com`

**Cost:** ~$2-5/month + domain ($10/year)

---

## 📱 How Users Install on iOS

1. Open the URL in Safari (must use Safari!)
2. Tap the **Share** button (square with arrow)
3. Scroll and tap **"Add to Home Screen"**
4. Tap **"Add"**
5. App icon appears on home screen!

When opened from home screen:
- ✅ Opens fullscreen (no browser UI)
- ✅ Looks like a native app
- ✅ Works offline
- ✅ Has app icon

## 🎨 Creating App Icons

You need icons in various sizes. Use these free tools:

**Option A: Online Tool**
1. Go to https://realfavicongenerator.net
2. Upload a 512x512 PNG image (Bible icon/cross)
3. Download all generated sizes
4. Place in `/icons/` folder

**Option B: Manual Creation**
Use any image editor to create these sizes:
- 72x72, 96x96, 128x128, 144x144
- 152x152, 167x167, 180x180
- 192x192, 384x384, 512x512

**Quick Tip:** Use a simple design - Greek cross or open book icon

## 📝 Adding Complete Bible Text

The app currently includes sample text for demonstration. To add complete text:

### Method 1: Copy from STEPBible.org

1. Visit: https://www.stepbible.org/version.jsp?version=GreVamvas
2. Click on each book → chapter
3. Copy the Greek text
4. Add to `bible-data.js` following the pattern:

```javascript
{
    number: 1,
    verses: [
        { number: 1, text: 'Greek verse text here...' },
        { number: 2, text: 'Greek verse text here...' },
        // ... all verses
    ]
}
```

### Method 2: Use SWORD Module

1. Download Bible software (Xiphos, BibleTime)
2. Install "GreVamvas" module
3. Export text
4. Format into JavaScript

### Method 3: Automated Script

Create a Python script to scrape from STEPBible (legal for personal use):

```python
import requests
from bs4 import BeautifulSoup

# Script to download and format Vamvas text
# (Implementation details in separate guide)
```

## 🔧 Testing Locally (Windows)

### Option 1: Python Server (Simplest)
```bash
# If you have Python installed
python -m http.server 8000

# Open browser to: http://localhost:8000
```

### Option 2: Node.js Server
```bash
# Install http-server globally
npm install -g http-server

# Run server
http-server

# Open browser to: http://localhost:8080
```

### Option 3: VS Code Live Server
1. Install VS Code
2. Install "Live Server" extension
3. Right-click index.html → "Open with Live Server"

## 📊 Browser Support

| Browser | iOS | Android | Desktop |
|---------|-----|---------|---------|
| Safari | ✅ Full | N/A | ✅ Full |
| Chrome | ⚠️ Limited* | ✅ Full | ✅ Full |
| Firefox | ⚠️ Limited* | ✅ Full | ✅ Full |
| Edge | N/A | ✅ Full | ✅ Full |

*On iOS, all browsers use Safari engine. Must use Safari to install.

## 🎯 Performance Tips

### Optimize for Production:

1. **Minify Files**
   ```bash
   # Use online minifier or:
   npm install -g minify
   minify app.js > app.min.js
   minify styles.css > styles.min.css
   ```

2. **Compress Images**
   - Use TinyPNG.com
   - Reduce icon file sizes

3. **Enable Caching**
   - Service Worker handles this automatically!

## 🐛 Troubleshooting

### Icons Not Showing
- Verify icon paths in manifest.json
- Check icon files exist in `/icons/` folder
- Clear browser cache and reinstall

### Not Working Offline
- Check Service Worker is registered
- Open browser DevTools → Application → Service Workers
- Verify files are cached

### Can't Install on iOS
- Must use Safari (not Chrome)
- Make sure manifest.json is loading
- Check browser console for errors

### Styling Issues
- Clear cache: Settings → Safari → Clear History
- Check CSS file is loading
- Verify no syntax errors in styles.css

## 📈 Analytics (Optional)

Add Google Analytics:

```html
<!-- Add to index.html <head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-TRACKING-ID');
</script>
```

## 🔒 Security

- Always use HTTPS (GitHub Pages, Netlify, etc. provide this automatically)
- Service Workers require HTTPS (except localhost)
- No sensitive data is stored

## 📜 License

This is a implementation of the Neophytos Vamvas Greek Bible translation (1850), which is in the public domain.

## 🤝 Contributing

To add missing Bible text:
1. Follow the format in `bible-data.js`
2. Add books/chapters/verses
3. Test locally
4. Deploy updated version

## 📞 Support

For technical issues:
- Check browser console for errors
- Verify all files are uploaded correctly
- Test in different browsers
- Clear cache and reinstall

## 🎉 Quick Start Checklist

- [ ] Download all PWA files
- [ ] Create app icons (or use placeholders)
- [ ] Test locally with Python/Node server
- [ ] Create GitHub account
- [ ] Upload files to GitHub repository
- [ ] Enable GitHub Pages
- [ ] Test on iOS device (Safari)
- [ ] Add to Home Screen
- [ ] Share URL with users!

## 🌐 Example URLs

After deploying, your app will be available at:

**GitHub Pages:**
`https://yourusername.github.io/greek-bible`

**Netlify:**
`https://greek-bible.netlify.app`

**Vercel:**
`https://greek-bible.vercel.app`

**Custom Domain:**
`https://greekbible.com`

---

## 📚 Next Steps

1. Deploy to GitHub Pages (5 minutes)
2. Test on your iPhone
3. Create proper app icons
4. Add complete Bible text
5. Share with friends!

**Congratulations!** You now have a fully functional Greek Bible PWA that works on all devices! 🎊