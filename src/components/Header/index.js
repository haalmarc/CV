import React from 'react';
import './index.css';

const Header = () => (
  <header>
    <nav>
      <a href="#utdanning" className="navElement">Utdanning</a>
      <a href="#erfaring" className="navElement">Erfaring</a>
      <a href="#footer" className="navElement">Kontakt</a>
    </nav>
    {/* Add when hamburger functions <i className="fa fa-bars faIcon"></i> */}
  </header>
);

export default Header;
