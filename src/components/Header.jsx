import React from 'react';
import { FaUserAlt } from "react-icons/fa";
import "./Header.css"; // CSS faylini import qilish

const Header = () => {
  return (
    <header className="header">
      <div className="logo">MyApp</div>

      <div className="header-panel">
        <form className="search-form">
          <input 
            type="text" 
            className="search-input" 
            placeholder="Search..." 
          />
        </form>
        <select className="header-select">
          <option value="uzb">UZB</option>
          <option value="eng">ENG</option>
          <option value="rus">RUS</option>
        </select>

        <div className="admin-icon" aria-label="Admin icon">
          <FaUserAlt />
        </div>

        <button className="admin-button">Admin Panel</button>
      </div>
    </header>
  );
};

export default Header;