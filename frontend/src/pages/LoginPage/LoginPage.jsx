import { useState } from "react";
import "./LoginStyles.scss";

const LoginPage = () => {
  const [activeOption, setActiveOption] = useState("signIn");

  const handleOptionChange = (option) => {
    setActiveOption(option);
  };

  return (
    <div className="login-wrapper">
      <h1 className="login-header">My Account</h1>
      <div className="toggle-switch">
        <div
          className={`toggle-option ${
            activeOption === "signIn" ? "active" : ""
          }`}
          onClick={() => handleOptionChange("signIn")}
        >
          Sign In
        </div>
        <div
          className={`toggle-option ${
            activeOption === "register" ? "active" : ""
          }`}
          onClick={() => handleOptionChange("register")}
        >
          Register
        </div>
      </div>
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
