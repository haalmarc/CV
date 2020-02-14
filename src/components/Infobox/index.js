import React from 'react';
import './index.css';

const Infobox = ({ job, date, jobdesc, tech, link }) => (
  <div className="infoBox">
    <div className="jobtitleBox">
      <h3>{job}</h3>
    </div>
    {date ? (
      <div className="dateBox">
      {date}
    </div>) : ""}
    <div className="jobDesc">
      {jobdesc}
      <p className="tech">{tech}</p>
      <p className="readmore">
        <a href={link} rel="noopener noreferrer" target="_blank">Les mer</a>
      </p>
    </div>
  </div>
);

export default Infobox;
