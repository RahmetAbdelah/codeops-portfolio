import { useCartStore } from '../stores/cartStore'

export function useCart() {
  const cart = useCartStore((state) => state.cart)
  const addToCart = useCartStore((state) => state.addToCart)
  const updateQuantity = useCartStore((state) => state.updateQuantity)
  const removeItem = useCartStore((state) => state.removeItem)

  const itemCount = cart.reduce((total, item) => total + item.quantity, 0)
  const cartTotal = cart.reduce((total, item) => total + (item.priceETB || item.price || 0) * item.quantity, 0)

  return { cart, itemCount, cartTotal, addToCart, updateQuantity, removeItem }
}
