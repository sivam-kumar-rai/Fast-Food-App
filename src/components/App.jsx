import React from "react";
import "./../components/App.css";
import ContentArea from "./contentArea";
import EntryForm from "./EntryForm";
import LoginForm from "./loginForm";
import SignupForm from "./signupForm";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ContentArea />}>
          <Route index element={<EntryForm />}></Route>
          <Route path="login" element={<LoginForm />}></Route>
          <Route path="signup" element={<SignupForm />}></Route>
        </Route>
      </Routes>
    </div>
  );
}
export default App;
