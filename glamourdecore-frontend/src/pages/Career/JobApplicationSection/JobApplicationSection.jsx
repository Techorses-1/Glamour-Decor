import React from "react";
import "./JobApplicationSection.scss";

import career from "../../../assets/images/career/img1.png"

const JobApplicationSection = () => {
  return (
    <section className="job-application-section">
      <div className="job-application-container">

        {/* LEFT CONTENT */}
        <div className="job-application-content">
          <h2>
            JOB APPLICATION
            <span className="underline"></span>
          </h2>

          <p>
            The Application procedure of Glamour Decor is very simple &
            straightforward, employee feel free to learn more about that
            future job & explore the opportunities to grow, if you find a
            position for your interest & qualification.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="job-application-image">
          <img
            src={career}
            alt="Job Application"
          />
        </div>

      </div>
    </section>
  );
};

export default JobApplicationSection;
