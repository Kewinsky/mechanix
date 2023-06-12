import "./ContactStyles.scss";

const ContactPage = () => {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>
        You can contact us using the form available at the bottom of the page.
      </p>
      <form>
        <div className="contact-form">
          <input type="text" placeholder="First Name *" required />
          <input type="text" placeholder="Last Name *" required />
          <input type="email" placeholder="Email *" required />
          <input type="text" placeholder="Subject *" required />
        </div>
        <textarea placeholder="Message *" required />
        <button type="submit" className="contact-submit">
          SEND
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
