import React from "react";
import JobCard from "./JobCard";
import jobsData from "../Data/data.json";

function JobList() {
  return (
    <div className="job-list">
      {jobsData.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}

export default JobList;
