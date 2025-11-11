# 🚀 Deployment Guide

## Deploy Your Bimasakti Website to the Internet

Once you've tested your website locally, you can deploy it to make it accessible to everyone on the internet.

---

## 🌐 Recommended Deployment Platform: Vercel

Vercel is the company behind Next.js and offers the best hosting experience for Next.js applications.

### ✅ Why Vercel?
- **FREE** for personal/team projects
- **Automatic HTTPS** certificate
- **Global CDN** for fast loading worldwide
- **Automatic deployments** from Git
- **Zero configuration** needed
- **Custom domains** supported
- **Built-in analytics**

---

## 📝 Step-by-Step Deployment

### Option 1: Deploy with Vercel (Recommended)

#### 1. **Create a GitHub Repository**

First, push your code to GitHub:

```powershell
# Initialize git (if not already)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Bimasakti Racing Team Website"

# Create a new repository on GitHub.com, then:
git remote add origin https://github.com/YOUR-USERNAME/bimasakti-website.git
git branch -M main
git push -u origin main
```

#### 2. **Deploy to Vercel**

1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with GitHub
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"
7. Done! Your site is live in ~2 minutes

Your URL will be: `https://your-project-name.vercel.app`

#### 3. **Custom Domain (Optional)**

1. Buy a domain (e.g., bimasaktiugm.com from Namecheap, GoDaddy, etc.)
2. In Vercel dashboard, go to Settings → Domains
3. Add your custom domain
4. Update DNS records as instructed
5. Wait 24-48 hours for DNS propagation

---

### Option 2: Deploy with Netlify

1. Go to [netlify.com](https://netlify.com)
2. Sign up/Login with GitHub
3. Click "Add new site" → "Import an existing project"
4. Connect to GitHub and select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Click "Deploy site"

---

### Option 3: Deploy with GitHub Pages

Not recommended for Next.js, but possible with static export.

Add to `next.config.js`:
```javascript
output: 'export',
```

Then:
```powershell
npm run build
```

Upload the `out` folder to GitHub Pages.

---

## 🔧 Pre-Deployment Checklist

Before deploying, make sure:

- [ ] All social media links are correct
- [ ] Email address is correct
- [ ] Images are optimized
- [ ] SEO metadata is complete
- [ ] Contact information is accurate
- [ ] Test on mobile devices
- [ ] Check all animations work
- [ ] Verify responsive design
- [ ] Run `npm run build` locally to check for errors

---

## 🏗️ Build for Production

Test the production build locally:

```powershell
# Build the production version
npm run build

# Start production server
npm start
```

Open `http://localhost:3000` to test the production build.

---

## 📊 Environment Variables (If Needed Later)

Create a `.env.local` file for sensitive data:

```env
NEXT_PUBLIC_SITE_URL=https://bimasaktiugm.com
NEXT_PUBLIC_CONTACT_EMAIL=bimasakti.fsaeteam@ugm.ac.id
```

In Vercel/Netlify, add these in the dashboard under Environment Variables.

---

## 🔒 Security Best Practices

1. **Never commit sensitive data** (API keys, passwords)
2. **Use environment variables** for secrets
3. **Enable HTTPS** (automatic on Vercel/Netlify)
4. **Set up proper CORS** if adding APIs later
5. **Keep dependencies updated** with `npm update`

---

## 📈 Post-Deployment

### Add Analytics

**Google Analytics:**
```typescript
// In src/app/layout.tsx
<Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
```

**Vercel Analytics:**
- Already included for free in Vercel projects

### Performance Monitoring

- **Vercel:** Built-in performance monitoring
- **Lighthouse:** Run in Chrome DevTools
- **PageSpeed Insights:** Test at [pagespeed.web.dev](https://pagespeed.web.dev)

---

## 🌍 Custom Domain Setup Example

### For Vercel:

1. **Add domain in Vercel dashboard**
2. **Add these DNS records at your domain registrar:**

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

3. **Wait for DNS propagation** (24-48 hours)
4. **SSL certificate auto-generates** (free)

---

## 🎯 Recommended Custom Domains

- `bimasaktiugm.com`
- `bimasa kti-racing.com`
- `brt-ugm.com`
- `fsaeugm.com`

Register at:
- [Namecheap.com](https://namecheap.com) (cheapest)
- [GoDaddy.com](https://godaddy.com)
- [Google Domains](https://domains.google)

---

## 🔄 Continuous Deployment

Once set up with Vercel/Netlify:

1. Make changes to your code
2. Commit and push to GitHub
3. Deployment happens automatically
4. Live site updates in ~2 minutes

No manual deployment needed!

---

## 📱 Social Media Integration

After deployment, share your links:

**Instagram Story:**
- Take screenshot of website
- Add link sticker with your URL

**Link in Bio:**
- Update bio link to your website URL

**Facebook/Twitter:**
- Share with description and preview card

---

## 🐛 Common Deployment Issues

### Build Fails

**Error:** `Module not found`
**Fix:** Run `npm install` and commit `package-lock.json`

**Error:** `TypeScript errors`
**Fix:** Set `typescript: { ignoreBuildErrors: true }` in `next.config.js` (temporary)

### Images Not Loading

**Error:** Images return 404
**Fix:** Check `next.config.js` has correct `remotePatterns`

### Styles Not Applied

**Error:** No Tailwind styles
**Fix:** Make sure `globals.css` is imported in `layout.tsx`

---

## 💰 Cost Estimation

### Free Tier (Perfect for this project):
- **Vercel:** FREE forever for personal projects
- **Domain:** $10-15/year (optional)
- **Total:** $0-15/year

### Paid Features (Not needed now):
- Vercel Pro: $20/month (for team features)
- Enterprise hosting: $1000+/month (for huge sites)

---

## 🎉 You're Ready to Deploy!

Your website is production-ready. Choose Vercel for the easiest deployment experience.

### Quick Deploy Command:

```powershell
# Install Vercel CLI
npm i -g vercel

# Deploy from terminal
vercel

# Follow prompts, done!
```

---

## 📞 Need Help?

- Vercel Docs: [vercel.com/docs](https://vercel.com/docs)
- Next.js Deployment: [nextjs.org/docs/deployment](https://nextjs.org/docs/deployment)
- Vercel Support: [vercel.com/support](https://vercel.com/support)

---

**🚀 Ready to launch? Your Bimasakti Racing Team website will be live in minutes!**
