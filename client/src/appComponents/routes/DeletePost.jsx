import axios from "axios";
import { ideasApi, usersApi } from "../../apiConfig";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Popup from "reactjs-popup";
import "./DeletePostModal.css";

const DeletePost = (props) => {
  const [isDeleted, setIsDeleted] = useState(false);

  const destroy = async (link) => {
    const response = await axios({
      url: `${link}`,
      method: "DELETE",
    });
    setIsDeleted(true);
    console.log(isDeleted);
  };

  const handleClick = async (e) => {
    // const key= props.comm._id;
    const ideaIds = props.ideaId;
    const url = `${ideasApi}/${ideaIds}`;
    await destroy(url);
    window.location = "/home"
  };

  
  
  if(props.myUsername==props.postUsername){
    return(
    <div className="App">
      <Popup trigger={<button className="btn btn-warning">Delete Post</button>} position="top left">
        {(close) => (
          <div>
            <span>Are you sure you want to delete?</span>
            <button className="btn btn-warning"onClick={handleClick}>Yes</button>
            <a className="close" onClick={close}>
              &times;
            </a>
          </div>
        )}
      </Popup>
    </div>
    )}
    else{
      return(<></>)
    }
        
};

export default DeletePost;
