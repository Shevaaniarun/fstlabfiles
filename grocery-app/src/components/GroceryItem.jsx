import React from "react";


const GroceryItem = ({ name, price, quantity, onAddToCart }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h2 className="text-xl font-bold">{name}</h2>
      <p>Price: ${price.toFixed(2)}</p>
      <p>Stock: {quantity}</p>
      <button
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md"
        onClick={() => onAddToCart({ name, price })}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default GroceryItem;
