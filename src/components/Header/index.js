import React from 'react';
import './index.css';
import Hamburgermenu from '../Hamburgermenu';

const Header = () => (
  <header>
    <i className="fa fa-bars faIcon"></i>
    <Hamburgermenu />
  </header>
);

export default Header;
