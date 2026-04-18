import React from "react";
import { useState } from "react";

export default function App() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const addItem = () => {
    const value = input.trim();
    if(value === "") {
      setError("Item name cannot be empty");
      return;
    }
    const exists = list.some(
      (item) => item.name.toLowerCase() === value.toLowerCase()
    );
    if(exists) {
      setError("Item already exists in the list");
      return;
    }
    const newItem = {
      name: value,
      purchased: false
    };
    setList([...list, newItem]);
    setInput("");
    setError("");
  };
  const deleteItem = (index) => {
    const newList = list.filter((_, i) => i !== index);
    setList(newList);
  };
  const toggleStatus = (index) => {
    const newList = [...list];
    newList[index].purchased = !newList[index].purchased;
    setList(newList);
  };
  return (
    <div style={{textAlign : "center"}}>
      <h2>Grocery List Manager</h2>
      <input 
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter item"
      />
      <button onClick={addItem}>Add</button>
      <p style={{color : "red"}}>{error}</p>
      <ul>
        {list.map((item, index) => (
          <li key = {index}>
            {item.name} - {item.purchased ? "Purchased" : "Not Purchased"}
            <button onClick={() => toggleStatus(index)}>
              {item.purchased ? "Mark Not Purchased" : "Mark Purchased"}
            </button>
            <button onClick={() => deleteItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}