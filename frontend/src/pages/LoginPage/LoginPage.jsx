import { useState } from "react";
import "./LoginStyles.scss";

const LoginPage = () => {
  const [activeOption, setActiveOption] = useState("signIn");

  const handleOptionChange = (option) => {
    setActiveOption(option);
  };

  return (
    <div className="login-page">
      <h1>My account</h1>
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
      <form>
        {activeOption === "register" ? (
          <>
            <div>
              <input type="text" placeholder="First Name" required />
            </div>
            <div>
              <input type="text" placeholder="Last Name" required />
            </div>
          </>
        ) : null}
        <div>
          <input type="email" placeholder="Email" required />
        </div>
        <div>
          <input type="password" placeholder="Password" required />
        </div>
        {activeOption === "register" ? (
          <input type="password" placeholder="Confirm password" required />
        ) : null}
        <div className="login-remember">
          <input type="checkbox" id="remember" name="remember" />
          <label for="remember">Remember Me</label>
        </div>
        <button type="submit" className="login-submit">
          Sign In
        </button>
        <div className="login-forgot">
          <a href="/resetpassword">Have you forgotten your password?</a>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
