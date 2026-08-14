import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./ServiceInquirySection.scss";

import inquiryImg from "../../../../assets/images/home/newimg.png";

const ServiceInquirySection = () => {
  const initialValues = {
    name: "",
    email: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
  });

  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <section className="service-inquiry">
      <div className="service-inquiry-container">

        {/* IMAGE */}
        <div className="inquiry-image">
          <img src={inquiryImg} alt="Inquiry Bottle" />
        </div>

        {/* FORM */}
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
  );
};

export default ServiceInquirySection;
