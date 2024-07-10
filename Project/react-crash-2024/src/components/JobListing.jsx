import React, { useState } from "react";
import { FaMapMarker } from "react-icons/fa";
import { Link } from "react-router-dom";

const JobListing = ({ job }) => {
  let [showFullDescription, setShowFullDescription] = useState(false);

  let description = job.description;
  let read_type = "Read More";

  if (!showFullDescription) {
    description = description.substring(0, 90) + "...";
  }

  function handleFunction() {
    showFullDescription == true
      ? setShowFullDescription(false)
      : setShowFullDescription(true);
  }

  return (
    <>
      <div className="bg-white rounded-xl shadow-md relative">
        <div className="p-4">
          <div className="mb-6">
            <div className="text-gray-600 my-2">{job.type}</div>
            <h3 className="text-xl font-bold">{job.title}</h3>
          </div>

          <div className="mb-5">{description}</div>

          <button
            className="text-indigo-500 mb-5 hover:text-indigo-600"
            onClick={handleFunction}
          >
            {showFullDescription == true ? "Read Less" : "Read More"}
          </button>

          <h3 className="text-indigo-500 mb-2">{job.salary}</h3>

          <div className="border border-gray-100 mb-5">{job.company.name}</div>

          <div className="flex flex-col lg:flex-row justify-between mb-4">
            <div className="text-orange-700 mb-3">
              {/* <i className="fa-solid fa-location-dot text-lg"></i> */}

              <FaMapMarker className="inline text-lg mb-1 mr-1" />

              {job.location}
            </div>
            <Link
              to={`/jobs/${job.id}`}
              className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobListing;
