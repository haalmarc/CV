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
    </div>
  </div>
);

export default Infobox;
