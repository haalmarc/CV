import React from 'react';
import './index.css';

function myFunction(x) {
  x.classNameList.toggle("change");
}

const Hamburgermenu = () => (
  <div className="container" onclick={myFunction(this)}>
    <div className="bar1"></div>
    <div className="bar2"></div>
    <div className="bar3"></div>
  </div>
);

export default Hamburgermenu;
