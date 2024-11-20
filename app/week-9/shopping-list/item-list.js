'use client';
import React, { useState } from 'react';
import Item from './item';

const ItemList = ({ items, onItemSelect }) => {
  const [sortBy, setSortBy] = useState('name');

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div className="flex flex-col">
      <div className="flex flex-row gap-2 items-center">
        <h1>Sort by:</h1>
        <button
          onClick={() => setSortBy('name')}
          className={`p-1 m-2 w-28 ${
            sortBy === 'name' ? 'bg-orange-500 text-white' : 'bg-orange-700'
          }`}
        >
          Name
        </button>
        <button
          onClick={() => setSortBy('category')}
          className={`p-1 m-2 w-28 ${
            sortBy === 'category' ? 'bg-orange-500 text-white' : 'bg-orange-700'
          }`}
        >
          Category
        </button>
      </div>
      <ul>
        {sortedItems.map((item) => (
          <Item
            onSelect={onItemSelect}
            item={item}
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
