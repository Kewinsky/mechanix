import "./DetailsStyles.scss";

const DetailsTab = () => {
  return (
    <div className="details-wrapper">
      <div className="details-wrapper-container">
        <h1 className="details-header">Account details</h1>
        <form className="details-form">
          <input
            type="text"
            placeholder="First name"
            required
            className="details-input"
          />
          <input
            type="text"
            placeholder="Last name"
            required
            className="details-input"
          />
          <input
            type="text"
            placeholder="Display name"
            required
            className="details-input margin-none"
          />
          <p className="details-paragraph">
            This will be how your name will be displayed in the account section
            and in reviews.
          </p>
          <input
            type="email"
            placeholder="Email address"
            required
            className="details-input"
          />
          <h3>Password change</h3>
          <input
            type="password"
            placeholder="Current password (leave blank to leave unchanged)"
            required
            className="details-input"
          />
          <input
            type="password"
            placeholder="New password (leave blank to leave unchanged)"
            required
            className="details-input"
          />
          <input
            type="password"
            placeholder="Confirm new password"
            required
            className="details-input"
          />
          <button type="submit" className="details-submit">
            SAVE CHANGES
          </button>
        </form>
      </div>
    </div>
  );
};

export default DetailsTab;
