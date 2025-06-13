// ==========================================
// BOOM B2B WHOLESALE MARKETPLACE - JAVASCRIPT
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the application
    initializeApp();
});

function initializeApp() {
    // Load sample suppliers and opportunities
    loadFeaturedSuppliers();
    loadWholesaleOpportunities();
    
    // Initialize search functionality
    initializeSearch();
    
    // Initialize RFQ functionality
    initializeRFQ();
    
    // Initialize forms
    initializeForms();
    
    // Initialize animations
    initializeAnimations();
    
    // Initialize newsletter
    initializeNewsletter();
}

// ==========================================
// SAMPLE B2B DATA
// ==========================================

const sampleSuppliers = [
    {
        id: 1,
        companyName: "TechSource Lanka",
        category: "Electronics & Tech",
        rating: 4.8,
        reviews: 156,
        location: "Colombo",
        verified: true,
        products: 245,
        minOrder: "Rs. 50,000",
        specialties: ["Mobile Accessories", "Computer Parts", "LED Displays"]
    },
    {
        id: 2,
        companyName: "Ceylon Textiles Co.",
        category: "Textiles & Apparel",
        rating: 4.9,
        reviews: 203,
        location: "Kandy",
        verified: true,
        products: 180,
        minOrder: "1000 units",
        specialties: ["Cotton Fabrics", "Garment Manufacturing", "Fashion Accessories"]
    },
    {
        id: 3,
        companyName: "Lanka Industrial Supplies",
        category: "Industrial Equipment",
        rating: 4.7,
        reviews: 89,
        location: "Gampaha",
        verified: true,
        products: 120,
        minOrder: "Rs. 100,000",
        specialties: ["Machinery", "Tools", "Safety Equipment"]
    },
    {
        id: 4,
        companyName: "Fresh Lanka Exports",
        category: "Food & Beverages",
        rating: 4.6,
        reviews: 78,
        location: "Galle",
        verified: true,
        products: 95,
        minOrder: "500 kg",
        specialties: ["Spices", "Tea", "Coconut Products"]
    }
];

const wholesaleOpportunities = [
    {
        id: 1,
        title: "Electronics Components Bulk Order",
        category: "Electronics & Tech",
        quantity: "5,000 units",
        budget: "Rs. 500,000 - 750,000",
        location: "Colombo",
        deadline: "2025-07-15",
        description: "Looking for high-quality mobile phone accessories including cases, chargers, and screen protectors.",
        quotesReceived: 12,
        timeLeft: "25 days",
        urgent: false
    },
    {
        id: 2,
        title: "Textile Materials for Export",
        category: "Textiles & Apparel",
        quantity: "10,000 meters",
        budget: "Rs. 200,000 - 300,000",
        location: "Kandy",
        deadline: "2025-06-30",
        description: "Premium cotton fabric required for garment manufacturing with specific quality standards.",
        quotesReceived: 8,
        timeLeft: "16 days",
        urgent: true
    },
    {
        id: 3,
        title: "Industrial Machinery Parts",
        category: "Industrial Equipment",
        quantity: "25 units",
        budget: "Rs. 1,000,000 - 1,500,000",
        location: "Gampaha",
        deadline: "2025-08-01",
        description: "Specialized machinery components for tea processing equipment.",
        quotesReceived: 15,
        timeLeft: "48 days",
        urgent: false
    },
    {
        id: 4,
        title: "Organic Spice Collection",
        category: "Food & Beverages",
        quantity: "2,000 kg",
        budget: "Rs. 300,000 - 400,000",
        location: "Matara",
        deadline: "2025-07-10",
        description: "Certified organic spices for international export including cinnamon, cardamom, and pepper.",
        quotesReceived: 6,
        timeLeft: "26 days",
        urgent: false
    }
];

// ==========================================
// SUPPLIER RENDERING
// ==========================================

function loadFeaturedSuppliers() {
    const container = document.getElementById('featured-suppliers');
    if (!container) return;
    
    container.innerHTML = sampleSuppliers.map(supplier => createSupplierCard(supplier)).join('');
}

function createSupplierCard(supplier) {
    return `
        <div class="col-lg-3 col-md-6">
            <div class="supplier-card" data-supplier-id="${supplier.id}">
                <div class="supplier-header">
                    <div class="supplier-logo">
                        <i class="fas fa-${getSupplierIcon(supplier.category)} fa-2x text-orange"></i>
                    </div>
                    ${supplier.verified ? '<div class="verified-badge"><i class="fas fa-certificate text-success"></i></div>' : ''}
                </div>
                <div class="supplier-info">
                    <h5 class="supplier-name">${supplier.companyName}</h5>
                    <p class="supplier-category">${supplier.category}</p>
                    <div class="supplier-rating mb-2">
                        <div class="stars text-yellow">
                            ${generateStars(supplier.rating)}
                        </div>
                        <span class="rating-text">${supplier.rating} (${supplier.reviews} reviews)</span>
                    </div>
                    <div class="supplier-details">
                        <div class="detail-item">
                            <i class="fas fa-map-marker-alt text-muted me-1"></i>
                            <span>${supplier.location}</span>
                        </div>
                        <div class="detail-item">
                            <i class="fas fa-boxes text-muted me-1"></i>
                            <span>${supplier.products} products</span>
                        </div>
                        <div class="detail-item">
                            <i class="fas fa-dollar-sign text-muted me-1"></i>
                            <span>Min. Order: ${supplier.minOrder}</span>
                        </div>
                    </div>
                    <div class="supplier-specialties">
                        <small class="text-muted">Specialties:</small>
                        <div class="specialty-tags">
                            ${supplier.specialties.map(specialty => `<span class="specialty-tag">${specialty}</span>`).join('')}
                        </div>
                    </div>
                    <div class="supplier-actions mt-3">
                        <button class="btn btn-orange btn-sm me-2" onclick="contactSupplier(${supplier.id})">
                            <i class="fas fa-envelope me-1"></i>Contact
                        </button>
                        <button class="btn btn-outline-primary btn-sm" onclick="viewSupplier(${supplier.id})">
                            <i class="fas fa-eye me-1"></i>View
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function getSupplierIcon(category) {
    const icons = {
        'Electronics & Tech': 'microchip',
        'Textiles & Apparel': 'tshirt',
        'Home & Garden': 'home',
        'Food & Beverages': 'utensils',
        'Industrial Equipment': 'tools',
        'Automotive Parts': 'car',
        'Health & Beauty': 'heart',
        'Agriculture': 'seedling'
    };
    return icons[category] || 'industry';
}

// ==========================================
// WHOLESALE OPPORTUNITIES RENDERING
// ==========================================

function loadWholesaleOpportunities() {
    const container = document.getElementById('wholesale-opportunities');
    if (!container) return;
    
    container.innerHTML = wholesaleOpportunities.map(opportunity => createOpportunityCard(opportunity)).join('');
}

function createOpportunityCard(opportunity) {
    return `
        <div class="col-lg-3 col-md-6">
            <div class="opportunity-card" data-opportunity-id="${opportunity.id}">
                ${opportunity.urgent ? '<div class="urgent-badge">Urgent</div>' : ''}
                <div class="opportunity-header">
                    <h6 class="opportunity-title">${opportunity.title}</h6>
                    <span class="opportunity-category">${opportunity.category}</span>
                </div>
                <div class="opportunity-details">
                    <div class="detail-row">
                        <span class="detail-label">Quantity:</span>
                        <span class="detail-value">${opportunity.quantity}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Budget:</span>
                        <span class="detail-value">${opportunity.budget}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Location:</span>
                        <span class="detail-value">${opportunity.location}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Deadline:</span>
                        <span class="detail-value">${formatDate(opportunity.deadline)}</span>
                    </div>
                </div>
                <div class="opportunity-stats">
                    <div class="stat">
                        <span class="stat-number">${opportunity.quotesReceived}</span>
                        <span class="stat-label">Quotes</span>
                    </div>
                    <div class="stat">
                        <span class="stat-number">${opportunity.timeLeft}</span>
                        <span class="stat-label">Left</span>
                    </div>
                </div>
                <div class="opportunity-actions">
                    <button class="btn btn-orange btn-sm w-100" onclick="submitQuote(${opportunity.id})">
                        <i class="fas fa-paper-plane me-1"></i>Submit Quote
                    </button>
                </div>
            </div>
        </div>
    `;
}

// ==========================================
// RFQ FUNCTIONALITY
// ==========================================

let rfqs = [];

function initializeRFQ() {
    updateRFQCount();
    loadRFQFromStorage();
}

function postRFQ(rfqData) {
    const newRFQ = {
        id: Date.now(),
        ...rfqData,
        status: 'active',
        quotesReceived: 0,
        datePosted: new Date().toISOString()
    };
    
    rfqs.push(newRFQ);
    updateRFQCount();
    saveRFQToStorage();
    showRFQNotification('RFQ posted successfully! Suppliers will start sending quotes soon.');
}

function updateRFQCount() {
    const totalRFQs = rfqs.length;
    const rfqCountElements = document.querySelectorAll('.rfq-count');
    
    rfqCountElements.forEach(element => {
        element.textContent = totalRFQs;
        element.style.display = totalRFQs > 0 ? 'flex' : 'none';
    });
}

function saveRFQToStorage() {
    localStorage.setItem('boom_rfqs', JSON.stringify(rfqs));
}

function loadRFQFromStorage() {
    const savedRFQs = localStorage.getItem('boom_rfqs');
    if (savedRFQs) {
        rfqs = JSON.parse(savedRFQs);
        updateRFQCount();
    }
}

function showRFQNotification(message) {
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.innerHTML = `
        <div class="toast-content">
            <i class="fas fa-check-circle text-success me-2"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add toast styles if not already added
    if (!document.querySelector('#toast-styles')) {
        const styles = document.createElement('style');
        styles.id = 'toast-styles';
        styles.textContent = `
            .toast-notification {
                position: fixed;
                top: 20px;
                right: 20px;
                background: white;
                border: 1px solid #dee2e6;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                padding: 1rem;
                z-index: 9999;
                transform: translateX(100%);
                transition: transform 0.3s ease;
                max-width: 400px;
            }
            .toast-notification.show {
                transform: translateX(0);
            }
            .toast-content {
                display: flex;
                align-items: center;
                font-weight: 500;
            }
        `;
        document.head.appendChild(styles);
    }
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            if (document.body.contains(toast)) {
                document.body.removeChild(toast);
            }
        }, 300);
    }, 4000);
}

// ==========================================
// SUPPLIER INTERACTIONS
// ==========================================

function contactSupplier(supplierId) {
    const supplier = sampleSuppliers.find(s => s.id === supplierId);
    if (supplier) {
        showRFQNotification(`Contact request sent to ${supplier.companyName}!`);
    }
}

function viewSupplier(supplierId) {
    // Navigate to supplier details page
    console.log(`View supplier ${supplierId}`);
}

function submitQuote(opportunityId) {
    const opportunity = wholesaleOpportunities.find(o => o.id === opportunityId);
    if (opportunity) {
        showRFQNotification(`Quote submission form opened for: ${opportunity.title}`);
    }
}

// ==========================================
// SEARCH FUNCTIONALITY (Updated for B2B)
// ==========================================

function initializeSearch() {
    const searchInputs = document.querySelectorAll('.search-input');
    const searchButtons = document.querySelectorAll('.search-btn');
    
    searchInputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch(this.value);
            }
        });
    });
    
    searchButtons.forEach(button => {
        button.addEventListener('click', function() {
            const input = this.previousElementSibling || this.parentElement.querySelector('.search-input');
            performSearch(input.value);
        });
    });
}

function performSearch(query) {
    if (query.trim() === '') return;
    
    showSearchLoading();
    
    setTimeout(() => {
        const supplierResults = sampleSuppliers.filter(supplier => 
            supplier.companyName.toLowerCase().includes(query.toLowerCase()) ||
            supplier.category.toLowerCase().includes(query.toLowerCase()) ||
            supplier.specialties.some(specialty => specialty.toLowerCase().includes(query.toLowerCase()))
        );
        
        const opportunityResults = wholesaleOpportunities.filter(opportunity => 
            opportunity.title.toLowerCase().includes(query.toLowerCase()) ||
            opportunity.category.toLowerCase().includes(query.toLowerCase()) ||
            opportunity.description.toLowerCase().includes(query.toLowerCase())
        );
        
        displaySearchResults({ suppliers: supplierResults, opportunities: opportunityResults }, query);
    }, 500);
}

function showSearchLoading() {
    console.log('Searching suppliers and opportunities...');
}

function displaySearchResults(results, query) {
    console.log(`Found ${results.suppliers.length} suppliers and ${results.opportunities.length} opportunities for "${query}"`);
}

// ==========================================
// FORM HANDLING (Updated for B2B)
// ==========================================

function initializeForms() {
    // Business login form
    const loginForm = document.querySelector('#loginModal form');
    if (loginForm) {
        loginForm.addEventListener('submit', handleBusinessLogin);
    }
    
    // Supplier registration form
    const supplierForm = document.querySelector('#supplierModal form');
    if (supplierForm) {
        supplierForm.addEventListener('submit', handleSupplierRegistration);
    }
    
    // RFQ form
    const rfqForm = document.querySelector('#rfqModal form');
    if (rfqForm) {
        rfqForm.addEventListener('submit', handleRFQSubmission);
    }
    
    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', handleNewsletter);
    }
}

function handleBusinessLogin(e) {
    e.preventDefault();
    
    const email = document.getElementById('businessEmail').value;
    const password = document.getElementById('password').value;
    
    if (email && password) {
        showLoadingButton(e.target.querySelector('button[type="submit"]'), 'Logging in...');
        
        setTimeout(() => {
            alert('Business login successful! Redirecting to dashboard... (Demo)');
            bootstrap.Modal.getInstance(document.getElementById('loginModal')).hide();
            resetForm(e.target);
            resetButton(e.target.querySelector('button[type="submit"]'), 'Login to Dashboard');
        }, 1500);
    }
}

function handleSupplierRegistration(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    if (data.companyName && data.contactPerson && data.businessEmail && data.businessPhone && data.businessRegNo) {
        showLoadingButton(e.target.querySelector('button[type="submit"]'), 'Registering...');
        
        setTimeout(() => {
            alert('Supplier registration successful! Our team will verify your business and contact you within 24 hours. (Demo)');
            bootstrap.Modal.getInstance(document.getElementById('supplierModal')).hide();
            resetForm(e.target);
            resetButton(e.target.querySelector('button[type="submit"]'), 'Register as Supplier');
        }, 2000);
    }
}

function handleRFQSubmission(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const rfqData = Object.fromEntries(formData);
    
    if (rfqData.rfqTitle && rfqData.rfqCategory && rfqData.rfqQuantity && rfqData.rfqDescription) {
        showLoadingButton(e.target.querySelector('button[type="submit"]'), 'Posting RFQ...');
        
        setTimeout(() => {
            postRFQ(rfqData);
            bootstrap.Modal.getInstance(document.getElementById('rfqModal')).hide();
            resetForm(e.target);
            resetButton(e.target.querySelector('button[type="submit"]'), 'Post RFQ');
        }, 1500);
    }
}

function handleNewsletter(e) {
    e.preventDefault();
    
    const email = e.target.querySelector('input[type="email"]').value;
    
    if (email) {
        showLoadingButton(e.target.querySelector('button[type="submit"]'), '');
        e.target.querySelector('button[type="submit"]').innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
        
        setTimeout(() => {
            alert('Thank you for subscribing to B2B updates! (Demo)');
            e.target.reset();
            resetButton(e.target.querySelector('button[type="submit"]'), '<i class="fas fa-paper-plane"></i>');
        }, 1000);
    }
}

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
    });
}

function showLoadingButton(button, text) {
    button.disabled = true;
    button.innerHTML = `<i class="fas fa-spinner fa-spin me-2"></i>${text}`;
}

function resetButton(button, originalText) {
    button.disabled = false;
    button.innerHTML = originalText;
}

function resetForm(form) {
    form.reset();
}

// ==========================================
// ANIMATIONS AND INTERACTIONS
// ==========================================

function initializeAnimations() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Category card hover effects
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', function() {
            const categoryName = this.querySelector('h5').textContent;
            console.log(`Navigating to ${categoryName} suppliers`);
        });
    });
    
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    // Observe sections for animations
    document.querySelectorAll('.categories-section, .why-sell-section, .wholesale-section, .trending-section, .deals-section').forEach(section => {
        observer.observe(section);
    });
}

function initializeNewsletter() {
    // Newsletter subscription with validation
    const newsletterInputs = document.querySelectorAll('.newsletter-form input[type="email"]');
    
    newsletterInputs.forEach(input => {
        input.addEventListener('input', function() {
            const submitButton = this.parentElement.querySelector('button');
            if (this.value && this.checkValidity()) {
                submitButton.disabled = false;
                submitButton.style.opacity = '1';
            } else {
                submitButton.disabled = true;
                submitButton.style.opacity = '0.6';
            }
        });
    });
}

// ==========================================
// RESPONSIVE NAVIGATION
// ==========================================

// Auto-close mobile menu when clicking on links
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
            bootstrap.Collapse.getInstance(navbarCollapse).hide();
        }
    });
});

// ==========================================
// CONSOLE WELCOME MESSAGE
// ==========================================

console.log('%c🏭 Welcome to Boom B2B Wholesale Marketplace!', 'color: #FF6B35; font-size: 20px; font-weight: bold;');
console.log('%cConnecting businesses across Sri Lanka', 'color: #FFD23F; font-size: 14px;');
console.log('%cBuilt for wholesale excellence', 'color: #6c757d; font-size: 12px;');

// ==========================================
// SAMPLE DATA
// ==========================================

const sampleProducts = [
    {
        id: 1,
        title: "Samsung Galaxy A54 5G",
        price: 89000,
        originalPrice: 95000,
        rating: 4.5,
        reviews: 324,
        image: "phone.jpg",
        category: "Electronics",
        trending: true,
        deal: false
    },
    {
        id: 2,
        title: "Nike Air Max 270",
        price: 18500,
        originalPrice: 22000,
        rating: 4.7,
        reviews: 156,
        image: "shoes.jpg",
        category: "Fashion",
        trending: true,
        deal: true
    },
    {
        id: 3,
        title: "HP Pavilion Laptop",
        price: 125000,
        originalPrice: 140000,
        rating: 4.3,
        reviews: 89,
        image: "laptop.jpg",
        category: "Electronics",
        trending: false,
        deal: true
    },
    {
        id: 4,
        title: "Wooden Coffee Table",
        price: 25000,
        originalPrice: 30000,
        rating: 4.6,
        reviews: 67,
        image: "table.jpg",
        category: "Home & Living",
        trending: true,
        deal: false
    },
    {
        id: 5,
        title: "Fitness Tracker Band",
        price: 8500,
        originalPrice: 12000,
        rating: 4.4,
        reviews: 203,
        image: "fitness.jpg",
        category: "Sports",
        trending: false,
        deal: true
    },
    {
        id: 6,
        title: "Modern Desk Lamp",
        price: 4500,
        originalPrice: 6000,
        rating: 4.2,
        reviews: 112,
        image: "lamp.jpg",
        category: "Home & Living",
        trending: true,
        deal: true
    },
    {
        id: 7,
        title: "Bluetooth Headphones",
        price: 12000,
        originalPrice: 15000,
        rating: 4.8,
        reviews: 445,
        image: "headphones.jpg",
        category: "Electronics",
        trending: true,
        deal: false
    },
    {
        id: 8,
        title: "Casual T-Shirt",
        price: 2500,
        originalPrice: 3500,
        rating: 4.1,
        reviews: 78,
        image: "tshirt.jpg",
        category: "Fashion",
        trending: false,
        deal: true
    }
];

// ==========================================
// PRODUCT RENDERING
// ==========================================

function loadTrendingProducts() {
    const container = document.getElementById('trending-products');
    const trendingProducts = sampleProducts.filter(product => product.trending).slice(0, 4);
    
    container.innerHTML = trendingProducts.map(product => createProductCard(product)).join('');
}

function loadDealsProducts() {
    const container = document.getElementById('deals-products');
    const dealProducts = sampleProducts.filter(product => product.deal).slice(0, 4);
    
    container.innerHTML = dealProducts.map(product => createProductCard(product, true)).join('');
}

function createProductCard(product, isDeal = false) {
    const discountPercent = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
    
    return `
        <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="product-card" data-product-id="${product.id}">
                <div class="product-image">
                    <div style="width: 100%; height: 100%; background: linear-gradient(45deg, #f8f9fa, #e9ecef); display: flex; align-items: center; justify-content: center; font-size: 3rem; color: #6c757d;">
                        <i class="fas fa-${getProductIcon(product.category)}"></i>
                    </div>
                    ${isDeal ? `<div class="product-badge deal-badge">-${discountPercent}%</div>` : ''}
                    ${product.trending && !isDeal ? '<div class="product-badge">Trending</div>' : ''}
                </div>
                <div class="product-info">
                    <h6 class="product-title">${product.title}</h6>
                    <div class="product-price">
                        <span class="current-price">Rs. ${product.price.toLocaleString()}</span>
                        ${product.originalPrice > product.price ? `<span class="original-price">Rs. ${product.originalPrice.toLocaleString()}</span>` : ''}
                    </div>
                    <div class="product-rating">
                        <div class="stars">
                            ${generateStars(product.rating)}
                        </div>
                        <span class="rating-text">(${product.reviews} reviews)</span>
                    </div>
                    <div class="product-actions">
                        <button class="btn btn-add-cart" onclick="addToCart(${product.id})">
                            <i class="fas fa-cart-plus me-1"></i>Add to Cart
                        </button>
                        <button class="btn btn-wishlist" onclick="toggleWishlist(${product.id})">
                            <i class="far fa-heart"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function getProductIcon(category) {
    const icons = {
        'Electronics': 'laptop',
        'Fashion': 'tshirt',
        'Home & Living': 'home',
        'Sports': 'dumbbell',
        'Books': 'book',
        'Automotive': 'car',
        'Health & Beauty': 'heart',
        'Baby & Kids': 'baby'
    };
    return icons[category] || 'box';
}

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

// ==========================================
// SEARCH FUNCTIONALITY
// ==========================================

function initializeSearch() {
    const searchInputs = document.querySelectorAll('.search-input');
    const searchButtons = document.querySelectorAll('.search-btn');
    
    searchInputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch(this.value);
            }
        });
    });
    
    searchButtons.forEach(button => {
        button.addEventListener('click', function() {
            const input = this.previousElementSibling || this.parentElement.querySelector('.search-input');
            performSearch(input.value);
        });
    });
}

function performSearch(query) {
    if (query.trim() === '') return;
    
    // Show loading state
    showSearchLoading();
    
    // Simulate search delay
    setTimeout(() => {
        const results = sampleProducts.filter(product => 
            product.title.toLowerCase().includes(query.toLowerCase()) ||
            product.category.toLowerCase().includes(query.toLowerCase())
        );
        
        displaySearchResults(results, query);
    }, 500);
}

function showSearchLoading() {
    // You can implement a loading modal or redirect to search results page
    console.log('Searching...');
}

function displaySearchResults(results, query) {
    // You can implement a search results page or modal
    console.log(`Found ${results.length} results for "${query}"`);
    console.log(results);
}

// ==========================================
// CART FUNCTIONALITY
// ==========================================

let cart = [];

function initializeCart() {
    updateCartCount();
    loadCartFromStorage();
}

function addToCart(productId) {
    const product = sampleProducts.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    updateCartCount();
    saveCartToStorage();
    showCartNotification(product.title);
    
    // Add animation to cart icon
    animateCartIcon();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartCount();
    saveCartToStorage();
}

function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountElements = document.querySelectorAll('.cart-count');
    
    cartCountElements.forEach(element => {
        element.textContent = totalItems;
        element.style.display = totalItems > 0 ? 'flex' : 'none';
    });
}

function saveCartToStorage() {
    localStorage.setItem('boom_cart', JSON.stringify(cart));
}

function loadCartFromStorage() {
    const savedCart = localStorage.getItem('boom_cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartCount();
    }
}

function showCartNotification(productName) {
    // Create and show a toast notification
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.innerHTML = `
        <div class="toast-content">
            <i class="fas fa-check-circle text-success me-2"></i>
            <span>${productName} added to cart!</span>
        </div>
    `;
    
    // Add toast styles if not already added
    if (!document.querySelector('#toast-styles')) {
        const styles = document.createElement('style');
        styles.id = 'toast-styles';
        styles.textContent = `
            .toast-notification {
                position: fixed;
                top: 20px;
                right: 20px;
                background: white;
                border: 1px solid #dee2e6;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                padding: 1rem;
                z-index: 9999;
                transform: translateX(100%);
                transition: transform 0.3s ease;
            }
            .toast-notification.show {
                transform: translateX(0);
            }
            .toast-content {
                display: flex;
                align-items: center;
                font-weight: 500;
            }
        `;
        document.head.appendChild(styles);
    }
    
    document.body.appendChild(toast);
    
    // Show toast
    setTimeout(() => {
        toast.classList.add('show');
    }, 100);
    
    // Hide and remove toast
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 3000);
}

function animateCartIcon() {
    const cartIcon = document.querySelector('.fa-shopping-cart');
    if (cartIcon) {
        cartIcon.style.transform = 'scale(1.2)';
        cartIcon.style.color = 'var(--orange-primary)';
        
        setTimeout(() => {
            cartIcon.style.transform = 'scale(1)';
            cartIcon.style.color = '';
        }, 200);
    }
}

// ==========================================
// WISHLIST FUNCTIONALITY
// ==========================================

let wishlist = [];

function toggleWishlist(productId) {
    const index = wishlist.indexOf(productId);
    const heartIcon = event.target.closest('.btn-wishlist').querySelector('i');
    
    if (index === -1) {
        wishlist.push(productId);
        heartIcon.className = 'fas fa-heart';
        heartIcon.style.color = 'var(--orange-primary)';
        showWishlistNotification('Added to wishlist!');
    } else {
        wishlist.splice(index, 1);
        heartIcon.className = 'far fa-heart';
        heartIcon.style.color = '';
        showWishlistNotification('Removed from wishlist!');
    }
    
    saveWishlistToStorage();
}

function saveWishlistToStorage() {
    localStorage.setItem('boom_wishlist', JSON.stringify(wishlist));
}

function loadWishlistFromStorage() {
    const savedWishlist = localStorage.getItem('boom_wishlist');
    if (savedWishlist) {
        wishlist = JSON.parse(savedWishlist);
        updateWishlistIcons();
    }
}

function updateWishlistIcons() {
    wishlist.forEach(productId => {
        const productCard = document.querySelector(`[data-product-id="${productId}"]`);
        if (productCard) {
            const heartIcon = productCard.querySelector('.btn-wishlist i');
            if (heartIcon) {
                heartIcon.className = 'fas fa-heart';
                heartIcon.style.color = 'var(--orange-primary)';
            }
        }
    });
}

function showWishlistNotification(message) {
    // Similar to cart notification but for wishlist
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.innerHTML = `
        <div class="toast-content">
            <i class="fas fa-heart text-danger me-2"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            if (document.body.contains(toast)) {
                document.body.removeChild(toast);
            }
        }, 300);
    }, 3000);
}

// ==========================================
// FORM HANDLING
// ==========================================

function initializeForms() {
    // Login form
    const loginForm = document.querySelector('#loginModal form');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    // Seller registration form
    const sellerForm = document.querySelector('#sellerModal form');
    if (sellerForm) {
        sellerForm.addEventListener('submit', handleSellerRegistration);
    }
    
    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', handleNewsletter);
    }
}

function handleLogin(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Simulate login process
    if (email && password) {
        showLoadingButton(e.target.querySelector('button[type="submit"]'), 'Logging in...');
        
        setTimeout(() => {
            alert('Login successful! (Demo)');
            bootstrap.Modal.getInstance(document.getElementById('loginModal')).hide();
            resetForm(e.target);
            resetButton(e.target.querySelector('button[type="submit"]'), 'Login');
        }, 1500);
    }
}

function handleSellerRegistration(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    if (data.businessName && data.ownerName && data.sellerEmail && data.phone && data.category) {
        showLoadingButton(e.target.querySelector('button[type="submit"]'), 'Registering...');
        
        setTimeout(() => {
            alert('Registration successful! Welcome to Boom marketplace! (Demo)');
            bootstrap.Modal.getInstance(document.getElementById('sellerModal')).hide();
            resetForm(e.target);
            resetButton(e.target.querySelector('button[type="submit"]'), 'Start Selling');
        }, 2000);
    }
}

function handleNewsletter(e) {
    e.preventDefault();
    
    const email = e.target.querySelector('input[type="email"]').value;
    
    if (email) {
        showLoadingButton(e.target.querySelector('button[type="submit"]'), '');
        e.target.querySelector('button[type="submit"]').innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
        
        setTimeout(() => {
            alert('Thank you for subscribing! (Demo)');
            e.target.reset();
            resetButton(e.target.querySelector('button[type="submit"]'), '<i class="fas fa-paper-plane"></i>');
        }, 1000);
    }
}

function showLoadingButton(button, text) {
    button.disabled = true;
    button.innerHTML = `<i class="fas fa-spinner fa-spin me-2"></i>${text}`;
}

function resetButton(button, originalText) {
    button.disabled = false;
    button.innerHTML = originalText;
}

function resetForm(form) {
    form.reset();
}

// ==========================================
// ANIMATIONS AND INTERACTIONS
// ==========================================

function initializeAnimations() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Category card hover effects
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', function() {
            const categoryName = this.querySelector('h5').textContent;
            // You can implement category page navigation here
            console.log(`Navigating to ${categoryName} category`);
        });
    });
    
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    // Observe sections for animations
    document.querySelectorAll('.categories-section, .why-sell-section, .wholesale-section, .trending-section, .deals-section').forEach(section => {
        observer.observe(section);
    });
    
    // Load wishlist from storage
    loadWishlistFromStorage();
}

function initializeNewsletter() {
    // Newsletter subscription with validation
    const newsletterInputs = document.querySelectorAll('.newsletter-form input[type="email"]');
    
    newsletterInputs.forEach(input => {
        input.addEventListener('input', function() {
            const submitButton = this.parentElement.querySelector('button');
            if (this.value && this.checkValidity()) {
                submitButton.disabled = false;
                submitButton.style.opacity = '1';
            } else {
                submitButton.disabled = true;
                submitButton.style.opacity = '0.6';
            }
        });
    });
}

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

function formatPrice(price) {
    return `Rs. ${price.toLocaleString()}`;
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ==========================================
// RESPONSIVE NAVIGATION
// ==========================================

// Auto-close mobile menu when clicking on links
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
            bootstrap.Collapse.getInstance(navbarCollapse).hide();
        }
    });
});

// ==========================================
// PERFORMANCE OPTIMIZATIONS
// ==========================================

// Lazy load images when they come into view
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// ==========================================
// ERROR HANDLING
// ==========================================

window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    // You can implement error reporting here
});

// ==========================================
// CONSOLE WELCOME MESSAGE
// ==========================================

console.log('%c🚀 Welcome to Boom Marketplace!', 'color: #FF6B35; font-size: 20px; font-weight: bold;');
console.log('%cThe future of commerce in Sri Lanka', 'color: #FFD23F; font-size: 14px;');
console.log('%cDeveloped with ❤️ for the Sri Lankan market', 'color: #6c757d; font-size: 12px;');
