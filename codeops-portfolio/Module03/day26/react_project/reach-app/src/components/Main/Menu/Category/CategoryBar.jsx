import React from 'react';

export default function CategoryBar({ categories, selectedCategory, onSelectCategory }) {
  return (
    <div className="flex gap-2 my-4">
      {categories.map((cat) => {
        const isActive = cat === selectedCategory;
        return (
          <button
            key={cat}
            onClick={() => onSelectCategory(cat)}
            className={`px-4 py-2 rounded-full font-medium transition ${
              isActive
                ? "bg-red-700 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}