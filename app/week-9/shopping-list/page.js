'use client';
import React, { useState } from 'react';

import NewItem from './new-item';
import itemsData from './items.json';
import MealIdeas from './meal-ideas';
import ItemList from './item-list';

function page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState('');

  const handleItemSelect = (item) => {
    if (item.name) {
      const cleanedName = item.name
        .split(',')[0]
        .replace(/[^a-zA-Z ]/g, '')
        .trim();
      setSelectedItemName(cleanedName);
    }
  };

  const handleAddItem = (newItems) => {
    const itemWithId = {
      id: Math.random().toString(36).substring(2, 9),
      ...newItems,
    };

    setItems((prevItems) => [...prevItems, itemWithId]);
  };

  return (
    <div className=" flex ">
      <div className="flex-1 max-w-sm m-2">
        <h1 className="text-3xl font-bold m-2">Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <div className="flex-1 max-w-sm m-2 mt-20">
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </div>
  );
}

export default page;
