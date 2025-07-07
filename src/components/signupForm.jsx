import React from "react";
import "./signupForm.css";

function SignupForm() {
  return (
    <div className="Signupform">
      <div className="SignupFormDetail">
        <div className="name flex">
          <p>Name</p>
          <input type="text" />
        </div>
        <div className="mobile flex">
          <p>Mobile No.</p>
          <input type="text" />
        </div>
        <div className="userid flex">
          <p>User id</p>
          <input type="text" />
        </div>
        <div className="password flex">
          <p>password</p>
          <input type="text" />
        </div>
        <div className="address flex">
          <p>Address</p>
          <textarea name="address"></textarea>
        </div>
        <div className="pincode flex">
          <p>Pincode</p>
          <input type="text" />
        </div>
        <div className="button">
          <button>Create my Account</button>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;
