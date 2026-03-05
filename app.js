// =============================================================
//  MANUQATO ALLURE — app.js   Improved Logic + UX
// =============================================================

// ── Config ────────────────────────────────────────────────────
const STORE = {
  name:           "MANUQATO ALLURE",
  whatsappNumber: "254720220163",
  currency:       "KSh",
  locationLabel:  "Nairobi, Kenya",
};

const PRODUCTS = [
  // ── Fragrances ──────────────────────────────────────────────
  { id:"f1",  title:"FREQUENCE ORIENTAL",       category:"fragrance", price:4950, rating:4.8, stock:"In Stock", desc:"Citrus top notes with amber warmth and a clean musk finish. Futuristic and addictive.",             image:"Images/perfume1_frequence oriental.jpg" },
  { id:"f2",  title:"FREQUENCE FRUITY FLORAL",  category:"fragrance", price:6200, rating:4.9, stock:"Limited",  desc:"Bright fruity top notes blooming into a soft floral heart — joyful and feminine.",                  image:"Images/perfume2_frequence fruity_floral.jpg" },
  { id:"f3",  title:"BLOSSOM 50ML",             category:"fragrance", price:5400, rating:4.7, stock:"In Stock", desc:"Floral electric freshness with a soft powdery base — clean and confident.",                        image:"Images/Blossom-50ML.jpeg" },
  { id:"f4",  title:"LORIS FREQUENCE FLORAL",   category:"fragrance", price:5800, rating:4.8, stock:"In Stock", desc:"A delicate floral signature from Loris — light, lasting, and effortlessly elegant.",               image:"Images/perfume3_loris frequence_floral.jpg" },
  { id:"f5",  title:"BUSINESS CLUB EDP",        category:"fragrance", price:6500, rating:4.9, stock:"In Stock", desc:"Sophisticated eau de parfum for the modern professional. Confident and commanding.",               image:"Images/perfume4_business club_eau de parfum.jpg" },
  { id:"f6",  title:"JAVOU HONEYMOON 100ML",    category:"fragrance", price:7200, rating:4.8, stock:"Limited",  desc:"A romantic 100ml — warm, sensual, and unforgettable. Made for special moments.",                   image:"Images/JAVOU-HONEYMOON-100ML.jpg" },
  { id:"f7",  title:"GENTLEMAN 50ML",           category:"fragrance", price:5600, rating:4.7, stock:"In Stock", desc:"A refined masculine scent — crisp woods, subtle spice, and timeless elegance.",                   image:"Images/50-ML-Gentleman.jpeg" },
  { id:"f8",  title:"BLUE FLAME 50ML",          category:"fragrance", price:5200, rating:4.7, stock:"In Stock", desc:"Cool aquatic top notes ignite into a warm amber base — bold and magnetic.",                       image:"Images/DMAR-BLUE-FLAME-50ML.jpeg" },
  { id:"f9",  title:"ALTHERON 50ML",            category:"fragrance", price:5000, rating:4.6, stock:"In Stock", desc:"A rich aromatic blend with depth and precision — for those who lead.",                            image:"Images/ALTHERON-50ML.jpeg" },
  { id:"f10", title:"REED DIFFUSER — COFFEE",   category:"fragrance", price:3800, rating:4.7, stock:"In Stock", desc:"A warm 100ml coffee-scented reed diffuser — fill your space with luxury.",                        image:"Images/100-ML-REED-DIFFUSER-Coffee-400x457.jpeg" },
  { id:"f11", title:"REED DIFFUSER — FRUITY",   category:"fragrance", price:3800, rating:4.7, stock:"In Stock", desc:"A vibrant 100ml fruity reed diffuser — fresh, uplifting, and long-lasting.",                     image:"Images/100-ML-REED-DIFFUSER-Fruity-1-400x457.jpg" },
  { id:"f12", title:"LORIS HAMDAN",             category:"fragrance", price:6800, rating:4.9, stock:"Limited",  desc:"A premium Loris Hamdan signature — intense, luxurious, and deeply captivating.",                  image:"Images/Loris-Hamdan-Perfume.jpeg" },
  // ── Apparel ─────────────────────────────────────────────────
  { id:"a1", title:"NEON HOODIE",      category:"apparel",   price:3500, rating:4.8, stock:"In Stock", desc:"Premium cotton hoodie with a clean futuristic silhouette. All-season essential.", image:"https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=600&q=80" },
  { id:"a2", title:"CHROME TEE",       category:"apparel",   price:1600, rating:4.6, stock:"In Stock", desc:"Minimal tee with a subtle reflective vibe. Street-ready and clean.",               image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80" },
  { id:"a3", title:"MIDNIGHT JOGGERS", category:"apparel",   price:2800, rating:4.7, stock:"Limited",  desc:"Soft-fit joggers designed for comfort and sleek structure.",                        image:"https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=600&q=80" },
  // ── Accessories ─────────────────────────────────────────────
  { id:"x1", title:"LUMIN WATCH",      category:"accessory", price:4200, rating:4.7, stock:"In Stock", desc:"Minimal watch with a neon edge — clean design, maximum presence.",  image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80" },
  { id:"x2", title:"AURORA CHAIN",     category:"accessory", price:1900, rating:4.8, stock:"In Stock", desc:"Statement chain that catches light like a prism. Layer-friendly.",  image:"https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80" },
  { id:"x3", title:"NOVA SUNGLASSES",  category:"accessory", price:2400, rating:4.6, stock:"In Stock", desc:"Futuristic frames with a sharp silhouette. Unisex.",                image:"https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=80" },
];

const CAT_CONFIG = {
  fragrance: {
    bg:         "linear-gradient(135deg,rgba(0,212,255,.18),rgba(184,28,255,.14),rgba(201,168,76,.08))",
    thumbBg:    "rgba(0,212,255,.06)",
    orbColors:  "radial-gradient(circle at 35% 35%,rgba(0,212,255,.9),rgba(176,28,255,.5),rgba(201,168,76,.3))",
  },
  apparel: {
    bg:         "linear-gradient(135deg,rgba(56,255,179,.16),rgba(0,212,255,.12),rgba(255,255,255,.04))",
    thumbBg:    "rgba(56,255,179,.06)",
    orbColors:  "radial-gradient(circle at 35% 35%,rgba(56,255,179,.9),rgba(0,212,255,.5),rgba(255,255,255,.2))",
  },
  accessory: {
    bg:         "linear-gradient(135deg,rgba(201,168,76,.2),rgba(10,126,240,.14),rgba(176,28,255,.08))",
    thumbBg:    "rgba(201,168,76,.06)",
    orbColors:  "radial-gradient(circle at 35% 35%,rgba(201,168,76,.9),rgba(176,28,255,.4),rgba(10,126,240,.3))",
  },
};

// =============================================================
//  Helpers
// =============================================================
const fmt  = (n) => n.toLocaleString("en-KE");
const qs   = (s, el = document) => el.querySelector(s);
const qsa  = (s, el = document) => [...el.querySelectorAll(s)];
const byId = (id) => PRODUCTS.find((p) => p.id === id);

const CART_KEY = "mq_cart_v2";
const getCart  = ()    => JSON.parse(localStorage.getItem(CART_KEY) || "[]");
const saveCart = (c)   => localStorage.setItem(CART_KEY, JSON.stringify(c));

const cartCount    = (c) => c.reduce((s, i) => s + i.qty,             0);
const cartSubtotal = (c) => c.reduce((s, i) => s + i.qty * i.price,   0);

const categoryLabel = (cat) =>
  cat === "fragrance" ? "Fragrance" : cat === "apparel" ? "Apparel" : "Accessory";

function buildWaLink(msg) {
  return `https://wa.me/${STORE.whatsappNumber}?text=${encodeURIComponent(msg)}`;
}

// =============================================================
//  Toast Notification System  (replaces all alert() calls)
// =============================================================
function toast(msg, type = "default", icon = "") {
  const container = qs("#toastContainer");
  const el = document.createElement("div");
  el.className = `toast ${type}`;
  el.innerHTML = icon
    ? `<span class="toast-icon">${icon}</span><span class="toast-msg">${msg}</span>`
    : `<span class="toast-msg">${msg}</span>`;
  container.appendChild(el);
  setTimeout(() => {
    el.classList.add("toast-out");
    el.addEventListener("animationend", () => el.remove(), { once: true });
  }, 3200);
}

// =============================================================
//  Stock / Rating helpers
// =============================================================
function stockBadge(stock) {
  const cls = stock === "Limited" ? "stock-low" : stock === "Out of Stock" ? "stock-out" : "stock-in";
  return `<span class="card-stock-badge ${cls}">${stock}</span>`;
}
function stockClass(stock) {
  return stock === "Limited" ? "stock-low" : stock === "Out of Stock" ? "stock-out" : "stock-in";
}
function starsHtml(rating) {
  return `<span style="color:var(--gold)">${"★".repeat(Math.floor(rating))}</span> ${rating.toFixed(1)}`;
}

// =============================================================
//  Product Card HTML
// =============================================================
function productCard(p) {
  const cfg = CAT_CONFIG[p.category];
  return `
    <article class="prod-card" data-id="${p.id}" tabindex="0" role="button" aria-label="View ${p.title}">
      <div class="card-thumb" style="background:${cfg.thumbBg}">
        ${p.image
          ? `<img src="${p.image}" alt="${p.title}" class="card-thumb-img" />`
          : `<div class="card-thumb-orb" style="background:${cfg.orbColors};filter:blur(1px)"></div>`
        }
        ${stockBadge(p.stock)}
      </div>
      <div class="card-body">
        <div class="card-cat">${categoryLabel(p.category)}</div>
        <div class="card-name">${p.title}</div>
        <p class="card-desc">${p.desc}</p>
        <div class="card-meta-row">
          <div class="card-rating">${starsHtml(p.rating)}</div>
          <div class="card-price">${STORE.currency} ${fmt(p.price)}</div>
        </div>
        <div class="card-actions">
          <button class="btn-ghost"   data-view="${p.id}" tabindex="-1">View</button>
          <button class="btn-primary" data-add="${p.id}"  tabindex="-1">Add to Cart</button>
        </div>
      </div>
    </article>
  `;
}

function renderNewArrivals() {
  qs("#newArrivals").innerHTML = PRODUCTS.slice(0, 3).map(productCard).join("");
}

// =============================================================
//  Product Grid + Filtering
// =============================================================
let activeFilter   = "all";
let searchTerm     = "";
let searchDebounce = null;

function applyFilters() {
  let list = [...PRODUCTS];
  if (activeFilter !== "all") list = list.filter((p) => p.category === activeFilter);
  if (searchTerm.trim()) {
    const t = searchTerm.trim().toLowerCase();
    list = list.filter((p) =>
      p.title.toLowerCase().includes(t) ||
      p.desc.toLowerCase().includes(t)  ||
      p.category.toLowerCase().includes(t)
    );
  }
  renderGrid(list);
}

function renderGrid(list) {
  const grid = qs("#productGrid");
  const bar  = qs("#resultsBar");

  bar.textContent = (searchTerm || activeFilter !== "all")
    ? `Showing ${list.length} of ${PRODUCTS.length} products`
    : "";

  if (!list.length) {
    grid.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">🔍</div>
        <div class="empty-state-msg">No products found</div>
        <div class="empty-state-sub">Try adjusting your search or filter</div>
      </div>`;
    return;
  }
  grid.innerHTML = list.map(productCard).join("");
}

// =============================================================
//  Product Modal
// =============================================================
let activeProduct = null;
let modalQty      = 1;

function openProductModal(p) {
  if (!p) return;
  activeProduct = p;
  modalQty = 1;
  const cfg = CAT_CONFIG[p.category];

  qs("#pmCategory").textContent     = categoryLabel(p.category);
  qs("#pmTitle").textContent        = p.title;
  qs("#pmDesc").textContent         = p.desc;
  qs("#pmPrice").textContent        = fmt(p.price);
  qs("#pmRating").innerHTML         = starsHtml(p.rating);
  qs("#pmStock").textContent        = p.stock;
  qs("#pmStock").className          = `pm-stock ${stockClass(p.stock)}`;
  qs("#pmGlow").style.background    = cfg.bg;
  qs("#pmOrb").style.background     = cfg.orbColors;
  qs("#pmOrb").style.filter         = "blur(2px)";

  // Show real image if available, otherwise fall back to orb
  const pmVisual = qs("#pmVisual");
  const existingImg = pmVisual.querySelector(".pm-product-img");
  if (existingImg) existingImg.remove();
  if (p.image) {
    qs("#pmOrb").style.display = "none";
    const img = document.createElement("img");
    img.src = p.image;
    img.alt = p.title;
    img.className = "pm-product-img";
    pmVisual.appendChild(img);
  } else {
    qs("#pmOrb").style.display = "";
  }
  updateModalQty();

  openOverlay("productModal");
}

function updateModalQty() {
  if (!activeProduct) return;
  qs("#qtyDisplay").textContent  = modalQty;
  qs("#pmLineTotal").textContent = fmt(activeProduct.price * modalQty);
}

// =============================================================
//  Overlay / Drawer helpers
// =============================================================
function openOverlay(id) {
  qs(`#${id}`).classList.add("open");
  qs(`#${id}`).setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}
function closeOverlay(id) {
  qs(`#${id}`).classList.remove("open");
  qs(`#${id}`).setAttribute("aria-hidden", "true");
  if (!document.querySelector(".overlay.open, .cart-overlay.open")) {
    document.body.style.overflow = "";
  }
}
function openCartDrawer() {
  renderCart();
  qs("#cartDrawer").classList.add("open");
  qs("#cartDrawer").setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}
function closeCartDrawer() {
  qs("#cartDrawer").classList.remove("open");
  qs("#cartDrawer").setAttribute("aria-hidden", "true");
  if (!document.querySelector(".overlay.open")) document.body.style.overflow = "";
}

// =============================================================
//  Cart Logic
// =============================================================
function addToCart(id, qty = 1) {
  const p = byId(id);
  if (!p) return;

  const cart     = getCart();
  const existing = cart.find((i) => i.id === id);

  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id: p.id, title: p.title, price: p.price, category: p.category, qty });
  }

  saveCart(cart);
  refreshCartBadge(true);
  toast(`${p.title} added to cart`, "success", "✦");
}

function updateCartQty(id, delta) {
  const cart = getCart();
  const item  = cart.find((i) => i.id === id);
  if (!item) return;

  item.qty = Math.max(0, item.qty + delta);
  if (item.qty === 0) cart.splice(cart.indexOf(item), 1);

  saveCart(cart);
  renderCart();
  refreshCartBadge();
}

function removeCartItem(id) {
  saveCart(getCart().filter((i) => i.id !== id));
  renderCart();
  refreshCartBadge();
  toast("Item removed", "info", "✕");
}

function clearCart() {
  saveCart([]);
  renderCart();
  refreshCartBadge();
  toast("Cart cleared", "info", "✦");
}

function refreshCartBadge(bump = false) {
  const n     = cartCount(getCart());
  const badge = qs("#cartBadge");
  badge.textContent = n;
  qs("#mobileCartCount").textContent = n;

  if (bump) {
    badge.classList.remove("bump");
    void badge.offsetWidth;  // force reflow
    badge.classList.add("bump");
    setTimeout(() => badge.classList.remove("bump"), 500);
  }
}

function renderCart() {
  const cart   = getCart();
  const items  = qs("#cartItems");
  const footer = qs("#cartFooter");

  qs("#cartSubtotal").textContent = fmt(cartSubtotal(cart));

  if (!cart.length) {
    items.innerHTML = `
      <div class="cart-empty">
        <div class="cart-empty-icon">🛒</div>
        <div class="cart-empty-msg">Your cart is empty</div>
        <div class="cart-empty-sub">Add something from the collection</div>
      </div>`;
    footer.style.display = "none";
    return;
  }

  footer.style.display = "";
  items.innerHTML = cart.map((i) => `
    <div class="cart-item">
      <div class="ci-row-1">
        <div>
          <div class="ci-name">${i.title}</div>
          <div class="ci-meta">${categoryLabel(i.category)} &middot; ${STORE.currency} ${fmt(i.price)} each</div>
        </div>
        <button class="ci-remove" data-remove="${i.id}">Remove</button>
      </div>
      <div class="ci-row-2">
        <div class="ci-qty">
          <button class="ci-qty-btn" data-dec="${i.id}">-</button>
          <span class="ci-qty-val">${i.qty}</span>
          <button class="ci-qty-btn" data-inc="${i.id}">+</button>
        </div>
        <div class="ci-line-price">${STORE.currency} ${fmt(i.qty * i.price)}</div>
      </div>
    </div>
  `).join("");
}

// =============================================================
//  WhatsApp Message Builders
// =============================================================
function cartToWaMsg(cart, heading = "ORDER") {
  const lines = cart.map((i) =>
    `  - ${i.title} x${i.qty} = ${STORE.currency} ${fmt(i.qty * i.price)}`
  );
  return [
    `Hello ${STORE.name}! (${heading})`,
    "",
    "Items:",
    ...lines,
    "",
    `Subtotal: ${STORE.currency} ${fmt(cartSubtotal(cart))}`,
    `Location: ${STORE.locationLabel}`,
    "",
    "Please confirm delivery fee and payment details. Thank you!",
  ].join("\n");
}

// =============================================================
//  Form Validation
// =============================================================
function validateForm(form) {
  let valid = true;
  form.querySelectorAll("[required]").forEach((el) => {
    el.classList.remove("error");
    if (!el.value.trim()) { el.classList.add("error"); valid = false; }
  });
  return valid;
}

// =============================================================
//  Init
// =============================================================
function init() {

  // ── Year + WhatsApp link ───────────────────────────────
  qs("#year").textContent  = new Date().getFullYear();
  qs("#whatsAppLink").href = buildWaLink(`Hello ${STORE.name}! I'd like to know more about your products.`);

  // ── Initial render ─────────────────────────────────────
  renderNewArrivals();
  renderGrid(PRODUCTS);
  refreshCartBadge();

  // ── Hero ───────────────────────────────────────────────
  qs("#heroAddCart").addEventListener("click", () => {
    addToCart("f1", 1);
    setTimeout(openCartDrawer, 300);
  });
  qs("#scrollNew").addEventListener("click", () =>
    qs("#new").scrollIntoView({ behavior: "smooth" })
  );

  // ── Mobile nav toggle ──────────────────────────────────
  const burger    = qs("#hamburger");
  const mobileNav = qs("#mobileNav");
  burger.addEventListener("click", () => {
    const open = mobileNav.classList.toggle("open");
    burger.classList.toggle("open", open);
    burger.setAttribute("aria-expanded", String(open));
    mobileNav.setAttribute("aria-hidden",  String(!open));
  });
  qsa(".mob-link").forEach((a) => a.addEventListener("click", () => {
    mobileNav.classList.remove("open");
    burger.classList.remove("open");
  }));

  // ── Header buttons ─────────────────────────────────────
  qs("#openCart").addEventListener("click", openCartDrawer);
  qs("#openCartMobile").addEventListener("click", () => {
    openCartDrawer();
    mobileNav.classList.remove("open");
    burger.classList.remove("open");
  });
  qs("#openSearch").addEventListener("click", () => {
    qs("#shop").scrollIntoView({ behavior: "smooth" });
    setTimeout(() => qs("#searchInput").focus(), 400);
  });
  qs("#openNewsletter").addEventListener("click", () => openOverlay("newsletterModal"));

  // ── Category filter tabs ───────────────────────────────
  qsa(".filter-tab").forEach((btn) => {
    btn.addEventListener("click", () => {
      qsa(".filter-tab").forEach((b) => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");
      activeFilter = btn.dataset.filter;
      applyFilters();
    });
  });

  // ── Search — debounced ─────────────────────────────────
  const searchInput = qs("#searchInput");
  const searchClear = qs("#searchClear");

  searchInput.addEventListener("input", (e) => {
    searchTerm = e.target.value;
    searchClear.classList.toggle("visible", searchTerm.length > 0);
    clearTimeout(searchDebounce);
    searchDebounce = setTimeout(applyFilters, 220);
  });
  searchClear.addEventListener("click", () => {
    searchInput.value = "";
    searchTerm = "";
    searchClear.classList.remove("visible");
    applyFilters();
    searchInput.focus();
  });

  // ── Delegated click events ─────────────────────────────
  document.addEventListener("click", (e) => {
    const viewId   = e.target.closest("[data-view]")?.dataset?.view;
    const addId    = e.target.closest("[data-add]")?.dataset?.add;
    const incId    = e.target.closest("[data-inc]")?.dataset?.inc;
    const decId    = e.target.closest("[data-dec]")?.dataset?.dec;
    const removeId = e.target.closest("[data-remove]")?.dataset?.remove;

    if (viewId)   openProductModal(byId(viewId));
    if (addId)    addToCart(addId, 1);
    if (incId)    updateCartQty(incId, +1);
    if (decId)    updateCartQty(decId, -1);
    if (removeId) removeCartItem(removeId);
  });

  // ── Card click (body area, not buttons) ───────────────
  document.addEventListener("click", (e) => {
    const card = e.target.closest(".prod-card");
    if (!card || e.target.closest("button")) return;
    openProductModal(byId(card.dataset.id));
  });

  // ── Keyboard: Enter/Space on cards ────────────────────
  document.addEventListener("keydown", (e) => {
    if ((e.key === "Enter" || e.key === " ") && e.target.classList.contains("prod-card")) {
      e.preventDefault();
      openProductModal(byId(e.target.dataset.id));
    }
    // Escape closes any open panel
    if (e.key === "Escape") {
      if (qs("#productModal").classList.contains("open"))    closeOverlay("productModal");
      if (qs("#newsletterModal").classList.contains("open")) closeOverlay("newsletterModal");
      if (qs("#cartDrawer").classList.contains("open"))      closeCartDrawer();
    }
  });

  // ── Modal qty controls ─────────────────────────────────
  qs("#qtyMinus").addEventListener("click", () => {
    if (modalQty > 1) { modalQty--; updateModalQty(); }
  });
  qs("#qtyPlus").addEventListener("click", () => {
    modalQty++;
    updateModalQty();
  });

  // ── Modal: Add to cart ─────────────────────────────────
  qs("#pmAddCart").addEventListener("click", () => {
    if (!activeProduct) return;
    addToCart(activeProduct.id, modalQty);
    closeOverlay("productModal");
    setTimeout(openCartDrawer, 300);
  });

  // ── Modal: Buy via WhatsApp ────────────────────────────
  qs("#pmBuyNow").addEventListener("click", () => {
    if (!activeProduct) return;
    const msg = [
      `Hello ${STORE.name}! I want to buy:`,
      `  - ${activeProduct.title} x${modalQty}`,
      `  Total: ${STORE.currency} ${fmt(activeProduct.price * modalQty)}`,
      `Location: ${STORE.locationLabel}`,
    ].join("\n");
    window.open(buildWaLink(msg), "_blank");
  });

  // ── Cart: Checkout ─────────────────────────────────────
  qs("#checkoutBtn").addEventListener("click", () => {
    const cart = getCart();
    if (!cart.length) { toast("Your cart is empty — add something first", "error", "⚠"); return; }
    window.open(buildWaLink(cartToWaMsg(cart, "CHECKOUT")), "_blank");
  });

  // ── Cart: Clear ────────────────────────────────────────
  qs("#clearCartBtn").addEventListener("click", () => {
    if (getCart().length) clearCart();
  });

  // ── Newsletter form ────────────────────────────────────
  qs("#newsletterForm").addEventListener("submit", (e) => {
    e.preventDefault();
    if (!validateForm(e.target)) return;
    const email = new FormData(e.target).get("email");
    localStorage.setItem("mq_newsletter", String(email));
    closeOverlay("newsletterModal");
    toast("Welcome to the Allure list!", "success", "✦");
    e.target.reset();
  });

  // ── Contact form ───────────────────────────────────────
  qs("#contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    if (!validateForm(e.target)) {
      toast("Please fill in all fields", "error", "⚠");
      return;
    }
    const fd  = new FormData(e.target);
    const msg = [
      `Hello ${STORE.name}!`,
      `Name: ${fd.get("name")}`,
      `Phone: ${fd.get("phone")}`,
      `Message: ${fd.get("message")}`,
    ].join("\n");
    window.open(buildWaLink(msg), "_blank");
    e.target.reset();
    toast("Opening WhatsApp…", "info", "💬");
  });

  // ── Backdrop clicks ────────────────────────────────────
  qs("#productModal .overlay-backdrop").addEventListener("click",   () => closeOverlay("productModal"));
  qs("#newsletterModal .overlay-backdrop").addEventListener("click", () => closeOverlay("newsletterModal"));
  qs("#cartDrawer .cart-backdrop").addEventListener("click",        closeCartDrawer);

  // ── Close buttons (data-close attribute) ──────────────
  document.addEventListener("click", (e) => {
    const target = e.target.closest("[data-close]")?.dataset?.close;
    if (target === "modal")      closeOverlay("productModal");
    if (target === "newsletter") closeOverlay("newsletterModal");
    if (target === "cart")       closeCartDrawer();
  });

  // ── Scroll: header border highlight ───────────────────
  window.addEventListener("scroll", () => {
    qs("#header").style.borderBottomColor = window.scrollY > 40
      ? "rgba(201,168,76,.2)"
      : "rgba(255,255,255,.08)";
  }, { passive: true });
}

init();
