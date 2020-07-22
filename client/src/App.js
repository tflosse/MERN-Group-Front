import React, { Component, useState } from 'react';
import {
  BrowserRouter as Router,
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
import LoginPage from './authComponents/auth/LoginPage';
import RegistrationPage from './authComponents/auth/RegistrationPage';
// import ProfilePage from './authComponents/auth/ProfilePage';
// import Navigation from './authComponents/shared/Navigation';

// Ideate Components
import Layout from './appComponents/shared/Layout';
import Dashboard from './appComponents/routes/Dashboard';
import Idea from './appComponents/routes/Idea';
import IdeaCreate from './appComponents/routes/IdeaCreate';

import './App.css';

const App = props => {
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
      <div className="App">
        <Switch> 
            <Layout username={username}>
                <Route path="/" exact render={routerProps=> <Dashboard username={username} />} />
                <Route path="/login" render={routerProps=> <LoginPage username={username} password={password} email={email} handleEmailChange={handleEmailChange} handlePasswordChange={handlePasswordChange} handleSubmit={handleSubmit} handleUsernameChange={handleUsernameChange}/>}  />
                <Route path="/registration" component={RegistrationPage} />
                <Route exact path='/ideas/:ideatitle' render={routerProps => <Idea {...routerProps}/>}/>
                <Route exact path='/ideacreate' render={routerProps => <IdeaCreate {...routerProps}/>}/>
                {/* <SecureRoute path="/profile" component={ProfilePage} /> */}
            </Layout>
        </Switch> 
        {/* <Navigation /> */}
      </div>
    );
  
}

export default App