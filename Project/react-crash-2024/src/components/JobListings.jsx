import React from "react";
// import jobs from "../jobs.json";
import JobListing from "./JobListing";
import Spinner from "./Spinner";

import { useState, useEffect } from "react";

const JobListings = ({ isHome = true }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch("/api/jobs");
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <>
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            {isHome ? "Recent Jobs" : "Browse Jobs"}
          </h2>

          {loading ? (
            <Spinner loading={loading}></Spinner>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {isHome == true
                ? jobs
                    .slice(0, 3)
                    .map((job, key) => <JobListing job={job} key={key} />)
                : jobs.map((job, key) => <JobListing job={job} key={key} />)}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default JobListings;
