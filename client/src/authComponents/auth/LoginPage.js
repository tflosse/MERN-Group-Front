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

const Login = (props) => {
  


  return (
      <>
    <h2>Log In</h2>
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
