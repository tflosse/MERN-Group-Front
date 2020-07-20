import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { SecureRoute, ImplicitCallback } from '@okta/okta-react';
import config from './app.config';
import './App.css';

// Okta Components"
import Navigation from './OktaNav';
import HomePage from './OktaHome';
import RegistrationForm from './auth/RegistrationForm';
import LoginPage from './auth/LoginPage';
import ProfilePage from './auth/ProfilePage';

export default class AppLogin extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <Route path="/login" render={() => <LoginPage baseUrl={config.url} />} />
          <Route path="/implicit/callback" component={ImplicitCallback} />
          <Route path="/register" component={RegistrationForm} />
          <SecureRoute path="/profile" component={ProfilePage} />
        </main>
        <Navigation />
      </div>
    );
  }
}