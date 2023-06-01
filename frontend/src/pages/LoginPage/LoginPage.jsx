import { useState } from "react";
import "./LoginStyles.scss";

const LoginPage = () => {
  const [activeOption, setActiveOption] = useState("signIn");

  const handleOptionChange = (option) => {
    setActiveOption(option);
  };

  return (
    <div className="login-wrapper">
      <h1 className="login-header">My account</h1>
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
        {activeOption === "register" ? (
          <>
            <div>
              <input
                type="text"
                placeholder="First Name"
                required
                className="login-input input-margin"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Last Name"
                required
                className="login-input input-margin"
              />
            </div>
          </>
        ) : null}
        <div>
          <input
            type="email"
            placeholder="Email"
            required
            className="login-input input-margin"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            required
            className="login-input input-margin"
          />
        </div>
        {activeOption === "register" ? (
          <div>
            <input
              type="password"
              placeholder="Confirm password"
              required
              className="login-input"
            />
          </div>
        ) : null}
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
          <a href="/resetpassword">Have you forgotten your password?</a>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
