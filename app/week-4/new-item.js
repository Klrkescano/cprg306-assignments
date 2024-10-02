'use client';

import { useState } from 'react';

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    quantity < 20 && setQuantity(quantity + 1);
  };
  const decrement = () => {
    quantity > 1 && setQuantity(quantity - 1);
  };
  return (
    <main className="flex justify-center w-full">
      <div className="p-2 m-4 bg-white text-white w-36">
        <div className="flex justify-between ">
          <span className="gap-y-2 text-black text-lg font-semi">
            {' '}
            {quantity}{' '}
          </span>
          <div>
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
    </main>
  );
}
