import React, { useState, useMemo } from 'react';
import './Menu.css';
import { DishList } from './Dish/Dish';
import CategoryBar from './Category/CategoryBar';
import OrderForm from './Order/OrderForm';
import { useFetch } from '../../../hooks/useFetch';
import { useCart } from '../../../cart/CartProvider';

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Fetch data using custom hook
  const { data: menuData, loading, error } = useFetch('/api/menu');

  // Consume cart state and dispatch from CartContext
  const { items, totalETB, dispatch } = useCart();

  // Derive unique categories dynamically using useMemo
  const categories = useMemo(() => {
    if (!menuData) return ["All"];
    return ["All", ...new Set(menuData.map((d) => d.category))];
  }, [menuData]);

  // Derive filtered dish list using useMemo
  const filteredDishes = useMemo(() => {
    if (!menuData) return [];
    if (selectedCategory === "All") return menuData;
    return menuData.filter((d) => d.category === selectedCategory);
  }, [menuData, selectedCategory]);

  if (loading) {
    return <div className="text-center py-10 font-bold text-gray-600">Loading menu...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-500 font-bold">Error loading menu: {error}</div>;
  }

  return (
    <div className="menu-container max-w-4xl mx-auto p-6 font-sans">
      {/* Header section with running total from Context */}
      <header className="flex justify-between items-center border-b pb-4 mb-6">
        <div>
          <h1 className="text-3xl font-extrabold text-red-800">Addis Eats</h1>
          <p className="text-gray-600 text-sm">Authentic Ethiopian Cuisine</p>
        </div>
        <div className="bg-amber-100 border border-amber-300 px-4 py-2 rounded-lg text-right">
          <span className="text-xs uppercase font-bold text-amber-800 block">Running Total</span>
          <span className="text-2xl font-black text-amber-950">{totalETB} ETB</span>
        </div>
      </header>

      {/* Category Filter Bar */}
      <CategoryBar
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {/* Dish List connected to Cart Context */}
      <section className="menu my-6">
        <DishList
          dishes={filteredDishes}
          cartItems={items}
          dispatch={dispatch}
        />
      </section>

      {/* TeleBirr Delivery Form */}
      <OrderForm totalETB={totalETB} />
    </div>
  );
}