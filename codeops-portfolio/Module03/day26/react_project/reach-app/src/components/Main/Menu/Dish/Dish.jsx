import React, { useState } from 'react';

export function Dish({ item, onAddToCart }) {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount((prevCount) => prevCount + 1);
    onAddToCart(item.price);
  };

  return (
    <div className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition flex justify-between items-center my-2">
      <div>
        <div className="flex items-center gap-2">
          <h3 className="font-bold text-lg text-gray-800">{item.name}</h3>
          {item.spicy && (
            <span className="bg-red-100 text-red-600 text-xs px-2 py-0.5 rounded-full font-semibold">
              🌶️ Spicy
            </span>
          )}
        </div>
        <p className="text-gray-600 font-medium mt-1">{item.price} ETB</p>
      </div>

      <div className="flex items-center gap-3">
        {count > 0 && (
          <span className="text-sm font-semibold bg-gray-100 px-2 py-1 rounded text-gray-700">
            x{count}
          </span>
        )}
        <button
          onClick={handleAdd}
          className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-4 py-1.5 rounded-md transition cursor-pointer"
        >
          Add
        </button>
      </div>
    </div>
  );
}

export function DishList({ dishes, onAddToCart }) {
  if (dishes.length === 0) {
    return <p className="text-gray-500 my-6 text-center">No dishes found in this category.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
      {dishes.map((dish) => (
        <Dish key={dish.id} item={dish} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
}