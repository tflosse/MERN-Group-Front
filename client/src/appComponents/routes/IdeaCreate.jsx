import React, { useState } from "react";
import axios from "axios";
import { usersApi, ideasApi } from "../../apiConfig";
import IdeaForm from "../shared/IdeaForm";
import Layout from "../shared/Layout";
import "./IdeaCreate.css";

const IdeaCreate = (props) => {
  //   console.log('IdeaCreate props', props)
  const [input, setInput] = useState({ title: "", desc: "" });
  const [idea, setIdea] = useState(null);
  
  const handleChange = (event) => {
    console.log("event", event.target.name, event.target.value);
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    console.log(input)
    axios({
      url: `${ideasApi}/add`,
      method: "POST",
      data: input,
    })
      .then((res) => {
        console.log(res)
          setIdea({ createdItem: res.data.idea })
          props.history.push('/songs')
        })
      .catch(console.error);
  };

  return (
    <>
      <div className="Post-submit-container">
        <div className="SubmitIconContainer">
          <img
            src="https://res.cloudinary.com/dgmpgmo60/image/upload/v1595352949/light-bulb-icon-cartoon-isolated-black-and-white-vector-25740587_1_1_sa7lpw.png"
            alt="Lightbulb Image"
          />
        </div>
        <IdeaForm
          item={input}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          username={props.username}
          cancelPath="/"
        />
      </div>
    </>
  );
};
export default IdeaCreate;
