# Image Upload Guide for Love Haute Spaces Website

## 📸 Quick Start: Where to Place Your Images

This website is ready to display YOUR actual furniture and project photos. Follow this simple guide to add them.

---

## 🎯 STEP 1: Add Your Logo

**File:** `images/logo.png`

1. Save your official Love Haute Spaces logo as `logo.png`
2. Place it in the `images/` folder
3. **Recommended specifications:**
   - Format: PNG with transparent background
   - Size: 200x200px minimum
   - Max file size: 100KB

**The logo will automatically appear:**
- Top left corner of navigation bar
- Footer section

---

## 🛋️ STEP 2: Add Product Images

Replace these files with photos of your actual furniture:

| Filename | What to Upload | Location |
|----------|---------------|----------|
| `headboards.jpg` | Photo of your upholstered headboards | `images/` folder |
| `ottomans.jpg` | Photo of your ottomans | `images/` folder |
| `side-tables.jpg` | Photo of your side tables | `images/` folder |
| `drawers.jpg` | Photo of chest of drawers | `images/` folder |

**Image Specifications:**
- Format: JPG or PNG
- Recommended size: 800x600px minimum
- Orientation: Landscape preferred
- File size: Under 300KB each

---

## 🏠 STEP 3: Add Custom Built-In Images

Replace these files with photos of your completed built-in projects:

| Filename | What to Upload | Location |
|----------|---------------|----------|
| `wardrobes.jpg` | Completed custom wardrobe/closet | `images/` folder |
| `bathroom-vanity.jpg` | Completed bathroom vanity | `images/` folder |
| `office-cabinets.jpg` | Office cabinet installation | `images/` folder |
| `tv-stands.jpg` | TV stand unit | `images/` folder |
| `kitchens.jpg` | Custom kitchen project | `images/` folder |

**Image Specifications:**
- Format: JPG or PNG
- Recommended size: 1000x750px minimum
- Show the installed/completed project
- File size: Under 400KB each

---

## 🖼️ STEP 4: Add Gallery Project Photos

Place multiple project photos in the `images/gallery/` folder.

### Naming Convention for Automatic Categorization:

#### **Upholstered Furniture:**
- `headboard-1.jpg`, `headboard-2.jpg`, `headboard-3.jpg`
- `ottoman-1.jpg`, `ottoman-2.jpg`
- `sidetable-1.jpg`
- `drawers-1.jpg`

#### **Kitchens:**
- `kitchen-1.jpg`, `kitchen-2.jpg`, `kitchen-3.jpg`, etc.

#### **Wardrobes:**
- `wardrobe-1.jpg`, `wardrobe-2.jpg`, `wardrobe-3.jpg`, etc.

#### **Bathroom Vanities:**
- `bathroom-1.jpg`, `bathroom-2.jpg`, etc.

#### **Custom Cabinets (TV stands, office cabinets):**
- `cabinet-1.jpg`, `cabinet-2.jpg`, `cabinet-3.jpg`, etc.

### Gallery Image Specifications:
- Format: JPG or PNG
- Recommended size: 1200x900px minimum
- Orientation: Any (landscape, portrait, or square)
- File size: Under 500KB each
- **Upload as many as you want!**

---

## 🌅 STEP 5: Optional Hero Background Image

**File:** `images/hero.jpg`

Upload a beautiful, high-quality image for the homepage hero section background.

**Suggestions:**
- Luxurious interior with your furniture
- Beautiful living space showcase
- Elegant bedroom or kitchen setup

**Specifications:**
- Format: JPG
- Recommended size: 1920x1080px (Full HD)
- File size: Under 800KB
- Should look good slightly darkened (overlay effect applied)

---

## 🌟 STEP 6: Optional About Section Image

**File:** `images/about.jpg`

Upload an image showing your craftsmanship, workshop, or a beautiful furniture piece.

**Specifications:**
- Format: JPG or PNG
- Recommended size: 800x600px
- File size: Under 400KB

---

## ✅ Quick Checklist

Before launching your website, ensure you've added:

- [ ] Business logo (`logo.png`)
- [ ] 4 product images (headboards, ottomans, side tables, drawers)
- [ ] 5 built-in images (wardrobes, bathroom, office, TV stands, kitchens)
- [ ] At least 10-15 gallery images showcasing completed projects
- [ ] Optional: Hero background image
- [ ] Optional: About section image

---

## 📷 Photography Tips

### **Lighting:**
- Natural daylight is best
- Avoid harsh shadows
- Ensure the furniture is well-lit

### **Composition:**
- Keep the background clean and uncluttered
- Show the furniture from flattering angles
- Include context (furniture in a room) when possible

### **Consistency:**
- Try to maintain consistent lighting across photos
- Similar photo quality and style looks more professional

### **Before Taking Photos:**
- Clean the furniture and surrounding area
- Remove any distracting items
- Straighten cushions, adjust fabrics

---

## 🔧 Image Optimization (Optional)

To make your website load faster, you can optimize images before uploading:

### **Free Online Tools:**
1. **TinyPNG** (https://tinypng.com) - Compress JPG and PNG
2. **Squoosh** (https://squoosh.app) - Advanced compression
3. **Compressor.io** (https://compressor.io) - Easy compression

### **Quick Optimization:**
1. Upload your image to TinyPNG
2. Download the compressed version
3. Save it with the correct filename
4. Place it in the appropriate folder

---

## 🆘 Troubleshooting

### **Image Not Showing?**
- Check the filename matches exactly (case-sensitive)
- Ensure the image is in the correct folder
- Check the file format is JPG or PNG
- Try refreshing your browser (Ctrl+F5 or Cmd+Shift+R)

### **Image Looks Stretched or Distorted?**
- Use higher resolution source images
- Maintain aspect ratio when resizing
- Upload landscape-oriented images for best results

### **Website Loading Slowly?**
- Compress your images using TinyPNG
- Ensure images are under 500KB each
- Reduce image dimensions if very large

---

## 📝 Advanced: Updating Gallery Categories

If you want to add new gallery images and assign them to categories:

1. Open `js/script.js` in a text editor
2. Find the `galleryImages` array (around line 75)
3. Add your new image following this format:

```javascript
{ 
    src: 'images/gallery/your-image-name.jpg', 
    category: 'kitchens',  // Options: upholstered, kitchens, wardrobes, bathroom, cabinets
    alt: 'Description of the image' 
}
```

**Example:**
```javascript
{ src: 'images/gallery/kitchen-4.jpg', category: 'kitchens', alt: 'Modern White Kitchen' },
{ src: 'images/gallery/headboard-5.jpg', category: 'upholstered', alt: 'Grey Velvet Headboard' }
```

---

## 💡 Pro Tips

1. **Take more photos than you need** - You can always choose the best ones
2. **Update regularly** - Add new projects to the gallery as you complete them
3. **Show variety** - Include different styles, colors, and room types
4. **Highlight details** - Close-up shots of craftsmanship are impressive
5. **Before/After** - If possible, show the transformation

---

## 🎉 You're Ready!

Once you've added your images:
1. Open `index.html` in your browser to preview
2. Check that all images load correctly
3. Test on your phone to see how it looks on mobile
4. Deploy your website (see README.md for deployment instructions)

---

**Need Help?**  
Contact: sthandwa28@icloud.com  
WhatsApp: 065 145 3814

**Beautiful Spaces, Beautiful Living.** ✨
