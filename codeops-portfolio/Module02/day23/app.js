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

  cartEl.innerHTML = state.cart
    .map(
      (i) => `
        <li data-id="${i.id}">
          ${i.name} x${i.qty} - ${i.price * i.qty}ETB
          <button class="rm">Remove</button>
        </li>
      `
    )
    .join("");
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