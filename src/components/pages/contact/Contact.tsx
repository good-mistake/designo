import React, { useState } from "react";
import { Header } from "../../header/index.ts";
import { Footer } from "../../footer/index.ts";
import { Button } from "../../reusable/button/index.ts";
import Cities from "../../reusable/cities/Cities.tsx";
import "./contact.scss";
const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    const isFormValid = Object.values(formData).every(
      (value) => value.trim() !== ""
    );

    if (isFormValid) {
      console.log("Form submitted successfully!", formData);
    } else {
      console.log("Please fill in all fields.");
    }
  };
  return (
    <div className="contactContainer">
      <Header />
      <main>
        <div className="formContainer">
          <div>
            <h1>Contact Us</h1>
            <p>
              Ready to take it to the next level? Let’s talk about your project
              or idea and find out how we can help your business grow. If you
              are looking for unique digital experiences that’s relatable to
              your users, drop us a line.
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className={isSubmitted ? "submitted" : ""}
          >
            <div
              className={`input-container ${
                isSubmitted && !formData.name ? "error" : ""
              }`}
            >
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
              />
              {isSubmitted && !formData.name && (
                <div className="error-message">
                  <span>Can’t be empty</span>
                  <img
                    src="../../assets/contact/desktop/icon-error.svg"
                    alt=""
                    className="error-icon"
                  />
                </div>
              )}
            </div>
            <div
              className={`input-container ${
                isSubmitted && !formData.email ? "error" : ""
              }`}
            >
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
              {isSubmitted && !formData.email && (
                <div className="error-message">
                  <span>Can’t be empty</span>
                  <img
                    src="../../assets/contact/desktop/icon-error.svg"
                    alt=""
                    className="error-icon"
                  />
                </div>
              )}
            </div>
            <div
              className={`input-container ${
                isSubmitted && !formData.number ? "error" : ""
              }`}
            >
              <input
                type="number"
                name="number"
                placeholder="Phone Number"
                value={formData.number}
                onChange={handleChange}
              />
              {isSubmitted && !formData.number && (
                <div className="error-message">
                  <span>Can’t be empty</span>
                  <img
                    src="../../assets/contact/desktop/icon-error.svg"
                    alt=""
                    className="error-icon"
                  />
                </div>
              )}
            </div>
            <div
              className={`input-container ${
                isSubmitted && !formData.message ? "error" : ""
              }`}
            >
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              {isSubmitted && !formData.message && (
                <div className="error-message">
                  <span>Can’t be empty</span>
                  <img
                    src="../../assets/contact/desktop/icon-error.svg"
                    alt=""
                    className="error-icon"
                  />
                </div>
              )}
            </div>
            <button type="submit" className="button dark">
              Submit
            </button>
          </form>
        </div>
        <Cities />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
