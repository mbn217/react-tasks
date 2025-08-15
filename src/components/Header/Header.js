import React from 'react';
import './Header.css';

const Header = ({ title }) => {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-title">{title}</h1>
      </div>
    </header>
  );
};

export default Header;
