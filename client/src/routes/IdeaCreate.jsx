import React, { useState } from "react";
import axios from "axios";
// import ideasApi from '../../apiConfig'
import IdeaForm from "./IdeaForm";
import Layout from "./Layout";

const IdeaCreate = (props) => {
    console.log('IdeaCreate props', props)
  const [input, setInput] = useState({ title: "", desc: ""});
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
    <Layout>
      <IdeaForm
        item={input}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        cancelPath="/"
      />
    </Layout>
  );
};
export default IdeaCreate;