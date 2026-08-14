import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./JobApplicationForm.scss";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const JobApplicationForm = () => {
  const [fileName, setFileName] = useState("No file chosen");

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    jobTitle: "",
    resume: null,
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    mobile: Yup.string()
      .matches(/^[0-9]{10}$/, "Enter valid 10 digit number")
      .required("Required"),
    jobTitle: Yup.string().required("Required"),
    resume: Yup.mixed().required("Resume required"),
  });

  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    setFileName("No file chosen");
    resetForm();
  };

  // Social Media Links
  const socialLinks = {
    instagram: "https://www.instagram.com/glamourdecorlunavadodara/?hl=en",
    facebook: "https://www.facebook.com/profile.php?id=61550116506147",
    youtube: "https://www.youtube.com/channel/UC6g82a3mSpQk8MKiZKbcYmA",
    linkedin: "#", // Still coming
  };

  return (
    <section className="job-form-section">
      <div className="job-form-container">

        {/* LEFT FORM */}
        <div className="job-form-box">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ setFieldValue }) => (
              <Form>

                <Field type="text" name="firstName" placeholder="Your Name" />
                <ErrorMessage name="firstName" component="span" />

                <Field type="text" name="lastName" placeholder="Last Name" />
                <ErrorMessage name="lastName" component="span" />

                <Field type="email" name="email" placeholder="Email" />
                <ErrorMessage name="email" component="span" />

                <Field type="text" name="mobile" placeholder="Mobile No." />
                <ErrorMessage name="mobile" component="span" />

                <Field type="text" name="jobTitle" placeholder="Job Title" />
                <ErrorMessage name="jobTitle" component="span" />

                {/* FILE INPUT */}
                <div className="file-row">
                  <label className="file-upload">
                    Choose File
                    <input
                      type="file"
                      onChange={(e) => {
                        setFieldValue("resume", e.currentTarget.files[0]);
                        setFileName(
                          e.currentTarget.files[0]
                            ? e.currentTarget.files[0].name
                            : "No file chosen"
                        );
                      }}
                    />
                  </label>
                  <span className="file-name">{fileName}</span>
                </div>
                <ErrorMessage name="resume" component="span" />

                <button type="submit" className="apply-btn">
                  APPLY NOW
                </button>

              </Form>
            )}
          </Formik>
        </div>

        {/* RIGHT CONTENT */}
        <div className="job-form-content">
          <h2>
            JOB APPLICATION
            <span className="underline"></span>
          </h2>

          <p>
            The Application procedure of Glamour Decor is very simple &
            straightforward, employee feel free to learn more about that future
            job & explore the opportunities to grow, if you find a position for
            your interest & qualification.
          </p>

          <div className="job-socials">
            <a 
              href={socialLinks.instagram} 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaInstagram />
            </a>
            <a 
              href={socialLinks.facebook} 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaFacebookF />
            </a>
            <a 
              href={socialLinks.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaLinkedinIn />
            </a>
            <a 
              href={socialLinks.youtube} 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default JobApplicationForm;