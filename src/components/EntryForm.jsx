import React from "react";
import "./EntryForm.css";
import { Link } from "react-router-dom";

function EntryForm() {
  return (
    <div className="loginform">
      <div className="Form">
        <div className="login input">
          <p>Already a member</p>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="signup input">
          <p>Become a member</p>
          <Link to="/signup">
            <button>Signup</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EntryForm;
