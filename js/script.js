// ==========================
// LOVE HAUTE SPACES - JAVASCRIPT
// ==========================

document.addEventListener('DOMContentLoaded', function() {
    
    // ==========================
    // NAVIGATION
    // ==========================
    
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.getElementById('navbar');

    // Toggle mobile menu
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Sticky navbar on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });

    // Active navigation link on scroll
    const sections = document.querySelectorAll('section[id]');
    
    function highlightNavigation() {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink?.classList.add('active');
            } else {
                navLink?.classList.remove('active');
            }
        });
    }

    window.addEventListener('scroll', highlightNavigation);

    // ==========================
    // GALLERY
    // ==========================

    const galleryGrid = document.getElementById('galleryGrid');
    const filterButtons = document.querySelectorAll('.filter-btn');

    // Gallery images data - organized by category
    const galleryImages = [
        // Upholstered Furniture
        { src: 'images/gallery/Headboards.jpeg', category: 'upholstered', alt: 'Elegant Upholstered Headboard' },
        { src: 'images/gallery/ottamans.webp', category: 'upholstered', alt: 'Stylish Ottoman' },
        { src: 'images/gallery/sidetatble.jpg', category: 'upholstered', alt: 'Modern Side Table' },
        { src: 'images/gallery/drawer-1.jpg', category: 'upholstered', alt: 'Chest of Drawers' },
        
        // Kitchens
        { src: 'images/gallery/Kitchens.jpeg', category: 'kitchens', alt: 'Custom Kitchen Cabinetry' },
        
        // Bathroom Vanities
        { src: 'images/gallery/bathroomvanitity.webp', category: 'bathroom', alt: 'Bathroom Vanity Unit' },
        
        // Custom Cabinets (TV Stands, Office Cabinets)
        { src: 'images/gallery/TVStands.jpeg', category: 'cabinets', alt: 'Modern TV Stand' },
        { src: 'images/gallery/OfficeCabinets.jpg', category: 'cabinets', alt: 'Custom Office Cabinet' },
        
        // Wardrobes
        { src: 'images/gallery/wardrobe-1.jpg', category: 'wardrobes', alt: 'Custom Wardrobe Design' },
        
        // Additional photo
        { src: 'images/gallery/ll.png', category: 'upholstered', alt: 'Love Haute Spaces Furniture' }
    ];

    // Load gallery images
    function loadGallery() {
        galleryGrid.innerHTML = '';
        
        galleryImages.forEach((image, index) => {
            const galleryItem = document.createElement('div');
            galleryItem.className = `gallery-item ${image.category}`;
            galleryItem.setAttribute('data-category', image.category);
            
            const img = document.createElement('img');
            img.src = image.src;
            img.alt = image.alt;
            img.loading = 'lazy';
            
            // Handle image load errors - show placeholder
            img.onerror = function() {
                this.src = createPlaceholder(image.alt);
            };
            
            galleryItem.appendChild(img);
            galleryItem.addEventListener('click', () => openLightbox(image.src, image.alt));
            
            galleryGrid.appendChild(galleryItem);
        });
    }

    // Create placeholder for missing images
    function createPlaceholder(text) {
        const canvas = document.createElement('canvas');
        canvas.width = 400;
        canvas.height = 300;
        const ctx = canvas.getContext('2d');
        
        // Background
        ctx.fillStyle = '#E8E0D5';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Border
        ctx.strokeStyle = '#C9A86A';
        ctx.lineWidth = 3;
        ctx.strokeRect(10, 10, canvas.width - 20, canvas.height - 20);
        
        // Text
        ctx.fillStyle = '#5D4E37';
        ctx.font = 'bold 16px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        const lines = text.split(' ');
        const lineHeight = 25;
        const startY = canvas.height / 2 - ((lines.length - 1) * lineHeight) / 2;
        
        lines.forEach((line, i) => {
            ctx.fillText(line, canvas.width / 2, startY + i * lineHeight);
        });
        
        ctx.font = '14px Arial';
        ctx.fillStyle = '#8B7355';
        ctx.fillText('Image Coming Soon', canvas.width / 2, canvas.height - 40);
        
        return canvas.toDataURL();
    }

    // Gallery filtering
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter gallery items
            const galleryItems = document.querySelectorAll('.gallery-item');
            galleryItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.classList.remove('hidden');
                    setTimeout(() => {
                        item.style.opacity = '1';
                    }, 10);
                } else {
                    item.style.opacity = '0';
                    setTimeout(() => {
                        item.classList.add('hidden');
                    }, 300);
                }
            });
        });
    });

    // Load gallery on page load
    loadGallery();

    // ==========================
    // LIGHTBOX
    // ==========================

    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const lightboxClose = document.querySelector('.lightbox-close');

    function openLightbox(src, alt) {
        lightboxImage.src = src;
        lightboxImage.alt = alt;
        lightboxCaption.textContent = alt;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }

    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }

    // Close lightbox with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });

    // ==========================
    // CONTACT FORM
    // ==========================

    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Get form values
            const fullName = document.getElementById('fullName').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const service = document.getElementById('service').value;
            const message = document.getElementById('message').value.trim();

            // Validate inputs
            if (!fullName || !phone || !service || !message) {
                alert('Please fill in all fields before submitting.');
                return;
            }

            // Create WhatsApp message
            const whatsappMessage = `Hello Love Haute Spaces,%0A%0A` +
                `*Name:* ${encodeURIComponent(fullName)}%0A` +
                `*Phone:* ${encodeURIComponent(phone)}%0A` +
                `*Interested in:* ${encodeURIComponent(service)}%0A%0A` +
                `*Message:*%0A${encodeURIComponent(message)}`;

            // Open WhatsApp with pre-filled message
            window.open(`https://wa.me/27651453814?text=${whatsappMessage}`, '_blank');

            // Reset form
            contactForm.reset();
        });
    }

    // ==========================
    // SMOOTH SCROLLING
    // ==========================

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Don't prevent default for non-section anchors
            if (href === '#' || href.length <= 1) return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const offsetTop = target.offsetTop - 70; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ==========================
    // ANIMATIONS ON SCROLL
    // ==========================

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.product-card, .builtin-card, .feature-card');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // ==========================
    // DYNAMIC YEAR IN FOOTER
    // ==========================

    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // ==========================
    // PAGE LOAD ANIMATION
    // ==========================

    window.addEventListener('load', () => {
        document.body.style.opacity = '0';
        setTimeout(() => {
            document.body.style.transition = 'opacity 0.5s ease';
            document.body.style.opacity = '1';
        }, 100);
    });

    // ==========================
    // PERFORMANCE: LAZY LOADING OPTIMIZATION
    // ==========================

    // Add loading attribute to all images if not already set
    document.querySelectorAll('img:not([loading])').forEach(img => {
        img.setAttribute('loading', 'lazy');
    });

});

// ==========================
// UTILITY FUNCTIONS
// ==========================

// Debounce function for scroll events
function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// ==========================
// ADDITIONAL FEATURES
// ==========================

// Back to top functionality (optional)
let backToTopButton = document.createElement('button');
backToTopButton.innerHTML = '↑';
backToTopButton.setAttribute('id', 'backToTop');
backToTopButton.style.cssText = `
    display: none;
    position: fixed;
    bottom: 100px;
    right: 30px;
    width: 45px;
    height: 45px;
    background-color: var(--text-brown);
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    font-size: 20px;
    z-index: 998;
    transition: all 0.3s ease;
    opacity: 0.7;
`;

document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

backToTopButton.addEventListener('mouseenter', () => {
    backToTopButton.style.opacity = '1';
    backToTopButton.style.transform = 'scale(1.1)';
});

backToTopButton.addEventListener('mouseleave', () => {
    backToTopButton.style.opacity = '0.7';
    backToTopButton.style.transform = 'scale(1)';
});
