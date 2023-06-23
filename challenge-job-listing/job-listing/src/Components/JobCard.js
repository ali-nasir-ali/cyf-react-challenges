import React from "react";

function JobCard({ job }) {
  const publicURL = process.env.PUBLIC_URL;
  //   console.log({job.logo});
  return (
    <div className="job-card">
      <img src={`${publicURL}${job.logo}`} alt={`${job.company} logo`} />
      <div className="job-info">
        <div className="job-header">
          <h3>{job.company}</h3>
          {job.new && <span className="job-badge new">New!</span>}
          {job.featured && <span className="job-badge featured">Featured</span>}
        </div>
        <h2>{job.position}</h2>
        <div className="job-details">
          <span>{job.postedAt}</span>
          <span>{job.contract}</span>
          <span>{job.location}</span>
        </div>
      </div>
      <hr />
      <div className="job-requirements">
        {job.languages.map((language) => (
          <span key={language}>{language}</span>
        ))}
      </div>
    </div>
  );
}

export default JobCard;
