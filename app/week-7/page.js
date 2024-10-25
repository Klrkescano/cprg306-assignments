'use client';
import React, { useState } from 'react';
import ItemList from '../week-7/item-list';
import NewItem from './new-item';
import itemsData from './items.json';

function page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItems) => {
    const itemWithId = {
      id: Math.random().toString(36).substring(2, 9),
      ...newItems,
    };

    setItems((prevItems) => [...prevItems, itemWithId]);
  };

  return (
    <div className=" flex flex-col  ">
      <h1 className="text-3xl font-bold m-2">Shopping List</h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </div>
  );
}

export default page;
