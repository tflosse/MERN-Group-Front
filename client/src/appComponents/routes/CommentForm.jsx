import React from 'react'

function CommentForm({ comment, handleSubmit, handleChange}){
    return (
    <form className="CommentForm" onSubmit={handleSubmit}>
        <input 
        placeholder="Username to display"
        value={comment.username}
        onChange={handleChange}
        name='username'
        /> 
        <input 
        placeholder="Leave a Comment"
        value={comment.commentBody}
        onChange={handleChange}
        name='commentBody'
        /> 
        <button type="submit">Submit</button>
    </form>
    )
}

export default CommentForm