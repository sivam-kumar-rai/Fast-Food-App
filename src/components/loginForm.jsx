import React from "react";
import "./loginForm.css";

function LoginForm() {
  return (
    <div className="loginFormDetail">
      <div className="formDetail">
        <div className="enterDteails">
          <input className="input1" type="text" placeholder="user id" />
          <input className="input2" type="password" placeholder="password" />
        </div>
        <div className="recover">
          <a href="">forgot password</a>
          <a href="">forgot username</a>
        </div>
        <div className="button">
          <button>Login</button>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
