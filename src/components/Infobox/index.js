import React from 'react';
import './index.css';

const Infobox = (props) => (
  <div className="infoBox">
    <div className="jobtitleBox">
      <h3>{props.job}</h3>
    </div>
    <div className="dateBox">
      {props.date}
    </div>
    <div className="jobDesc">
      {props.jobdesc}
      <p className="tech">{props.tech}</p>
      <p className="readmore">
        <a href={props.link} rel="noopener noreferrer" target="_blank">Les mer</a>
      </p>
    </div>
  </div>
);

export default Infobox;
