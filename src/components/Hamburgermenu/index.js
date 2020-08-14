import React from 'react';
import './index.css';

function myFunction(x) {
  x.classNameList.toggle("change");
}

const Hamburgermenu = () => (
  <button className="container" onclick={myFunction(this)}>
    <div className="bar1"></div>
    <div className="bar2"></div>
    <div className="bar3"></div>
  </button>
);

/* https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_menu_icon_js */

export default Hamburgermenu;
