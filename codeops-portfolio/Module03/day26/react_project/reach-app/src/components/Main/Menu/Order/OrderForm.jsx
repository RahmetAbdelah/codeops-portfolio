import React, { useState } from 'react';
import { useCart } from '../../../../cart/CartProvider';

export default function OrderForm({ totalETB: propTotalETB }) {
  // Read totalETB and dispatch directly from context (with fallback to prop)
  const cartContext = useCart();
  const totalETB = propTotalETB !== undefined ? propTotalETB : cartContext.totalETB;
  const dispatch = cartContext.dispatch;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    area: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Validates standard Ethiopian phone format for TeleBirr (+2519... / +2517... or 09... / 07...)
  const isTeleBirrValid = /^(\+251|0)(9|7)\d{8}$/.test(formData.phone.trim());
  const isFormValid =
    isTeleBirrValid &&
    formData.name.trim() !== '' &&
    formData.area.trim() !== '' &&
    totalETB > 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    alert(`Order submitted for ${formData.name}! Total: ${totalETB} ETB via TeleBirr.`);

    // Reset form and clear global cart state
    setFormData({ name: '', phone: '', area: '' });
    if (dispatch) {
      dispatch({ type: 'CLEAR_CART' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="border p-6 rounded-lg bg-gray-50 mt-6 shadow flex flex-col gap-4">
      <h2 className="text-xl font-bold border-b pb-2">TeleBirr Delivery Details</h2>

      <div>
        <label className="block text-sm font-medium mb-1">Full Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Abebe Bikila"
          className="w-full border p-2 rounded"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">TeleBirr Mobile Number</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="0911223344 or +251911223344"
          className={`w-full border p-2 rounded ${
            formData.phone && !isTeleBirrValid ? 'border-red-500 bg-red-50' : ''
          }`}
          required
        />
        {formData.phone && !isTeleBirrValid && (
          <p className="text-xs text-red-500 mt-1">
            Please enter a valid TeleBirr phone number starting with 09, 07, or +251.
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Delivery Area / Neighborhood</label>
        <input
          type="text"
          name="area"
          value={formData.area}
          onChange={handleChange}
          placeholder="Bole, Kazanchis, etc."
          className="w-full border p-2 rounded"
          required
        />
      </div>

      <button
        type="submit"
        disabled={!isFormValid}
        className={`mt-2 py-3 px-4 rounded font-bold text-white transition ${
          isFormValid
            ? 'bg-blue-600 hover:bg-blue-700 cursor-pointer'
            : 'bg-gray-400 cursor-not-allowed'
        }`}
      >
        Pay {totalETB} ETB with TeleBirr
      </button>
    </form>
  );
}