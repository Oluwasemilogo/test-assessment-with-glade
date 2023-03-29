import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import data from "../data/items.json";

export function Homepage() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchTerm(event.target.value);
  };

  const filteredItems = data.filter((item) => {
    return item.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="container">
      <p className="search">Search Item</p>
      <input
        type="text"
        placeholder="Apple Watch, Samsung S21, Macbook Pro, ..."
        className="input"
        value={searchTerm}
        onChange={handleSearchInputChange}
      />
      <div className="items-content">
        {filteredItems.map((item) => (
          <Link
            to={`/details/${item.name}`}
            key={item.id}
            style={{
              color: "inherit",
              textDecoration: "inherit",
            }}
          >
            <div key={item.id} className="items-container">
              <div className="items-card">
                <div className="image-container">
                  <div>
                    <img src={item["img-url"]} alt="" className="image" />
                  </div>
                </div>
                <div className="items-details">
                  <h2 className="name">{item.name}</h2>
                  <p className="model">{item.model}</p>
                  <p className="price">${item.price}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
