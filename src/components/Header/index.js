import React from 'react';
import './index.css';

class Header extends React.Component {
  render () {
    return (
      <header>
        <nav>
          <a href="#erfaring" className="navElement">Erfaring</a>
          <a href="#utdanning" className="navElement">Utdanning</a>
          <a href="#prosjekter" className="navElement">Prosjekter</a>
          <a href="#footer" className="navElement">Kontakt</a>
        </nav>
      </header>
    )
  }
} 

export default Header;
