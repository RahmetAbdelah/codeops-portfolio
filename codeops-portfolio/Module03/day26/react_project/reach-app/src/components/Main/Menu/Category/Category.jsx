import React from 'react';
import './Category.css';

export default function Category({ categories, selectedCategory, onSelectCategory }) {
  return (
    <div className="category-bar">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelectCategory(cat)}
          className={`category-chip ${cat === selectedCategory ? 'active' : ''}`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}