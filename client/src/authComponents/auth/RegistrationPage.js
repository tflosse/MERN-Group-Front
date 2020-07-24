import React from "react";
import RegistrationForm from "./RegistrationForm";
const Login = (props) => {
  return (
      <>
    <h2 className="log-titles">Sign Up</h2>
      <RegistrationForm
        handleUsernameChange={props.handleUsernameChange}
        handlePasswordChange={props.handlePasswordChange}
        handleEmailChange={props.handleEmailChange}
        username={props.username}
        password={props.password}
        email={props.email}
        handleSubmit={props.handleSubmit}
      />
    </>
  );
};
export default Login;