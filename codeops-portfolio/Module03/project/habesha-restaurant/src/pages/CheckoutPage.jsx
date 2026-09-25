import { useState } from 'react'
import { Link } from 'react-router-dom'
import { z } from 'zod'

const checkoutSchema = z.object({
  name: z.string().trim().min(1, 'Please enter your name.'),
  phone: z.string().trim().regex(/^(\+251|0)(9|7)\d{8}$/, 'Please enter a valid Ethiopian phone number.'),
  address: z.string().trim(),
})

export default function CheckoutPage() {
  const [method, setMethod] = useState('Delivery')
  const [form, setForm] = useState({ name: '', phone: '', address: '' })
  const [error, setError] = useState('')

  function updateForm(event) {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  function placeOrder(event) {
    event.preventDefault()
    const result = checkoutSchema.safeParse(form)

    if (!result.success || (method === 'Delivery' && !form.address.trim())) {
      setError(result.error?.issues[0]?.message || 'Please enter your delivery address.')
      return
    }

    setError('')
    alert('Thank you! Your order has been received.')
  }

  return <section className="checkout-page"><Link to="/cart" className="back-link">← Your basket</Link><p className="eyebrow">ALMOST THERE</p><h1>Make it <em>yours.</em></h1><form onSubmit={placeOrder}><div className="toggle-row">{['Delivery', 'Pick-up'].map((item) => <button type="button" key={item} className={method === item ? 'selected' : ''} onClick={() => setMethod(item)}>{item}</button>)}</div><label>Full name<input name="name" value={form.name} onChange={updateForm} placeholder="e.g. Selam Tesfaye" /></label><label>Phone number<input name="phone" value={form.phone} onChange={updateForm} placeholder="+251 9..." /></label>{method === 'Delivery' && <label>Delivery address<input name="address" value={form.address} onChange={updateForm} placeholder="Street, neighborhood" /></label>}{error && <p className="error-message">{error}</p>}<h2 className="payment-title">Payment method</h2><button type="button" className="payment-option selected">Cash on {method.toLowerCase()} <span>✓</span></button><button type="submit" className="primary-button full">Place order <span>→</span></button><p className="secure-note">You can pay when your order arrives.</p></form></section>
}
