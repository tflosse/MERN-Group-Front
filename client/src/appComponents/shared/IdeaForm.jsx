import React from 'react';
import autosize from 'autosize';
import { Link } from 'react-router-dom';
import './IdeaForm.css'
const IdeaForm = ({ handleSubmit, handleChange, cancelPath }) => {
    // console.log('IdeaForm', idea)
  return (
    <form className="NewIdeaForm" onSubmit={handleSubmit}>
        <div className="Idea-Create-Div-box">
        <label>Title: </label>
        <input className="Title-input"
        placeholder='Title'
        // value={idea.title}
        name="title"
        onChange={handleChange}
        /><br />
        <label>Description: </label>
        <textarea autosize className="Description-input"
        multiline={true}
        rows={3}
        placeholder='Idea Description'
        // value={idea.desc}
        name="desc"
        onChange={handleChange}
        /><br />
        {/* <label>Duration</label>
        <input
        placeholder='3:45'
        value={song.duration}
        name="duration"
        onChange={handleChange}
        /><br /> */}
        </div>
        <div className="Idea-create-buttons">
            <button className="submit" type="submit">Submit</button>
            <Link to={cancelPath}>
                <button className="cancel">Cancel</button>
            </Link>
        </div>
    </form>
    )
}
export default IdeaForm;