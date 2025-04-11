// src/App.jsx
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import GroceryList from "./components/GroceryList";
import Cart from "./components/CartPage";
import AddItemForm from "./components/AddItemForm";

const App = () => {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <nav className="flex gap-15 mb-6 border-b pb-2">
        <Link to="/" className="text-blue-600 hover:underline">Grocery List</Link>
        <Link to="/cart" className="text-blue-600 hover:underline">Cart</Link>
        <Link to="/add" className="text-blue-600 hover:underline">Add New Item</Link>
      </nav>

      <Routes>
        <Route path="/" element={<GroceryList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/add" element={<AddItemFormPage />} />
      </Routes>
    </div>
  );
};

// Wrap AddItemForm with a page component for routing
const AddItemFormPage = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Add a New Grocery Item</h2>
      <AddItemForm
        onAddItem={(newItem) => {
          const prev = JSON.parse(localStorage.getItem("groceryItems") || "[]");
          const updated = [...prev, newItem];
          localStorage.setItem("groceryItems", JSON.stringify(updated));
          alert("Item added!");
        }}
      />
    </div>
  );
};

export default App;
