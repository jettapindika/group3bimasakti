# ✅ Complete Setup Checklist

Follow this checklist step-by-step to get your website running!

---

## 🎯 Phase 1: First-Time Setup (Do This First!)

- [ ] **Node.js is installed** (Downloaded from nodejs.org)
- [ ] **Close VS Code completely** (Very important!)
- [ ] **Reopen VS Code**
- [ ] **Open project folder:** `c:\Users\Vortex\Downloads\Web\my-nextjs-app`
- [ ] **Open new terminal in VS Code**
- [ ] **Verify Node.js:** Run `node --version` (should show v20.x.x or similar)
- [ ] **Verify npm:** Run `npm --version` (should show 10.x.x or similar)

---

## 🚀 Phase 2: Run the Website

- [ ] **Start dev server:** Run `npm run dev`
- [ ] **Wait for compilation** (first time takes 1-2 minutes)
- [ ] **Look for this message:**
   ```
   ✓ Ready in X ms
   ○ Local: http://localhost:3000
   ```
- [ ] **Open browser** to `http://localhost:3000`
- [ ] **See your amazing website!** 🎉

---

## 👀 Phase 3: What to Check

### Hero Section
- [ ] "GRAND Launching" title appears
- [ ] Title animates smoothly
- [ ] Three warning tapes slide in
- [ ] Race car image loads
- [ ] "COMING SOON" text appears
- [ ] Floating particles animate
- [ ] Golden gradient background shows

### Footer
- [ ] All social media icons display
- [ ] Icons animate on hover
- [ ] Text is readable (white on gradient)
- [ ] Email link works (`mailto:...`)
- [ ] Social links are correct

### Responsiveness
- [ ] **Desktop view** (> 1024px) - Full layout
- [ ] **Tablet view** (768px - 1024px) - 2-column footer
- [ ] **Mobile view** (< 768px) - Stacked layout
- [ ] **Test by resizing browser window**

### Animations
- [ ] Smooth fade-ins
- [ ] Warning tapes slide correctly
- [ ] Social icons scale on hover
- [ ] No janky/stuttering animations

---

## 🐛 Phase 4: Troubleshooting (If Needed)

### If `npm` is not recognized:

- [ ] Run this first:
   ```powershell
   $env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")
   ```
- [ ] Then run: `npm run dev`

### If compilation errors appear:

- [ ] **Don't panic!** TypeScript warnings are normal
- [ ] **Wait for compilation to finish**
- [ ] **Website should still work** even with warnings
- [ ] **Check browser** at `http://localhost:3000`

### If page won't load:

- [ ] **Check console** for errors (F12 in browser)
- [ ] **Try refreshing** browser
- [ ] **Stop server** (Ctrl+C) and restart with `npm run dev`
- [ ] **Clear browser cache** and reload

### If styles look wrong:

- [ ] **Hard refresh:** Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- [ ] **Check Tailwind is working:** Look for colored backgrounds
- [ ] **Restart dev server**

---

## 🎨 Phase 5: Customization (Optional)

Once the website is running, you can customize:

### Update Social Media Handles
- [ ] Open `src/components/layout/footer.tsx`
- [ ] Find the `socialLinks` array (around line 11)
- [ ] Update handles and URLs

### Change Colors
- [ ] Open `tailwind.config.ts`
- [ ] Find `primary` color (line 29)
- [ ] Change `#FABF75` to your color

### Update Metadata
- [ ] Open `src/app/layout.tsx`
- [ ] Update `title` and `description` (line 13-15)

### Add More Content
- [ ] Create new components in `src/components/sections/`
- [ ] Import and add to `src/app/page.tsx`

---

## 📸 Phase 6: Screenshots & Testing

- [ ] **Take screenshots** of the website
- [ ] **Test on real mobile device** (optional)
- [ ] **Share with team** for feedback
- [ ] **Test all links** work correctly

---

## 🌐 Phase 7: Deployment (When Ready)

See `DEPLOYMENT.md` for full guide. Quick steps:

- [ ] Create GitHub account (if needed)
- [ ] Push code to GitHub repository
- [ ] Create Vercel account
- [ ] Connect GitHub to Vercel
- [ ] Deploy (automatic!)
- [ ] Get live URL: `https://your-project.vercel.app`
- [ ] Share with the world! 🎉

---

## 📚 Phase 8: Learn More (Optional)

Want to understand the code better?

- [ ] Read Next.js docs: [nextjs.org/docs](https://nextjs.org/docs)
- [ ] Read Tailwind docs: [tailwindcss.com/docs](https://tailwindcss.com/docs)
- [ ] Read Framer Motion docs: [framer.com/motion](https://framer.com/motion)
- [ ] Explore component files in `src/components/`

---

## 🎯 Success Criteria

You're done when you can check all of these:

- ✅ Website runs on `http://localhost:3000`
- ✅ All sections display correctly
- ✅ Animations are smooth
- ✅ Responsive on mobile, tablet, desktop
- ✅ All links work
- ✅ No console errors in browser
- ✅ Social media info is correct
- ✅ You're happy with how it looks!

---

## 📞 Quick Reference Commands

```powershell
# Start development server
npm run dev

# Stop server
Ctrl + C (in terminal)

# Build for production
npm run build

# Start production server
npm start

# Install missing dependencies
npm install

# Clear cache and restart
Remove-Item -Recurse -Force .next
npm run dev
```

---

## 🆘 Still Having Issues?

1. **Check `QUICKSTART.md`** for basic setup
2. **Check `SETUP_COMPLETE.md`** for full documentation
3. **Check `DEPLOYMENT.md`** for deployment help
4. **Google the error message** (usually helpful!)
5. **Ask your team** or email: bimasakti.fsaeteam@ugm.ac.id

---

## 🎉 Final Step

Once everything works:

- [ ] **Celebrate!** 🎊
- [ ] **Show your team**
- [ ] **Share on social media**
- [ ] **Plan for deployment**

---

**✨ You're all set! Now close VS Code, reopen it, and run `npm run dev` to see your amazing website!**

**Current Status:** 
- ✅ All code written
- ✅ All dependencies installed
- ✅ Configuration complete
- ✅ Ready to run!

**Next Action:** Close VS Code → Reopen → Run `npm run dev` → Open browser to `http://localhost:3000`

---

**Made with ❤️ for Bimasakti Racing Team UGM**
**Formula SAE Electric Team**
