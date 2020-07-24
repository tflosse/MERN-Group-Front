import React, { Component, useState } from "react";
import {
  BrowserRouter as Router,
  withRouter,
  Redirect,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import axios from "axios";
import { usersApi, ideasApi } from "./apiConfig.js";

// import { SecureRoute, ImplicitCallback } from '@okta/okta-react';

// Auth Components
// import config from './app.config';
// import RegistrationForm from './authComponents/auth/RegistrationForm';
import LoginPage from "./authComponents/auth/LoginPage";
import RegistrationPage from "./authComponents/auth/RegistrationPage";
// import ProfilePage from './authComponents/auth/ProfilePage';
// import Navigation from './authComponents/shared/Navigation';

// Ideate Components
import Layout from "./appComponents/shared/Layout";
import About from "./appComponents/shared/About";
import Dashboard from "./appComponents/routes/Dashboard";
import Idea from "./appComponents/routes/Idea";
import IdeaCreate from "./appComponents/routes/IdeaCreate";

import "./App.css";

const App = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useStickyState("", "updatedUser");
  const [temp, setTemp] = useState("");
  function useStickyState(defaultValue, key) {
    const [value, setValue] = React.useState(() => {
      const stickyValue = window.localStorage.getItem(key);
      return stickyValue !== null ? JSON.parse(stickyValue) : defaultValue;
    });
    React.useEffect(() => {
      window.localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
    return [value, setValue];
  }
  const handleUsernameChange = (event) => {
    event.preventDefault();
    setUsername(event.target.value);
    setTemp(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleLogin = async (event) => {
    event.preventDefault();
    
    console.log("handleSubmit");
    axios({
      url: `https://cors-anywhere.herokuapp.com/https://cryptic-retreat-37123.herokuapp.com/users/login`,
      method: "POST",
      data: {
        username: `${username}`,
        password: `${password}`,
        email: `${email}`
      },
    })
    
      .then((res) => {
        if (res) {
          console.log(res)
          console.log(res.data.user.name)
          setName(res.data.user.name)
          props.history.push("/home");
          setPassword("");
          setEmail("")
        }
      })
      .catch(console.log('invalid login info'));
  };
  const handleRegistration = async (event) => {
    event.preventDefault();
    
    console.log("handleSubmit");
    axios({
      url: `https://cors-anywhere.herokuapp.com/https://cryptic-retreat-37123.herokuapp.com/users`,
      method: "POST",
      data: {
        name: `${username}`,
        password: `${password}`,
        email: `${email}`
      },
    })
    
      .then((res) => {
        if (res) {
          console.log(res)
          console.log(res.data.user.name)
          setName(res.data.user.name)
          
          props.history.push("/home");
          setPassword("");
          setEmail("")
        }
      })
      .catch(console.error);
  };
  return (
    <div className="App">
      <Switch>
      <Route
            path="/" exact
            render={(routerProps) => (
              <LoginPage
                {...routerProps}
                username={username}
                password={password}
                email={email}
                handleEmailChange={handleEmailChange}
                handlePasswordChange={handlePasswordChange}
                handleSubmit={handleLogin}
                handleUsernameChange={handleUsernameChange}
              />
            )}
          />
          <Route
            path="/registration"
            render={(routerProps) => (
              <RegistrationPage
                {...routerProps}
                username={username}
                password={password}
                email={email}
                handleEmailChange={handleEmailChange}
                handlePasswordChange={handlePasswordChange}
                handleSubmit={handleRegistration}
                handleUsernameChange={handleUsernameChange}
              />
            )}
          />
        <Layout username={name}>
          <Route
            path="/home"
            exact
            render={(routerProps) => <Dashboard username={name} />}
          />
          <Route
            path="/about"
            exact
            render={(routerProps) => <About {...routerProps} />}
          />
          
          <Route
            exact
            path="/ideas/:ideatitle"
            render={(routerProps) => <Idea {...routerProps} username={name}/>}
          />
          <Route
            exact
            path="/ideacreate"
            render={(routerProps) => <IdeaCreate {...routerProps} username={name} />}
          />
          {/* <SecureRoute path="/profile" component={ProfilePage} /> */}
        </Layout>
      </Switch>
      {/* <Navigation /> */}
    </div>
  );
};

const AppWithRouter = withRouter(App);
export default AppWithRouter;


