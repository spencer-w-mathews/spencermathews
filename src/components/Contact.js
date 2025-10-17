// Contact.js
import { useState } from "react";
import "./Contact.css"; // For styling the contact page
import emailjs from "@emailjs/browser";

const Contact = ({ isDarkMode }) => {
  // State to manage form submission status
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const templateParams = {
        name,
        email,
        message,
      };
      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_PUBLIC_KEY
      );
      setName("");
      setEmail("");
      setMessage("");
      alert("message sent successfully");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="contact-page">
      <div className={`contact-form-ion ${isDarkMode ? "dark" : "light"}`}>
        <h2>Get in Touch</h2>
        <p>Fill out the form below, and I will reach out to you shortly.</p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          <button
            type="submit"
            className={`cta-button ${isDarkMode ? "dark" : "light"}`}
          >
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
