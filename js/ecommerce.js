// Farm Langu Ecommerce System
class FarmEcommerce {
  constructor() {
    this.cart = JSON.parse(localStorage.getItem('farmCart')) || [];
    this.products = [];
    this.farmers = JSON.parse(localStorage.getItem('farmers')) || [];
    this.orders = JSON.parse(localStorage.getItem('orders')) || [];
    this.currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
    this.init();
  }

  init() {
    this.loadProducts();
    this.updateCartUI();
    this.bindEvents();
  }

  // Sample products data
  loadProducts() {
    this.products = [
      {
        id: 1,
        name: "Organic Tomatoes",
        price: 180,
        unit: "kg",
        category: "vegetables",
        farmer: "Mary Wanjiku",
        farmerId: "farmer001",
        location: "Nakuru",
        image: "images/tomato.jpg",
        description: "Fresh organic tomatoes grown without pesticides",
        stock: 50,
        rating: 4.8,
        reviews: 23,
        season: "Year-round",
        plantingTips: "Best planted during warm seasons with adequate water supply"
      },
      {
        id: 2,
        name: "Free-Range Eggs",
        price: 450,
        unit: "tray",
        category: "dairy",
        farmer: "John Kimani",
        farmerId: "farmer002",
        location: "Kiambu",
        image: "images/eggs.jpg",
        description: "Fresh eggs from free-range chickens",
        stock: 30,
        rating: 4.9,
        reviews: 45
      },
      {
        id: 3,
        name: "Fresh Milk",
        price: 80,
        unit: "liter",
        category: "dairy",
        farmer: "Grace Muthoni",
        farmerId: "farmer003",
        location: "Meru",
        image: "images/milk.jpg",
        description: "Pure fresh milk from grass-fed cows",
        stock: 100,
        rating: 4.7,
        reviews: 67
      },
      {
        id: 4,
        name: "Mixed Vegetables",
        price: 120,
        unit: "bundle",
        category: "vegetables",
        farmer: "Peter Ochieng",
        farmerId: "farmer004",
        location: "Kisumu",
        image: "images/vegetables.jpg",
        description: "Fresh mixed vegetables including kales, spinach, and carrots",
        stock: 25,
        rating: 4.6,
        reviews: 34
      },
      {
        id: 5,
        name: "Organic Fertilizer",
        price: 1200,
        unit: "25kg bag",
        category: "inputs",
        farmer: "Farm Langu Co-op",
        farmerId: "coop001",
        location: "Nakuru",
        image: "images/organic.jpg",
        description: "Nutrient-rich organic fertilizer for healthy crops",
        stock: 200,
        rating: 4.8,
        reviews: 89
      },
      {
        id: 6,
        name: "Fresh Harvest Bundle",
        price: 350,
        unit: "bundle",
        category: "vegetables",
        farmer: "Sarah Njeri",
        farmerId: "farmer005",
        location: "Nyeri",
        image: "images/harvest.jpg",
        description: "Seasonal fresh harvest including various vegetables and fruits",
        stock: 15,
        rating: 4.9,
        reviews: 28,
        season: "Seasonal",
        plantingTips: "Mixed seasonal vegetables best planted according to local climate"
      },
      {
        id: 7,
        name: "Hybrid Maize Seeds - H614",
        price: 450,
        unit: "2kg pack",
        category: "seeds",
        farmer: "Farm Langu Co-op",
        farmerId: "coop001",
        location: "Nakuru",
        image: "images/organic.jpg",
        description: "High-yielding drought-tolerant maize variety, 120-130 days to maturity",
        stock: 100,
        rating: 4.9,
        reviews: 156,
        season: "March-May, Oct-Dec",
        plantingTips: "Plant at onset of rains, requires 600-800mm rainfall"
      },
      {
        id: 8,
        name: "Climbing Bean Seeds - KK8",
        price: 280,
        unit: "1kg pack",
        category: "seeds",
        farmer: "Meru Seed Co-op",
        farmerId: "coop002",
        location: "Meru",
        image: "images/vegetables.jpg",
        description: "Disease-resistant climbing beans, 90-100 days to maturity",
        stock: 75,
        rating: 4.7,
        reviews: 89,
        season: "March-May, Oct-Dec",
        plantingTips: "Requires support structures, plant with adequate spacing"
      },
      {
        id: 9,
        name: "Irish Potatoes - Shangi",
        price: 120,
        unit: "kg",
        category: "vegetables",
        farmer: "Peter Kamau",
        farmerId: "farmer006",
        location: "Nyandarua",
        image: "images/vegetables.jpg",
        description: "High-quality table potatoes from highland farms",
        stock: 200,
        rating: 4.6,
        reviews: 67,
        season: "June-August",
        plantingTips: "Best grown in cool highland areas above 1800m altitude"
      },
      {
        id: 10,
        name: "Organic Pesticide - Neem Oil",
        price: 850,
        unit: "500ml",
        category: "inputs",
        farmer: "Green Solutions Ltd",
        farmerId: "supplier001",
        location: "Nairobi",
        image: "images/organic.jpg",
        description: "Natural pest control solution safe for organic farming",
        stock: 50,
        rating: 4.8,
        reviews: 124,
        season: "Year-round",
        plantingTips: "Apply during cool hours, effective against aphids and whiteflies"
      },
      {
        id: 11,
        name: "Drip Irrigation Kit - 50m",
        price: 4500,
        unit: "complete kit",
        category: "inputs",
        farmer: "AgroTech Solutions",
        farmerId: "supplier002",
        location: "Nakuru",
        image: "images/organic.jpg",
        description: "Complete drip irrigation system for water-efficient farming",
        stock: 25,
        rating: 4.9,
        reviews: 78,
        season: "Year-round",
        plantingTips: "Ideal for water conservation, suitable for all crop types"
      },
      {
        id: 12,
        name: "Passion Fruit Seedlings",
        price: 80,
        unit: "per seedling",
        category: "seedlings",
        farmer: "Tropical Fruits Farm",
        farmerId: "farmer007",
        location: "Murang'a",
        image: "images/harvest.jpg",
        description: "Purple passion fruit seedlings, grafted variety",
        stock: 150,
        rating: 4.7,
        reviews: 45,
        season: "March-May, Oct-Dec",
        plantingTips: "Requires support structures, fruits after 12-18 months"
      },
      // Smart Farming Technology Products
      {
        id: 13,
        name: "Smart Irrigation Controller",
        price: 15000,
        unit: "complete system",
        category: "technology",
        farmer: "AgriTech Kenya",
        farmerId: "tech001",
        location: "Nairobi",
        image: "images/machinery.jpg",
        description: "Automated irrigation system with soil moisture sensors and weather integration",
        stock: 20,
        rating: 4.8,
        reviews: 34,
        season: "Year-round",
        plantingTips: "Suitable for all crop types, reduces water usage by up to 40%"
      },
      {
        id: 14,
        name: "Crop Monitoring Sensors Kit",
        price: 25000,
        unit: "5-sensor kit",
        category: "technology",
        farmer: "Smart Farm Solutions",
        farmerId: "tech002",
        location: "Nakuru",
        image: "images/machinery.jpg",
        description: "IoT sensors for monitoring soil moisture, temperature, humidity, and plant health",
        stock: 15,
        rating: 4.9,
        reviews: 28,
        season: "Year-round",
        plantingTips: "Real-time monitoring helps optimize growing conditions and detect issues early"
      },
      {
        id: 15,
        name: "Precision Sprayer - GPS Guided",
        price: 35000,
        unit: "complete unit",
        category: "technology",
        farmer: "Precision Agri Ltd",
        farmerId: "tech003",
        location: "Eldoret",
        image: "images/machinery.jpg",
        description: "GPS-guided precision sprayer for targeted application of fertilizers and pesticides",
        stock: 8,
        rating: 4.7,
        reviews: 19,
        season: "Year-round",
        plantingTips: "Reduces chemical usage by 30%, improves application accuracy"
      },
      {
        id: 16,
        name: "Digital Harvest Scale & Analyzer",
        price: 20000,
        unit: "complete system",
        category: "technology",
        farmer: "HarvestTech Pro",
        farmerId: "tech004",
        location: "Mombasa",
        image: "images/machinery.jpg",
        description: "Digital weighing system with quality analysis and market price tracking",
        stock: 12,
        rating: 4.8,
        reviews: 22,
        season: "Year-round",
        plantingTips: "Helps optimize harvest timing and get better market prices"
      },
      {
        id: 17,
        name: "Weather Station - Professional",
        price: 18000,
        unit: "complete station",
        category: "technology",
        farmer: "Climate Solutions Kenya",
        farmerId: "tech005",
        location: "Kisumu",
        image: "images/machinery.jpg",
        description: "Professional weather monitoring station with mobile app connectivity",
        stock: 25,
        rating: 4.9,
        reviews: 41,
        season: "Year-round",
        plantingTips: "Essential for planning planting, irrigation, and harvest activities"
      },
      {
        id: 18,
        name: "Soil pH & Nutrient Tester",
        price: 8500,
        unit: "digital meter",
        category: "technology",
        farmer: "Soil Science Tech",
        farmerId: "tech006",
        location: "Thika",
        image: "images/soil.jpg",
        description: "Digital soil testing device for pH, NPK, and moisture levels",
        stock: 40,
        rating: 4.6,
        reviews: 67,
        season: "Year-round",
        plantingTips: "Test soil before planting and fertilizing for optimal results"
      },
      {
        id: 19,
        name: "Drone Spraying Service",
        price: 2500,
        unit: "per acre",
        category: "technology",
        farmer: "AerialCrop Services",
        farmerId: "tech007",
        location: "Nairobi",
        image: "images/machinery.jpg",
        description: "Professional drone spraying service for pesticides and fertilizers",
        stock: 100,
        rating: 4.8,
        reviews: 89,
        season: "Year-round",
        plantingTips: "Book 2-3 days in advance, weather dependent service"
      },
      {
        id: 20,
        name: "Smart Greenhouse Controller",
        price: 45000,
        unit: "complete system",
        category: "technology",
        farmer: "GreenHouse Tech",
        farmerId: "tech008",
        location: "Naivasha",
        image: "images/machinery.jpg",
        description: "Automated greenhouse climate control with temperature, humidity, and ventilation management",
        stock: 6,
        rating: 4.9,
        reviews: 15,
        season: "Year-round",
        plantingTips: "Ideal for high-value crops, increases yield by up to 60%"
      }
    ];
  }

  // Add product to cart
  addToCart(productId, quantity = 1) {
    const product = this.products.find(p => p.id === productId);
    if (!product) return false;

    const existingItem = this.cart.find(item => item.id === productId);
    
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.cart.push({
        ...product,
        quantity: quantity,
        addedAt: new Date().toISOString()
      });
    }

    this.saveCart();
    this.updateCartUI();
    this.showNotification(`${product.name} added to cart!`, 'success');
    return true;
  }

  // Remove from cart
  removeFromCart(productId) {
    this.cart = this.cart.filter(item => item.id !== productId);
    this.saveCart();
    this.updateCartUI();
  }

  // Update quantity in cart
  updateQuantity(productId, quantity) {
    const item = this.cart.find(item => item.id === productId);
    if (item) {
      if (quantity <= 0) {
        this.removeFromCart(productId);
      } else {
        item.quantity = quantity;
        this.saveCart();
        this.updateCartUI();
      }
    }
  }

  // Get cart total
  getCartTotal() {
    return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  // Get cart item count
  getCartCount() {
    return this.cart.reduce((count, item) => count + item.quantity, 0);
  }

  // Save cart to localStorage
  saveCart() {
    localStorage.setItem('farmCart', JSON.stringify(this.cart));
  }

  // Update cart UI
  updateCartUI() {
    const cartCount = document.querySelector('.cart-count');
    const cartTotal = document.querySelector('.cart-total');
    
    if (cartCount) {
      cartCount.textContent = this.getCartCount();
      cartCount.style.display = this.getCartCount() > 0 ? 'block' : 'none';
    }
    
    if (cartTotal) {
      cartTotal.textContent = `KES ${this.getCartTotal().toLocaleString()}`;
    }

    // Update cart dropdown if exists
    this.updateCartDropdown();
  }

  // Update cart dropdown
  updateCartDropdown() {
    const cartDropdown = document.querySelector('.cart-dropdown');
    if (!cartDropdown) return;

    if (this.cart.length === 0) {
      cartDropdown.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
      return;
    }

    const cartHTML = this.cart.map(item => `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" class="cart-item-image">
        <div class="cart-item-details">
          <h4>${item.name}</h4>
          <p>KES ${item.price} / ${item.unit}</p>
          <div class="quantity-controls">
            <button onclick="ecommerce.updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
            <span>${item.quantity}</span>
            <button onclick="ecommerce.updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
          </div>
        </div>
        <button class="remove-item" onclick="ecommerce.removeFromCart(${item.id})">×</button>
      </div>
    `).join('');

    cartDropdown.innerHTML = `
      ${cartHTML}
      <div class="cart-footer">
        <div class="cart-total">Total: KES ${this.getCartTotal().toLocaleString()}</div>
        <button class="btn btn-primary" onclick="window.location.href='checkout.html'">
          <i class="fa-solid fa-shopping-cart"></i> Checkout
        </button>
      </div>
    `;
  }

  // Filter products
  filterProducts(category = 'all', searchTerm = '') {
    let filtered = this.products;

    if (category !== 'all') {
      filtered = filtered.filter(product => product.category === category);
    }

    if (searchTerm) {
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.farmer.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  }

  // Render products
  renderProducts(products = this.products, containerId = 'products-container') {
    const container = document.getElementById(containerId);
    if (!container) return;

    if (products.length === 0) {
      container.innerHTML = '<p class="no-products">No products found</p>';
      return;
    }

    const productsHTML = products.map(product => `
      <article class="product-card" data-category="${product.category}">
        <div class="product-image">
          <img src="${product.image}" alt="${product.name}" />
          <div class="product-overlay">
            <button class="btn btn-primary quick-add" onclick="ecommerce.addToCart(${product.id})">
              <i class="fa-solid fa-cart-plus"></i> Quick Add
            </button>
          </div>
        </div>
        <div class="product-content">
          <div class="product-header">
            <div class="tag">${product.category}</div>
            <div class="rating">
              <i class="fa-solid fa-star"></i>
              <span>${product.rating}</span>
              <small>(${product.reviews})</small>
            </div>
          </div>
          <h3>${product.name}</h3>
          <p class="product-description">${product.description}</p>
          ${product.season ? `<div class="season-info" style="margin: 8px 0; font-size: 0.85rem; color: var(--green-600);"><i class="fa-solid fa-calendar"></i> Best Season: ${product.season}</div>` : ''}
          <div class="farmer-info">
            <i class="fa-solid fa-user"></i>
            <span>${product.farmer}</span>
            <small>${product.location}</small>
          </div>
          <div class="product-footer">
            <div class="price">KES ${product.price.toLocaleString()} / ${product.unit}</div>
            <div class="stock">Stock: ${product.stock}</div>
          </div>
          <div class="product-actions">
            <div class="quantity-selector">
              <button onclick="this.nextElementSibling.stepDown()">-</button>
              <input type="number" value="1" min="1" max="${product.stock}" id="qty-${product.id}">
              <button onclick="this.previousElementSibling.stepUp()">+</button>
            </div>
            <button class="btn btn-primary add-to-cart" onclick="ecommerce.addToCart(${product.id}, parseInt(document.getElementById('qty-${product.id}').value))">
              <i class="fa-solid fa-cart-plus"></i> Add to Cart
            </button>
          </div>
          ${product.plantingTips ? `<div class="planting-tips" style="margin-top: 12px; padding: 8px; background: #f8fff8; border-radius: 8px; font-size: 0.8rem; color: var(--text-700);"><i class="fa-solid fa-lightbulb" style="color: var(--green-600);"></i> ${product.plantingTips}</div>` : ''}
        </div>
      </article>
    `).join('');

    container.innerHTML = productsHTML;
  }

  // Show notification
  showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
      <i class="fa-solid fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
      <span>${message}</span>
      <button onclick="this.parentElement.remove()">×</button>
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
      notification.remove();
    }, 3000);
  }

  // Checkout process
  checkout(orderData) {
    if (this.cart.length === 0) {
      this.showNotification('Your cart is empty!', 'error');
      return false;
    }

    const order = {
      id: 'ORD' + Date.now(),
      items: [...this.cart],
      total: this.getCartTotal(),
      customer: orderData,
      status: 'pending',
      createdAt: new Date().toISOString(),
      farmers: [...new Set(this.cart.map(item => item.farmerId))]
    };

    this.orders.push(order);
    localStorage.setItem('orders', JSON.stringify(this.orders));

    // Clear cart
    this.cart = [];
    this.saveCart();
    this.updateCartUI();

    this.showNotification('Order placed successfully!', 'success');
    return order;
  }

  // Bind events
  bindEvents() {
    // Search functionality
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value;
        const category = document.querySelector('.category-filter')?.value || 'all';
        const filtered = this.filterProducts(category, searchTerm);
        this.renderProducts(filtered);
      });
    }

    // Category filter
    const categoryFilter = document.querySelector('.category-filter');
    if (categoryFilter) {
      categoryFilter.addEventListener('change', (e) => {
        const category = e.target.value;
        const searchTerm = document.querySelector('.search-input')?.value || '';
        const filtered = this.filterProducts(category, searchTerm);
        this.renderProducts(filtered);
      });
    }

    // Cart toggle
    const cartToggle = document.querySelector('.cart-toggle');
    if (cartToggle) {
      cartToggle.addEventListener('click', () => {
        const cartDropdown = document.querySelector('.cart-dropdown');
        if (cartDropdown) {
          cartDropdown.classList.toggle('show');
        }
      });
    }
  }
}

// Initialize ecommerce system
const ecommerce = new FarmEcommerce();

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = FarmEcommerce;
}