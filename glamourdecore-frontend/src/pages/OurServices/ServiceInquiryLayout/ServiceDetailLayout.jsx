import React, { useEffect, useRef, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./ServiceDetailLayout.scss";

const ServiceDetailLayout = ({
  heroSubHeading,
  heroHeading,
  heroImage,

  contentHeading,
  contentParagraphs, // array (2 or 3)

  inquiryImage,
  inquiryApi,
}) => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const initialValues = {
    name: "",
    email: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
  });

  const onSubmit = async (values, { resetForm }) => {
    console.log("POST TO API:", inquiryApi);
    console.log(values);
    // later → axios.post(inquiryApi, values)
    resetForm();
  };

  return (
    <>
      {/* ================= SERVICE HERO ================= */}
      <section className="coating-service" ref={sectionRef}>
        <div className={`coating-hero-heading ${inView ? "animate" : ""}`}>
          <span className="small-title">{heroSubHeading}</span>

          <h2>
            {heroHeading}
            <span className="underline"></span>
          </h2>
        </div>

        <div className="coating-full-image">
          <img src={heroImage} alt={heroHeading} />
        </div>

        <div className={`coating-content ${inView ? "animate" : ""}`}>
          <h3>{contentHeading}</h3>

          {contentParagraphs.map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </div>
      </section>

      {/* ================= INQUIRY SECTION ================= */}
      <section className="service-inquiry">
        <div className="service-inquiry-container">

          <div className="inquiry-image">
            <img src={inquiryImage} alt="Inquiry Bottle" />
          </div>

          <div className="inquiry-form">
            <h2>
              Make Inquiry for services <br /> you are looking for.
            </h2>

            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              <Form>
                <div className="field-group">
                  <Field name="name" placeholder="Name" />
                  <ErrorMessage name="name" component="span" />
                </div>

                <div className="field-group">
                  <Field name="email" placeholder="Email" />
                  <ErrorMessage name="email" component="span" />
                </div>

                <button type="submit">INQUIRY NOW</button>
              </Form>
            </Formik>
          </div>

        </div>
      </section>
    </>
  );
};

export default ServiceDetailLayout;
