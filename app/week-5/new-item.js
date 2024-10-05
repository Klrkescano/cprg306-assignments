'use client';

import { useState } from 'react';

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState('');
  const [category, setCategory] = useState('Produce');

  function handleSubmit(e) {
    e.preventDefault();
    let item = {
      name,
      quantity,
      category,
    };

    console.log(item);
    alert(`Added item: ${name}, Quantity: ${quantity}, Category: ${category}`);
    setName(' ');
    setCategory('Produce');
  }

  const increment = (e) => {
    e.preventDefault();
    quantity < 20 && setQuantity(quantity + 1);
  };
  const decrement = (e) => {
    e.preventDefault();
    quantity > 1 && setQuantity(quantity - 1);
  };
  return (
    <main className="flex justify-center w-full">
      <form
        onSubmit={handleSubmit}
        className="p-2 m-4 bg-slate-900 max-w-sm w-full"
      >
        <div>
          <input
            placeholder="Item name"
            onChange={(e) => setName(e.target.value)}
            type="text"
            value={name}
            required
            className="w-full mt-1 border-2 border-gray-300  text-black p-2 rounded-lg font-sans"
          />
        </div>

        <div className="flex justify-between ">
          <div className="mt-3 mb-4 p-1 bg-white rounded-lg text-white w-36">
            <div className="flex justify-between">
              <span className="gap-y-2 text-black text-lg font-semi">
                {' '}
                {quantity}{' '}
              </span>
              <div className="p-1">
                <button
                  onClick={decrement}
                  className={`w-8 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 disabled:bg-gray-400 focus:ring-blue-400 focus:ring-opacity-75 ${
                    quantity === 1 ? 'opacity-50 cursor-not-allowed' : ''
                  }}`}
                  disabled={quantity === 1}
                >
                  -
                </button>

                <button
                  onClick={increment}
                  className={`w-8 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 disabled:bg-gray-400 focus:ring-blue-400 focus:ring-opacity-75 ml-2 ${
                    quantity === 20 ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  disabled={quantity === 20}
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <select
            onChange={(e) => setCategory(e.target.value)}
            className="mt-3 mb-3 border-2  border-gray-200 p-2 text-black rounded-lg font-sans  "
            value={category}
          >
            <option value="Produce">Produce</option>
            <option value="Dairy">Dairy</option>
            <option value="Bakery">Bakery</option>
            <option value="Meat">Meat</option>
            <option value="Frozen Foods">Frozen Foods</option>
            <option value="Canned Goods">Canned Goods</option>
            <option value="Dry Goods">Dry Goods</option>
            <option value="Beverages">Beverages</option>
            <option value="Snacks">Snacks</option>
            <option value="Household">Household</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full py-2  bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-blue-400 focus:ring-opacity-75"
        >
          +
        </button>
      </form>
    </main>
  );
}
