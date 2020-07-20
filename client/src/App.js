import React, {Component, useState, useEffect} from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import { SecureRoute, ImplicitCallback } from '@okta/okta-react';
import config from './app.config';

// Component imports
import Layout from './components/shared/Layout';
import AppLogin from './components/login/Login';
import Dashboard from './components/routes/Dashboard';
import Idea from './components/routes/Idea';
import IdeaCreate from './components/routes/IdeaCreate';

// Styles:
import './App.css';

function App() {

  return (
    <Switch> 
      <Layout>
        <Route exact path='/login' component={AppLogin} />
        <Route exact path='/' component={Dashboard} />
        <Route exact path='/ideas/:ideatitle' render={routerProps => <Idea {...routerProps}/>}/>
        <Route exact path='/ideacreate' render={routerProps => <IdeaCreate {...routerProps}/>}/>
      </Layout>
    </Switch> 
  )
  }
export default App;
