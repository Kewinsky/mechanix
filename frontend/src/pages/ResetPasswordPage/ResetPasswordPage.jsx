import "./ResetPasswordStyles.scss";

const ResetPasswordPage = () => {
  return (
    <div className="reset-wrapper">
      <h1 className="reset-header">Have you Forgotten Your Password ?</h1>
      <p className="reset-paragraph">
        Enter your username or email address. You will receive a link to create
        a new password by email.
      </p>
      <form className="reset-form">
        <div>
          <input
            type="email"
            placeholder="Email"
            required
            className="reset-input"
          />
        </div>
        <div>
          <button type="submit" className="reset-submit">
            Reset password
          </button>
        </div>
      </form>
    </div>
  );
};

export default ResetPasswordPage;
