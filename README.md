# Love Haute Spaces Website

Beautiful, professional website for Love Haute Spaces - a furniture manufacturing and custom built-in furniture business.

## 🌟 Features

- **Modern & Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Elegant Product Showcase** - Beautiful product cards for upholstered furniture
- **Custom Built-Ins Section** - Dedicated section for kitchens, wardrobes, vanities, and more
- **Interactive Gallery** - Filterable project gallery with lightbox image preview
- **WhatsApp Integration** - Direct enquiry links and floating WhatsApp button
- **Contact Form** - Validates inputs and sends enquiries via WhatsApp
- **Smooth Animations** - Professional entrance animations and scroll effects
- **SEO Optimized** - Proper meta tags, alt text, and semantic HTML
- **Fast Loading** - Lazy loading images and optimized performance

## 📁 Project Structure

```
love-haute-spaces/
├── index.html              # Main HTML file
├── css/
│   ├── style.css          # Main stylesheet
│   └── responsive.css     # Mobile & tablet responsive styles
├── js/
│   └── script.js          # JavaScript functionality
├── images/
│   ├── logo.png           # Business logo (UPLOAD YOUR LOGO HERE)
│   ├── hero.jpg           # Hero section background (OPTIONAL)
│   ├── about.jpg          # About section image (UPLOAD HERE)
│   ├── headboards.jpg     # Product image
│   ├── ottomans.jpg       # Product image
│   ├── side-tables.jpg    # Product image
│   ├── drawers.jpg        # Product image
│   ├── wardrobes.jpg      # Built-in image
│   ├── bathroom-vanity.jpg # Built-in image
│   ├── office-cabinets.jpg # Built-in image
│   ├── tv-stands.jpg      # Built-in image
│   ├── kitchens.jpg       # Built-in image
│   └── gallery/           # Gallery project images
│       ├── headboard-1.jpg
│       ├── headboard-2.jpg
│       ├── ottoman-1.jpg
│       ├── kitchen-1.jpg
│       ├── wardrobe-1.jpg
│       └── ... (add more project photos here)
└── README.md              # This file
```

## 🖼️ Adding Your Images

### **IMPORTANT: Replace Placeholder Images**

The website is designed to showcase **YOUR actual furniture and projects**. Follow these steps:

### 1. **Add Your Logo**
   - Place your official Love Haute Spaces logo in: `images/logo.png`
   - Recommended size: 200x200px or larger (PNG format with transparent background)
   - The logo will automatically appear in the navigation bar and footer

### 2. **Add Product Images**
   Replace these placeholder files with actual photos:
   - `images/headboards.jpg` - Photo of your upholstered headboards
   - `images/ottomans.jpg` - Photo of your ottomans
   - `images/side-tables.jpg` - Photo of your side tables
   - `images/drawers.jpg` - Photo of chest of drawers
   - `images/wardrobes.jpg` - Custom wardrobe project
   - `images/kitchens.jpg` - Custom kitchen project
   - `images/bathroom-vanity.jpg` - Bathroom vanity project
   - `images/office-cabinets.jpg` - Office cabinet project
   - `images/tv-stands.jpg` - TV stand project

### 3. **Add Gallery Images**
   Place completed project photos in the `images/gallery/` folder:
   
   **Naming Convention (for automatic categorization):**
   - Upholstered furniture: `headboard-1.jpg`, `ottoman-1.jpg`, etc.
   - Kitchens: `kitchen-1.jpg`, `kitchen-2.jpg`, etc.
   - Wardrobes: `wardrobe-1.jpg`, `wardrobe-2.jpg`, etc.
   - Bathroom vanities: `bathroom-1.jpg`, `bathroom-2.jpg`, etc.
   - Custom cabinets: `cabinet-1.jpg`, `cabinet-2.jpg`, etc.

### 4. **Optional: Hero Background**
   - Add `images/hero.jpg` for a custom hero section background
   - Recommended size: 1920x1080px or larger
   - Should be a beautiful interior or furniture photo

### 📸 Image Guidelines

- **Format**: JPG or PNG
- **Quality**: High resolution but optimized for web (under 500KB per image)
- **Orientation**: Landscape orientation works best for most sections
- **Consistency**: Try to maintain consistent lighting and style across photos
- **Professional**: Use clear, well-lit photos that showcase your craftsmanship

## 🚀 How to Use

### **Option 1: Open Locally**
1. Simply open `index.html` in any modern web browser
2. The website works completely offline

### **Option 2: Deploy to Web Hosting**

#### **GitHub Pages (Free)**
1. Create a GitHub account
2. Create a new repository named `love-haute-spaces`
3. Upload all project files
4. Go to Settings → Pages → Select main branch
5. Your site will be live at `https://yourusername.github.io/love-haute-spaces`

#### **Netlify (Free)**
1. Sign up at [netlify.com](https://netlify.com)
2. Drag and drop the entire project folder
3. Your site will be live instantly with a custom URL

#### **Traditional Web Hosting**
1. Upload all files to your hosting via FTP
2. Ensure `index.html` is in the root directory
3. Access via your domain name

## ✏️ Customization

### **Update Business Information**
Edit `index.html` to update:
- WhatsApp number (currently: 065 145 3814)
- Email address (currently: sthandwa28@icloud.com)
- TikTok handle (currently: @love.haute.spaces)

### **Change Colors**
Edit CSS variables in `css/style.css` (lines 8-15):
```css
:root {
    --bg-cream: #F5F1E8;      /* Background cream color */
    --bg-beige: #E8E0D5;      /* Background beige */
    --text-dark: #2C2C2C;     /* Main text color */
    --text-brown: #5D4E37;    /* Brown text */
    --accent-gold: #C9A86A;   /* Gold accent */
    --accent-wood: #8B7355;   /* Wood tone */
}
```

### **Add More Products**
1. Open `index.html`
2. Find the "Our Products" section
3. Copy and paste an existing product card
4. Update the title, description, image, and WhatsApp message

### **Add More Gallery Images**
1. Add images to `images/gallery/` folder
2. Open `js/script.js`
3. Find the `galleryImages` array (around line 75)
4. Add new entries following this format:
```javascript
{ src: 'images/gallery/your-image.jpg', category: 'kitchens', alt: 'Description' }
```

## 📱 Browser Compatibility

Tested and working on:
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Technical Details

- **No frameworks required** - Pure HTML5, CSS3, and Vanilla JavaScript
- **No build process** - Works immediately when opened
- **No dependencies** - All code is self-contained
- **Fully responsive** - Mobile-first design approach
- **Fast loading** - Optimized with lazy loading and efficient code
- **Accessible** - Semantic HTML with ARIA labels
- **SEO friendly** - Proper meta tags and structured content

## 📞 Contact & Support

**Business:** Love Haute Spaces  
**WhatsApp:** 065 145 3814  
**Email:** sthandwa28@icloud.com  
**TikTok:** @love.haute.spaces  

**Tagline:** Beautiful Spaces, Beautiful Living.

## 📝 Notes

- All WhatsApp links open with pre-filled messages for easy customer enquiries
- The contact form validates inputs and sends enquiries via WhatsApp
- Gallery images that don't exist will show elegant placeholders
- The website is fully functional offline for testing
- No backend or database required - all functionality works client-side

## 🎨 Design Philosophy

The website embodies luxury furniture design principles:
- **Warm, neutral color palette** reflecting natural materials
- **Generous whitespace** for an upscale, uncluttered feel
- **Large, elegant typography** that's easy to read
- **Smooth animations** that enhance without distracting
- **Professional imagery showcase** to highlight craftsmanship
- **Clear call-to-actions** encouraging customer engagement

---

**Version:** 1.0  
**Last Updated:** November 2026  
**Built for:** Love Haute Spaces
