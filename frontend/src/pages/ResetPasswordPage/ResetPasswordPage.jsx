import "./ResetPasswordStyles.scss";

const ResetPasswordPage = () => {
  return (
    <div className="reset-page">
      <h1>Have you Forgotten Your Password ?</h1>
      <p>
        Enter your username or email address. You will receive a link to create
        a new password by email.
      </p>
      <form>
        <div>
          <input type="email" placeholder="Email" required />
        </div>
        <div>
          <button type="submit">Reset password</button>
        </div>
      </form>
    </div>
  );
};

export default ResetPasswordPage;
