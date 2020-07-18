import React, {useState, useEffect}from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom'
import Layout from './routes/Layout'
import Dashboard from './routes/Dashboard'

function App() {

  return (
    <Layout>
      <Route path='/' component={Dashboard} />
    </Layout>
  )
  }
export default App;
