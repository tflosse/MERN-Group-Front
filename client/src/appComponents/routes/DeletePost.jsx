import axios from "axios";
import { ideasApi, usersApi } from "../../apiConfig";
import React, { useState } from "react";
import Popup from "reactjs-popup";
import "./DeletePostModal.css";

const DeletePost = (props) => {
  const [isDeleted, setIsDeleted] = useState(false);

  const destroy = async (link) => {
    await axios({
      url: `${link}`,
      method: "DELETE",
    });
    setIsDeleted(true);
    console.log(isDeleted);
  };

  const handleClick = async (e) => {
    const ideaIds = props.ideaId;
    const url = `${ideasApi}/${ideaIds}`;
    await destroy(url);
    window.location = "/home";
  };

  if (props.myUsername === props.postUsername) {
    return (
      <div className="App">
        <Popup
          trigger={<button className="btn btn-warning">Delete</button>}
          position="top right"
        >
          {(close) => (
            <div>
              <span>Are you sure you want to delete this post?</span>
              <button className="btn btn-warning" onClick={handleClick}>
                Yes
              </button>
              <button className="close" onClick={close}>
                &times;
              </button>
            </div>
          )}
        </Popup>
      </div>
    );
  } else {
    return <></>;
  }
};

export default DeletePost;
