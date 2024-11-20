'use client';
import React, { useEffect, useState } from 'react';
import { useUserAuth } from '../_utils/auth-context';
import MealIdeas from '@/app/week-10/shopping-list/meal-ideas';
import ItemList from '@/app/week-10/shopping-list/item-list';
import NewItem from '@/app/week-10/shopping-list/new-item';
import { addItem, getItems } from '../_services/shopping-list-service';

function page() {
  const { user } = useUserAuth();

  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState('');

  const loadItems = async () => {
    try {
      if (user) {
        const items = await getItems(user.uid);
        setItems(items);
      }
    } catch (error) {
      console.error('Error loading items: ', error);
    }
  };

  useEffect(() => {
    loadItems();
  }, [user]);

  const handleItemSelect = (item) => {
    if (item.name) {
      const cleanedName = item.name
        .split(',')[0]
        .replace(/[^a-zA-Z ]/g, '')
        .trim();
      setSelectedItemName(cleanedName);
    }
  };
  const handleAddItem = (item) => {
    const id = addItem(user.uid, item);

    const newItem = {
      ...item,
      id,
    };

    setItems([...items, newItem]);
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
