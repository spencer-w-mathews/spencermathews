import { useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

const Contact = ({ isDarkMode }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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
      setIsSubmitted(true);
    } catch (e) {
      console.log(e);
      setIsSubmitted(false);
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-intro">
        <p className="eyebrow">Let’s collaborate</p>
        <h2>Tell me about the product you want to bring to life</h2>
        <p className="contact-lead">
          Whether you need a polished interface, a scalable backend, or a
          partner to shape an MVP, I respond within one business day.
        </p>
        <div className="contact-highlights">
          <span>New builds & redesigns</span>
          <span>Design system implementation</span>
          <span>Performance & reliability audits</span>
        </div>
      </div>
      <div className={`contact-form-ion ${isDarkMode ? "dark" : "light"}`}>
        <h2>Start the conversation</h2>
        <p>Share a few details and I'll be in touch shortly.</p>

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

        <div
          className={`submission-message ${
            isSubmitted ? "visible" : "hidden"
          }`}
        >
          {isSubmitted
            ? "Thanks for reaching out — your note is on its way."
            : "You’ll hear back within one business day."}
        </div>
      </div>
    </div>
  );
};

export default Contact;
