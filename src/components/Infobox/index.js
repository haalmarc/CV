import React from 'react';
import './index.css';

const Infobox = ({ job, date, jobdesc, tech, link, img }) => (
  <div className="infoBox">
    {img ? (<div>
      <img src={img} alt="spark" />
    </div>) : ''}
    <div className="jobtitleBox">
      <h3>{job}</h3>
      {date ? (
      <p className="dateBox">
      {date}
    </p>) : ""}
    </div>
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
