import "./DetailsStyles.scss";

const DetailsTab = () => {
  return (
    <div className="details-tab">
      <div className="container">
        <h1>Account details</h1>
        <form>
          <input type="text" placeholder="First name" required />
          <input type="text" placeholder="Last name" required />
          <input
            type="text"
            placeholder="Display name"
            required
            className="margin-none"
          />
          <p className="details-paragraph">
            This will be how your name will be displayed in the account section
            and in reviews.
          </p>
          <input type="email" placeholder="Email address" required />
          <h3>Password change</h3>
          <input
            type="password"
            placeholder="Current password (leave blank to leave unchanged)"
            required
          />
          <input
            type="password"
            placeholder="New password (leave blank to leave unchanged)"
            required
          />
          <input type="password" placeholder="Confirm new password" required />
          <button type="submit">SAVE CHANGES</button>
        </form>
      </div>
    </div>
  );
};

export default DetailsTab;
