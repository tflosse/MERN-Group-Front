import React, { useState } from "react";
import axios from "axios";
import { usersApi, ideasApi } from "../../apiConfig";
import IdeaForm from "../shared/IdeaForm";
import Layout from "../shared/Layout";
import "./IdeaCreate.css";

const IdeaCreate = (props) => {
  //   console.log('IdeaCreate props', props)
  const [input, setInput] = useState({ username: props.username, title: "", desc: "", keywords: [], keyarr: ''});
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
    let input2=input.keyarr.split(',')
    input.keywords=input2
    console.log(input.keywords)
    axios({
      url: `${ideasApi}/`,
      method: "POST",
      data: input,
    })
      .then((res) => {
        console.log(res)
          setIdea({ createdItem: res.data.idea })
          props.history.push('/home')
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
          idea={input}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          username={props.username}
          cancelPath="/home"
        />
      </div>
    </>
  );
};
export default IdeaCreate;
