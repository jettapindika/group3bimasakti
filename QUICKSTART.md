# 🚀 Quick Start Guide

## IMPORTANT: First Time Setup

Since you just installed Node.js, you MUST:

1. **Close VS Code completely** (not just the terminal, the entire application)
2. **Reopen VS Code**
3. **Open this project folder again**

This is necessary for the system PATH to be updated with Node.js and npm.

## Verify Installation

Open a new terminal and run:

```powershell
node --version
npm --version
```

You should see version numbers like:
- `v20.x.x` or similar for Node
- `10.x.x` or similar for npm

## Start the Website

Once verified, run:

```powershell
npm run dev
```

Then open your browser to: **http://localhost:3000**

## If npm is still not recognized:

Run this in PowerShell:

```powershell
$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")
npm run dev
```

## What You'll See

The website includes:
- ✅ Animated "GRAND Launching" title
- ✅ Warning tape animations
- ✅ Race car display
- ✅ "COMING SOON" text
- ✅ Professional footer with social links
- ✅ Fully responsive design
- ✅ Smooth Framer Motion animations

## Installed Dependencies

All of these have been installed:
- ✅ Next.js 15.0.1
- ✅ React 19.0.0
- ✅ Tailwind CSS 3.4.1
- ✅ Framer Motion 11.15.0
- ✅ Lucide React (icons)
- ✅ shadcn/ui components
- ✅ TypeScript support

## Need Help?

If you encounter any issues:
1. Make sure you closed and reopened VS Code
2. Try running with administrator privileges
3. Delete `node_modules` and `.next` folders, then run `npm install` again

---

**Ready to see your amazing website? Just close VS Code, reopen it, and run `npm run dev`! 🎉**
