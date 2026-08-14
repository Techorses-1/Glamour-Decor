import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./ContactCtaSection.scss";
import { FiPhoneCall } from "react-icons/fi";

const ContactCtaSection = () => {
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
        <section className="about-cta">
            <div className="about-cta-container">

                {/* LEFT CONTENT */}
                <div className="about-cta-left">
                    <h2>
                        Search for your quality <br />
                        Glass bottle decoration <br />
                        work finished here...
                    </h2>

                    <p>
                        Glamour Decor ensures customized solutions for your Glass bottle
                        product to magnify visual appeal & branding character.
                    </p>

                    <div className="cta-phone">
                        <FiPhoneCall />
                        <a href="tel:7486008505">74860 08505</a>
                        <span>|</span>
                        <a href="tel:9054914347">90549 14347</a>
                    </div>
                </div>

                {/* RIGHT FORM */}
                <div className="about-cta-form">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}
                    >
                        <Form>
                            <div className="form-group">
                                <Field type="text" name="name" placeholder="Name" />
                                <ErrorMessage name="name" component="span" />
                            </div>

                            <div className="form-group">
                                <Field type="email" name="email" placeholder="Email" />
                                <ErrorMessage name="email" component="span" />
                            </div>

                            <div className="form-group">
                                <Field type="text" name="mobile" placeholder="Mobile No." />
                                <ErrorMessage name="mobile" component="span" />
                            </div>

                            <div className="form-group">
                                <Field as="textarea" name="message" placeholder="Your Message" />
                                <ErrorMessage name="message" component="span" />
                            </div>

                            <button type="submit">SEND MESSAGE</button>
                        </Form>
                    </Formik>
                </div>

            </div>
        </section>
    );
};

export default ContactCtaSection;
