import "./ContactStyles.scss";

const ContactPage = () => {
  return (
    <div className="contact-wrapper">
      <h1 className="contact-header">Contact Us</h1>
      <p className="contact-paragraph">
        You can contact us using the form available at the bottom of the page.
      </p>
      <form className="contact-form">
        <div className="contact-form-wrapper">
          <input
            type="text"
            placeholder="First Name"
            required
            className="contact-input"
          />
          <input
            type="text"
            placeholder="Last Name"
            required
            className="contact-input"
          />
          <input
            type="email"
            placeholder="Email"
            required
            className="contact-input"
          />
          <input
            type="text"
            placeholder="Subject"
            required
            className="contact-input"
          />
        </div>
        <textarea placeholder="Message" required className="contact-input" />
        <div>
          <button type="submit" className="contact-submit">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactPage;
