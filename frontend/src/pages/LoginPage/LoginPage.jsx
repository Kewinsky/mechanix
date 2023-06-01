import "./LoginStyles.scss";

const LoginPage = () => {
  return (
    <div className="login-wrapper">
      <h1 className="login-header">My Account</h1>
      <form className="login-form">
        <div>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
            className="login-input email"
          />
        </div>
        <div>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            required
            className="login-input"
          />
        </div>
        <div className="login-remember">
          <input
            type="checkbox"
            id="remember"
            name="remember"
            className="checkbox"
          />
          <label for="remember">Remember Me</label>
        </div>
        <div>
          <button type="submit" className="login-submit">
            Sign In
          </button>
        </div>
        <div className="login-forgot">
          <a href="/">Have you forgotten your password?</a>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
