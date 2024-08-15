import { useState } from "react";
import styles from "./ContactStyles.module.css";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  const [recaptchaToken, setRecaptchaToken] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    if (!recaptchaToken) {
      setStatus("Please complete the reCAPTCHA");
      return;
    }

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      "g-recaptcha-response": recaptchaToken,
    };

    try {
      await emailjs.send(
        "service_q3j2s52",
        "template_dmg33uq",
        templateParams,
        "mhLX5VDyClFAY4gHN"
      );
      setStatus("Email sent successfully!");
    } catch (error) {
      setStatus(`Failed to send email: ${error.text}`);
    }
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form onSubmit={handleSubmit}>
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
            onChange={handleChange}
            value={formData.name}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
            onChange={handleChange}
            value={formData.email}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required
            onChange={handleChange}
            value={formData.message}
          ></textarea>
        </div>
        <div className={styles.recaptcha}>
          <ReCAPTCHA
            sitekey="6Le7ghkqAAAAACMlPd4nG3GHtdRSicwewTix_Lgv" // Replace with your reCAPTCHA site key
            onChange={handleRecaptchaChange}
          />
        </div>
        <input className="hover btn" type="submit" value="Submit" />
      </form>
      {status && <p>{status}</p>}
    </section>
  );
};

export default Contact;
