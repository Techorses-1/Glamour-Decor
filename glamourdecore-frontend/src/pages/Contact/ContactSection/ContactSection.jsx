import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import "./ContactSection.scss";

const ContactSection = () => {
  const socialLinks = {
    instagram: "https://www.instagram.com/glamourdecorlunavadodara/?hl=en",
    facebook: "https://www.facebook.com/profile.php?id=61550116506147",
    youtube: "https://www.youtube.com/channel/UC6g82a3mSpQk8MKiZKbcYmA",
    linkedin: "#", // Still coming
  };

  const initialValues = {
    name: "",
    email: "",
    mobile: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    mobile: Yup.string()
      .matches(/^[0-9]{10}$/, "Enter valid 10 digit number")
      .required("Mobile number is required"),
    message: Yup.string().required("Message is required"),
  });

  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <section className="contact-cta-section">
      <div className="contact-cta-container">

        {/* LEFT CONTENT */}
        <div className="cta-left">
          <div className="info-block">
            <h4>Website</h4>
            <a
              href="https://www.theglamourdecor.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.theglamourdecor.com
            </a>
          </div>

          <div className="info-block">
            <h4>Email</h4>
            <a href="mailto:mahesh@glamourdecor.in">
              mahesh@glamourdecor.in
            </a>
            <a href="mailto:mahesh.glamourdecor@gmail.com">
              mahesh.glamourdecor@gmail.com
            </a>
          </div>

          <div className="info-block">
            <h4>Phone</h4>
            <a href="tel:+919952186877">+91 9952186877</a>
            <a href="tel:+919384370697">+91 9384370697</a>
          </div>

          <div className="info-block">
            <h4>Head Office</h4>
            <a
              href="https://www.google.com/maps/search/?api=1&query=741+Luna+Rd+Padra+Vadodara+Gujarat+391440"
              target="_blank"
              rel="noopener noreferrer"
            >
              741, Luna Rd, Taluko: Padra,<br />
              District: Vadodara, 391440,<br />
              Gujarat.
            </a>
          </div>

          <div className="social-icons">
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href={socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href={socialLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="cta-right">
          <h2>IF YOU HAVE QUESTIONS<br />PLEASE CONTACT US</h2>
          <p>Fill fields and find approximate your repair!</p>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form>
              <Field type="text" name="name" placeholder="Name" />
              <ErrorMessage name="name" component="span" />

              <Field type="email" name="email" placeholder="Email" />
              <ErrorMessage name="email" component="span" />

              <Field type="text" name="mobile" placeholder="Mobile No." />
              <ErrorMessage name="mobile" component="span" />

              <Field as="textarea" name="message" placeholder="Your Message" />
              <ErrorMessage name="message" component="span" />

              <button type="submit">SEND MESSAGE</button>
            </Form>
          </Formik>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;