const state = {
  medicines: [],
  cart: [],
  search: "",
};

const product = document.querySelector("#products");
const searchEl = document.querySelector("#search");
const cartEl = document.querySelector("#cart");

if (searchEl) {
  searchEl.addEventListener("input", (e) => {
    state.search = e.target.value;
    render();
  });
}

// Checkout modal and form
const checkoutModal = document.querySelector("#checkout-modal");
const orderForm = document.querySelector("#order-form");
const cancelBtn = document.querySelector("#cancel-btn");
const closeBtn = document.querySelector(".modal-close");

if (cancelBtn) {
  cancelBtn.addEventListener("click", () => {
    checkoutModal.style.display = "none";
  });
}

if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    checkoutModal.style.display = "none";
  });
}

if (orderForm) {
  orderForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const name = document.querySelector("#name").value.trim();
    const phone = document.querySelector("#phone").value.trim();
    const address = document.querySelector("#address").value.trim();
    
    if (!name || !phone || !address) {
      alert("Please fill all fields");
      return;
    }
    
    if (state.cart.length === 0) {
      alert("Cart is empty!");
      return;
    }
    
    const total = cartTotal();
    alert(`Order Placed!\n\nName: ${name}\nPhone: ${phone}\nAddress: ${address}\n\nTotal: ${total} ETB\n\nThank you for your order!`);
    
    state.cart = [];
    save();
    render();
    checkoutModal.style.display = "none";
    orderForm.reset();
  });
}

async function loadProduct() {
  if (!product) return;
  product.textContent = "Loading medicines...";

  try {
    const res = await fetch("menu.json");
    if (!res.ok) throw new Error("HTTP " + res.status);

    const data = await res.json();
    state.medicines = Array.isArray(data) ? data : [];
    render();
  } catch (err) {
    product.textContent = "Could not load the menu.";
  }
}

function render() {
  if (!product) return;

  const term = state.search.toLowerCase();
  const shown = state.medicines.filter((d) => d.name.toLowerCase().includes(term));

  product.innerHTML = shown
    .map(
      (d) => `
        <article class="product-card medicine" data-id="${d.id}">
          <img src="${d.image || "https://images.unsplash.com/photo-158271978250-c89cae4dc85b?w=500"}" alt="${d.name}">
          <h3>${d.name}</h3>
          <p class="price">ETB ${d.price}</p>
          <button class="shop-btn add">Add to Cart</button>
        </article>
      `
    )
    .join("");

  renderCart();
}

if (product) {
  product.addEventListener("click", (e) => {
    if (!e.target.matches(".add")) return;

    const medicineEl = e.target.closest(".medicine");
    if (!medicineEl) return;

    const id = Number(medicineEl.dataset.id);
    const medicine = state.medicines.find((d) => d.id === id);
    const line = state.cart.find((i) => i.id === id);

    if (line) line.qty += 1;
    else state.cart.push({ ...medicine, qty: 1 });

    save();
    render();
  });
}

if (cartEl) {
  cartEl.addEventListener("click", (e) => {
    if (!e.target.matches(".rm")) return;

    const item = e.target.closest("li");
    if (!item) return;

    const id = Number(item.dataset.id);
    state.cart = state.cart.filter((i) => i.id !== id);

    save();
    render();
  });
}

function renderCart() {
  if (!cartEl) return;

  if (state.cart.length === 0) {
    cartEl.innerHTML = `<h3>Your Order</h3><p>Empty</p>`;
    return;
  }

  const total = cartTotal();
  const cartHTML = state.cart
    .map(
      (i) => `
        <li data-id="${i.id}">
          ${i.name} x${i.qty} - ${i.price * i.qty} ETB
          <button class="rm">Remove</button>
        </li>
      `
    )
    .join("");

  cartEl.innerHTML = `
    <h3>Your Order</h3>
    <ul>${cartHTML}</ul>
    <div style="margin-top: 10px; padding-top: 10px; border-top: 1px solid #ccc;">
      <strong>Total: ${total} ETB</strong>
      <button id="checkout-btn" style="display: block; width: 100%; padding: 8px; margin-top: 8px; background: #1fa2b1; color: white; border: none; border-radius: 4px; cursor: pointer;">Checkout</button>
    </div>
  `;

  const btn = document.querySelector("#checkout-btn");
  if (btn) {
    btn.addEventListener("click", () => {
      if (checkoutModal) {
        checkoutModal.style.display = "flex";
      }
    });
  }
}

function cartTotal() {
  return state.cart.reduce((sum, i) => sum + i.price * i.qty, 0);
}

function save() {
  localStorage.setItem("addiseats", JSON.stringify(state.cart));
}

function load() {
  const stored = localStorage.getItem("addiseats");
  if (stored) state.cart = JSON.parse(stored);
}

async function init() {
  load();
  await loadProduct();
}

init();
