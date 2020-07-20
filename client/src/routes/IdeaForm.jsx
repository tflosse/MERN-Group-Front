import React from 'react';
import { Link } from 'react-router-dom';
const IdeaForm = ({ handleSubmit, handleChange, cancelPath }) => {
    // console.log('IdeaForm', idea)
  return (
    <form onSubmit={handleSubmit}>
        <label>Title: </label>
        <input
        placeholder='Title'
        // value={idea.title}
        name="title"
        onChange={handleChange}
        /><br />
        <label>Description: </label>
        <input
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
        <div>
            <button className="submit" type="submit">Submit</button>
            <Link to={cancelPath}>
                <button className="cancel">Cancel</button>
            </Link>
        </div>
    </form>
    )
}
export default IdeaForm;