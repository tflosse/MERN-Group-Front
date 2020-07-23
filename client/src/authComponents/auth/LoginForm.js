import React from "react";
import {
  BrowserRouter as Router,
  withRouter,
  Redirect,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import "./LoginForm.css";
const LoginForm = (props) => {
  // console.log('IdeaForm', idea)
  return (
    <form className="NewIdeaForm" onSubmit={props.handleSubmit} >
      <div className="Idea-Create-Div-box">
        <label>Username: </label>
        <input
          className="Title-input"
          placeholder="Username"
          value={props.username}
          name="username"
          onChange={props.handleUsernameChange}
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
        <button className="submit" type="submit">
          Submit
        </button>
        <Link to='/registration'><button className="submit">
          Sign Up
        </button></Link>
      </div>
    </form>
  );
};
export default LoginForm;