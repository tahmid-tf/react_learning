import React from "react";
import JobListings from "../components/JobListings";
import { Outlet } from "react-router-dom";

const isHome = true;

const JobsPage = () => {
  return (
    <>
      <section className="bg-blue-50 px-4 py-6">
        <JobListings isHome="true"></JobListings>
      </section>
    </>
  );
};

export default JobsPage;
