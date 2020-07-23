import React from "react";
import autosize from "autosize";
import { Link } from "react-router-dom";
import "./IdeaForm.css";

const IdeaForm = ({ idea, handleSubmit, handleChange, cancelPath}) => {
  // console.log('IdeaForm', idea)
  return (
    <form className="NewIdeaForm" onSubmit={handleSubmit}>
      <div className="Idea-Create-Div-box">
        <label>Username: </label>
        <input
          className="Description-input"
          value={idea.username}
          name="username"
          onChange={handleChange}
        />
        <p className="Name-guidelines">
          (You can post anonymously, but the world wants to know who to credit for this awesome idea!)
        </p>
        {/* <br /> */}
        <label>Title: </label>
        <input
          className="Title-input"
          placeholder="Title"
          value={idea.title}
          name="title"
          onChange={handleChange}
        />
        <br />
        <label>Description: </label>
        <textarea
          autosize
          className="Description-input"
          multiline={true}
          rows={5}
          placeholder="Idea Description"
          value={idea.description}
          name="description"
          onChange={handleChange}
        />
        <br />
        <label>Keywords: </label>
        <input
          className="Description-input"
          placeholder="Separated by comas"
          value={idea.keyarr}
          name="keyarr"
          onChange={handleChange}
        />
        <br />
        {/* <label>Because a picture is worth a thousand words,<br />
        include a link to yours here:</label>
        <input
          className="Title-input"
          placeholder="Image URL or address"
          // value={idea.title}
          name="image-src"
          onChange={handleChange}
        />
        <br /> */}
      </div>
      <div className="Idea-create-buttons">
        <button className="submit" type="submit">
          Submit
        </button>
        <Link to={cancelPath}>
          <button className="cancel">Cancel</button>
        </Link>
      </div>
    </form>
  );
};
export default IdeaForm;
