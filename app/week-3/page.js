import React from 'react';
import ItemList from './item-list';

function page() {
  return (
    <div className="container  p-2">
      <h2 className="text-3xl font-bold m-2">Shopping List</h2>
      <ItemList />
    </div>
  );
}

export default page;
