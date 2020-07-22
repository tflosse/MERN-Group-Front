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
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    console.log(username, password, email);
    axios({
      url: `${usersApi}/login`,
      method: "POST",
      data: {
        username: `${username}`,
        password: `${password}`,
        email: `${email}`,
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch(console.error);
  };

  return (
      <>
    <h2>Sign Up</h2>
      <RegistrationForm
        handleUsernameChange={handleUsernameChange}
        handlePasswordChange={handlePasswordChange}
        handleEmailChange={handleEmailChange}
        username={username}
        password={password}
        email={email}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default Login;
