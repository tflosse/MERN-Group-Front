import React from "react";
import {BrowserRouter as Link} from "react-router-dom";
import "./LoginForm.css";
import Popup from "reactjs-popup";

const LoginForm = (props) => {

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
        <Popup
          trigger={
            <button className="submit" type="submit">
              Submit
            </button>
          }
          position="top right"
        >
          {(close) => (
            <div>
              <span>Invalid Login Information</span>
              <button className="close" onClick={close}>
                &times;
              </button>
            </div>
          )}
        </Popup>

        <Link to="/registration">
          <button className="submit">Sign Up</button>
        </Link>
      </div>
    </form>
  );
};
export default LoginForm;
