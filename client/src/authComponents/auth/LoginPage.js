import React from "react";
import LoginForm from "./LoginForm";
import './LoginPage.css'

const Login = (props) => {
  


  return (
      <>
      <img className="Login-image" src="https://res.cloudinary.com/dgmpgmo60/image/upload/v1595024102/Untitled_2_tcxox8.jpg" alt="Ideate Logo"/>
      <LoginForm
      
        handleUsernameChange={props.handleUsernameChange}
        handlePasswordChange={props.handlePasswordChange}
        handleEmailChange={props.handleEmailChange}
        username={props.username}
        password={props.password}
        email={props.email}
        handleSubmit={props.handleSubmit}
        valid={props.valid}
      />
    </>
  );
};

export default Login;
