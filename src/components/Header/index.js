import React from 'react';
import './index.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hamburger: "inactive" }
  }

  /* Veksle mellom states når knapp trykkes */
  toggleMenu = () => {
    if (this.state.hamburger === "inactive") {
      this.setState({hamburger: "active"})
    } if (this.state.hamburger === "active") {
      this.setState({hamburger: "inactive"})
    }
  }


  render () {
    return (
      <header>
        <nav className={this.state.hamburger}>
          <a href="#utdanning" className="navElement">Utdanning</a>
          <a href="#erfaring" className="navElement">Erfaring</a>
          <a href="#footer" className="navElement">Kontakt</a>
        </nav>
        <button onClick={this.toggleMenu}><i className="fa fa-bars faIcon"></i></button>
      </header>
    )
  }
} 

export default Header;
