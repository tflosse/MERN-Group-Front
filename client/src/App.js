import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
// import { SecureRoute, ImplicitCallback } from '@okta/okta-react';

// Auth Components
// import config from './app.config';
// import RegistrationForm from './authComponents/auth/RegistrationForm';
// import LoginPage from './authComponents/auth/LoginPage';
// import ProfilePage from './authComponents/auth/ProfilePage';
// import Navigation from './authComponents/shared/Navigation';

// Ideate Components
import Layout from './appComponents/shared/Layout';
import Dashboard from './appComponents/routes/Dashboard';
import Idea from './appComponents/routes/Idea';
import IdeaCreate from './appComponents/routes/IdeaCreate';

import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch> 
            <Layout>
                <Route path="/" exact component={Dashboard} />
                {/* <Route path="/login" render={() => <LoginPage baseUrl={config.url} />} />
                <Route path="/implicit/callback" component={ImplicitCallback} />
                <Route path="/register" component={RegistrationForm} /> */}
                <Route exact path='/ideas/:ideatitle' render={routerProps => <Idea {...routerProps}/>}/>
                <Route exact path='/ideacreate' render={routerProps => <IdeaCreate {...routerProps}/>}/>
                {/* <SecureRoute path="/profile" component={ProfilePage} /> */}
            </Layout>
        </Switch> 
        {/* <Navigation /> */}
      </div>
    );
  }
}