import React from "react";
import { Link } from "react-router-dom";
import "./LoginForm.css";
const LoginForm = (props) => {
  // console.log('IdeaForm', idea)


  return (
    <form className="NewIdeaForm" onSubmit={props.handleSubmit}>
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
          placeholder="Password"
          value={props.password}
          name="password"
          onChange={props.handlePasswordChange}
        />
        <br />
        <label>Email:</label>
        <textarea
          autosize
          className="Description-input"
          placeholder="email address"
          value={props.email}
          name="email"
          onChange={props.handleEmailChange}
        />
     
      </div>
      <div className="Idea-create-buttons">
        <button className="submit" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};
export default LoginForm;
