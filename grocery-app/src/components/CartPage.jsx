// src/components/CartPage.jsx
import React, { useEffect, useState } from "react";

const CartPage = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("cartItems");
    if (stored) setCart(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cart));
  }, [cart]);

  const updateQuantity = (name, delta) => {
    const updatedCart = cart.map((item) =>
      item.name === name
        ? { ...item, quantity: Math.max(item.quantity + delta, 1) }
        : item
    );
    setCart(updatedCart);
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="space-y-4">
          {cart.map((item, index) => (
            <li key={index} className="border p-4 rounded shadow">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p>₹{item.price} × {item.quantity} = ₹{item.price * item.quantity}</p>
                </div>
                <div className="space-x-2">
                  <button
                    onClick={() => updateQuantity(item.name, -1)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >−</button>
                  <button
                    onClick={() => updateQuantity(item.name, 1)}
                    className="bg-green-500 text-white px-2 py-1 rounded"
                  >+</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}

    <button
    onClick={() => {
        setCart([]);
        localStorage.removeItem("cartItems");
    }}
    className="mt-4 bg-gray-500 text-white px-3 py-1 rounded">Clear Cart</button>
    

      <div className="mt-6 font-bold text-xl">Total: ₹{total}</div>
    </div>


  );
};

export default CartPage;
