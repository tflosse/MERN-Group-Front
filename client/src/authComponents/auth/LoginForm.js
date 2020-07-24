import React, { Component, useState } from "react";
import {
  BrowserRouter as Router,
  withRouter,
  Redirect,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import "./LoginForm.css";
import Popup from "reactjs-popup";
const LoginForm = (props) => {
  const [display, setDisplay] = useState(false);

  
  return (
    <form className="NewIdeaForm" onSubmit={props.handleSubmit}>
      <h4>Log in</h4>
      <div className="Idea-Create-Div-box">
        <label>Email:</label>
        <textarea
          autosize
          className="Description-input"
          placeholder="email address"
          value={props.email}
          name="email"
          onChange={props.handleEmailChange}
        />
        <br />
        <label>Password: </label>
        <input
          className="Title-input"
          type="password"
          placeholder="Password"
          value={props.password}
          name="password"
          onChange={props.handlePasswordChange}
        />
        <br />
      </div>
      <div className="Idea-create-buttons">
        
        <button
          onClick={() => setDisplay(true)}
          className="submit"
          type="submit"
        >
          Submit
        </button>

        <Link to="/registration">
          <button className="submit">Sign Up</button>
        </Link>
        </div>
        
        {display ? `${props.valid}` : ""}
      
      
    </form>
  );
};
export default LoginForm;
