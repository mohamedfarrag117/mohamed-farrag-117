import { useState } from "react";
import styles from "./ContactStyles.module.css";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
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

  const { ref, inView } = useInView({
    threshold: 0.01,
    triggerOnce: true,
  });

  return (
    <motion.section
      id="contact"
      className={styles.container}
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 100 : 0 }}
      transition={{ duration: 2.5 }}
    >
      <h1 className="sectionTitle">Contact</h1>
      <form onSubmit={handleSubmit}>
        <motion.div
          className="formGroup"
          ref={ref}
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: inView ? 0 : 200, opacity: 100 }}
          transition={{ duration: 2.5 }}
        >
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
        </motion.div>
        <motion.div
          className="formGroup"
          ref={ref}
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: inView ? 0 : -200, opacity: 100 }}
          transition={{ duration: 2.5 }}
        >
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
        </motion.div>
        <motion.div
          className="formGroup"
          ref={ref}
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: inView ? 0 : 200, opacity: 100 }}
          transition={{ duration: 2.5 }}
        >
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
        </motion.div>
        <div className={styles.recaptcha}>
          <ReCAPTCHA
            sitekey="6LdtlicqAAAAANmXd8J5MaQNk2F1uiGRJTDzCX6k" // Replace with your reCAPTCHA site key
            onChange={handleRecaptchaChange}
          />
        </div>
        <input className="hover btn" type="submit" value="Submit" />
      </form>
      {status && <p>{status}</p>}
    </motion.section>
  );
};

export default Contact;
