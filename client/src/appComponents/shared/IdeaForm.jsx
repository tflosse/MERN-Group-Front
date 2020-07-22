import React from "react";
import autosize from 'autosize';
import { Link } from "react-router-dom";
import "./IdeaForm.css";
const IdeaForm = ({ handleSubmit, handleChange, cancelPath }) => {
  // console.log('IdeaForm', idea)
  return (
    <form className="NewIdeaForm" onSubmit={handleSubmit}>
      <div className="Idea-Create-Div-box">
        <label>Username: </label>
        <input
          className="Title-input"
          placeholder="Username"
          // value={idea.title}
          name="username"
          onChange={handleChange}
        />
        <p>(You can post anonymously, but the world wants to <br />
        hear from you and know who to credit for this awesome idea!)</p>
        {/* <br /> */}
        <label>Title: </label>
        <input
          className="Title-input"
          placeholder="Title"
          // value={idea.title}
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
          // value={idea.desc}
          name="description"
          onChange={handleChange}
        />
        <br />
        <label>Keywords: </label>
        <input
          className="Title-input"
          placeholder="Separated by comas"
          // value={idea.title}
          name="keywords"
          onChange={handleChange}
        />
        <br />
        <label>Because a picture is worth a thousand words,<br />
        include a link to yours here:</label>
        <input
          className="Title-input"
          placeholder="Image URL or address"
          // value={idea.title}
          name="image-src"
          onChange={handleChange}
        />
        <br />
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
