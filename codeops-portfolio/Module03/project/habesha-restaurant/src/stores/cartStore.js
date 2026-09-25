import { create } from 'zustand'

function getSavedCart() {
  try {
    return JSON.parse(localStorage.getItem('mesob-cart')) || []
  } catch {
    return []
  }
}

function saveCart(cart) {
  localStorage.setItem('mesob-cart', JSON.stringify(cart))
}

export const useCartStore = create((set) => ({
  cart: getSavedCart(),

  addToCart: (dish, options = {}) => set((state) => {
    const item = { ...dish, cartId: `${dish.id}-${options.spice || ''}`, ...options, quantity: 1 }
    const existingItem = state.cart.find((cartItem) => cartItem.cartId === item.cartId)
    const cart = existingItem
      ? state.cart.map((cartItem) => cartItem.cartId === item.cartId ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)
      : [...state.cart, item]

    saveCart(cart)
    return { cart }
  }),

  updateQuantity: (cartId, amount) => set((state) => {
    const cart = state.cart
      .map((item) => item.cartId === cartId ? { ...item, quantity: item.quantity + amount } : item)
      .filter((item) => item.quantity > 0)

    saveCart(cart)
    return { cart }
  }),

  removeItem: (cartId) => set((state) => {
    const cart = state.cart.filter((item) => item.cartId !== cartId)
    saveCart(cart)
    return { cart }
  }),
}))
