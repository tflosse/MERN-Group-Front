import React, {useState, useEffect}from 'react';
import './App.css';
import {Route, Link, Switch} from 'react-router-dom'
import Layout from './routes/Layout'
import Dashboard from './routes/Dashboard'
import Idea from './routes/Idea'
import IdeaCreate from './routes/IdeaCreate'
function App() {

  return (
    <Switch> 
    <Layout>
      <Route exact path='/' component={Dashboard} />
      <Route exact path='/ideas/:ideatitle' render={routerProps => <Idea {...routerProps}/>}/>
      <Route exact path='/ideacreate' render={routerProps => <IdeaCreate {...routerProps}/>}/>
    </Layout>
    </Switch> 
  )
  }
export default App;
