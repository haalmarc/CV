import React from 'react';
import './index.css';

class Header extends React.Component {
  render () {
    return (
      <header>
        <nav>
          <label htmlFor="hamburger" className="hamburger">&#9776;</label>
          <input type="checkbox" id="hamburger"/>
          <a href="#erfaring" className="navElement">Erfaring</a>
          <a href="#utdanning" className="navElement">Utdanning</a>
          <a href="#prosjekter" className="navElement">Prosjekter</a>
        </nav>
      </header>
    )
  }
} 

export default Header;
