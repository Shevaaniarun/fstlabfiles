import React from "react";

const Cart = ({ cart, setCart }) => {
  // Function to update quantity
  const updateQuantity = (name, change) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.name === name ? { ...item, quantity: item.quantity + change } : item
        )
        .filter((item) => item.quantity > 0) // Remove if quantity is 0
    );
  };

  // Calculate total price
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="mt-8 p-4 border rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2">Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.name} className="flex justify-between p-2 border-b">
              <span>{item.name} (x{item.quantity})</span>
              <div>
                <button
                  className="px-2 py-1 bg-gray-300 rounded-md mx-1"
                  onClick={() => updateQuantity(item.name, -1)}
                >
                  -
                </button>
                <button
                  className="px-2 py-1 bg-gray-300 rounded-md mx-1"
                  onClick={() => updateQuantity(item.name, 1)}
                >
                  +
                </button>
              </div>
            </div>
          ))}
          <h3 className="text-lg font-bold mt-4">Total: ${totalPrice.toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
