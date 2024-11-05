'use client';
import React from 'react';

const Item = ({ name, quantity, category, item, onSelect }) => {
  return (
    <li
      onClick={() => onSelect(item)}
      className="p-2 m-4 bg-slate-900 max-w-sm hover:bg-orange-800 cursor-pointer"
    >
      <h2 className="text-xl font-bold text-white">{name}</h2>
      <div className="txt-sm">
        Buy {quantity} in {category}
      </div>
    </li>
  );
};

export default Item;
