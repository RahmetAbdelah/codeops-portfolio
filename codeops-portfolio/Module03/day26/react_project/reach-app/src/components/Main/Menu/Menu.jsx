import React, { useState } from 'react';
import './Menu.css';
import { DishList } from './Dish/Dish';
import CategoryBar from '.Category/CategoryBar';
import OrderForm from '.Order/OrderForm';
import { menuData } from './data'; 

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [orderTotal, setOrderTotal] = useState(0);

  // Derive unique categories dynamically from the dataset
  const categories = ["All", ...new Set(menuData.map((d) => d.category))];

  // Derive the filtered dish list based on selected state
  const filteredDishes = selectedCategory === "All"
    ? menuData
    : menuData.filter((d) => d.category === selectedCategory);

  // Handler to update running total in ETB when a dish is added
  const handleAddToCart = (price) => {
    setOrderTotal((prevTotal) => prevTotal + price);
  };

  return (
    <div className="menu-container max-w-4xl mx-auto p-6 font-sans">
      {/* Header section with running total */}
      <header className="flex justify-between items-center border-b pb-4 mb-6">
        <div>
          <h1 className="text-3xl font-extrabold text-red-800">Addis Eats</h1>
          <p className="text-gray-600 text-sm">Authentic Ethiopian Cuisine</p>
        </div>
        <div className="bg-amber-100 border border-amber-300 px-4 py-2 rounded-lg text-right">
          <span className="text-xs uppercase font-bold text-amber-800 block">Running Total</span>
          <span className="text-2xl font-black text-amber-950">{orderTotal} ETB</span>
        </div>
      </header>

      {/* Category Filter Bar */}
      <CategoryBar
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {/* Dish List displaying filtered items */}
      <section className="menu my-6">
        <DishList dishes={filteredDishes} onAddToCart={handleAddToCart} />
      </section>

      {/* TeleBirr Delivery Form */}
      <OrderForm totalETB={orderTotal} />
    </div>
  );
}