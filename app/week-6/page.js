import React from 'react';
import ItemList from '../week-6/item-list';

function page() {
  return (
    <div className="m-4">
      <h1 className="text-3xl font-bold m-2">Shopping List</h1>
      <ItemList />
    </div>
  );
}

export default page;
