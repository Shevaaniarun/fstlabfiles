import React, { useEffect, useState } from "react";

const GroceryList = () => {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedItems = localStorage.getItem("groceryItems");
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    } else {
      fetch("/groceries.json")
        .then((res) => res.json())
        .then((data) => {
          setItems(data);
          localStorage.setItem("groceryItems", JSON.stringify(data));
        })
        .catch((err) => console.error("Error loading groceries:", err));
    }

    const storedCart = localStorage.getItem("cartItems");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const handleAddToCart = (item) => {
    const existing = cart.find((i) => i.name === item.name);
    let updatedCart;
    if (existing) {
      updatedCart = cart.map((i) =>
        i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
      );
    } else {
      updatedCart = [...cart, { ...item, quantity: 1 }];
    }
    setCart(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      {/* Header Section */}
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Grocery List</h2>

      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search items..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 p-3 w-80 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Grocery Items Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredItems.map((item, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-lg flex flex-col justify-between">
            <div>
              <p className="font-semibold text-lg text-gray-900">{item.name}</p>
              <p className="text-gray-600">₹{item.price} | Qty: {item.quantity}</p>
            </div>
            <button
              onClick={() => handleAddToCart(item)}
              className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-200"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GroceryList;
