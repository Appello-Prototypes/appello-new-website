# Favicon Setup Guide

The favicon configuration has been added to `app/layout.tsx`. You now need to add the actual favicon files to the `public` directory.

## Required Files

Place these files in the `public` directory:

1. **favicon.ico** - Main favicon (16x16, 32x32, or 48x48 pixels)
2. **favicon-16x16.png** - 16x16 PNG version
3. **favicon-32x32.png** - 32x32 PNG version  
4. **apple-touch-icon.png** - 180x180 PNG for iOS devices

## Quick Setup Options

### Option 1: Generate from Your Logo
If you have your Appello logo, you can:
1. Use an online favicon generator like https://realfavicongenerator.net/
2. Upload your logo SVG or high-res image
3. Download the generated favicon files
4. Place them in the `public` directory

### Option 2: Use a Simple Icon
Create a simple favicon using your brand color (#3D6AFF) with the letter "A" or your logo mark.

### Option 3: Convert SVG Logo
If you want to use your existing logo (`public/images/appello-logo-dark.svg`):
1. Extract just the icon/mark portion (the geometric shape)
2. Convert to PNG at the required sizes
3. Save as favicon files

## File Locations

Once you have the files, place them here:
```
public/
  ├── favicon.ico
  ├── favicon-16x16.png
  ├── favicon-32x32.png
  └── apple-touch-icon.png
```

## Testing

After adding the files:
1. Restart your dev server (`npm run dev`)
2. Check the browser tab - you should see your favicon
3. Test on mobile devices for the apple-touch-icon

## Current Configuration

The favicon is configured in `app/layout.tsx` in the metadata object. The configuration supports:
- Standard favicon (favicon.ico)
- PNG favicons for different sizes
- Apple touch icon for iOS devices

