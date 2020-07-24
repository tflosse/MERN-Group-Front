import React, { useState } from "react";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import axios from "axios";
import { usersApi, ideasApi } from "../../apiConfig.js";
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
      />
    </>
  );
};

export default Login;
