import React, { useState } from "react";

const AddItemForm = ({ onAddItem }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!name || !price || !quantity) {
      setError("All fields are required.");
      return;
    }

    if (isNaN(price) || isNaN(quantity) || price <= 0 || quantity <= 0) {
      setError("Price and quantity must be valid positive numbers.");
      return;
    }

    const newItem = {
      id: Date.now(),
      name,
      price: parseFloat(price),
      quantity: parseInt(quantity),
    };

    onAddItem(newItem);

    // Reset form
    setName("");
    setPrice("");
    setQuantity("");
    setError("");
  };

  return (
    <div className="bg-[url('/bg.jpg')] bg-cover bg-center h-screen">
    {
    <form onSubmit={handleSubmit} className="mb-6 bg-gray-50 p-4 rounded-md shadow">

      <h2 className="text-lg font-semibold mb-2">Add New Item</h2>

      {error && <p className="text-red-500 mb-2">{error}</p>}

      <input
        type="text"
        placeholder="Item Name"
        className="w-16 h-16 p-2 border rounded mb-2"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Price"
        className="w-16 h-16 p-2 border rounded mb-2"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <input
        type="number"
        placeholder="Quantity"
        className="w-16 h-16 p-2 border rounded mb-2"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />

      <br></br>

      <center>
      <button type="submit" className="focus:outline-none">
      <img
      src="data:image/png;base64,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"
      alt="Click me"
      className="w-full hover:scale-105 transition-transform duration-200"
      />
      </button>
      </center>

    </form>
    }
    </div>
  );
};

export default AddItemForm;
