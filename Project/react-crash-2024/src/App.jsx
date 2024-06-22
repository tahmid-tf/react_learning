import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import Card from "./components/Card";
import JobListings from "./components/JobListings";
import ViewAllJobs from "./components/ViewAllJobs";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero title="Test Title" subtitle="This is the subtitle" />

      {/* <!-- Developers and Employers --> */}

      <HomeCards></HomeCards>

      {/* <!-- Browse Jobs --> */}

      <JobListings></JobListings>

      {/* <!-- View ALl Jobs --> */}

      <ViewAllJobs />
    </>
  );
};

export default App;
