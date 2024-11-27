// Contact.js
import React, { useState } from "react";
import "./Contact.css"; // For styling the contact page

const Contact = () => {
  // State to manage form submission status
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Here you would typically send form data to a server
    // For example: sendDataToServer(formData);
  };

  return (
    <div className="contact-page">
      <div className="contact-form-ion">
        <h2>Get in Touch</h2>
        <p>Fill out the form below, and I will reach out to you shortly.</p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required></textarea>
          </div>

          <button type="submit" className="cta-button">
            Send Message
          </button>
        </form>

        {isSubmitted && (
          <div className="submission-message">
            <p>Thank you for reaching out! We will get back to you shortly.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
