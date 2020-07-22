import React, { useEffect, useState } from "react";
import axios from 'axios'
import './Idea.css'; 
import { usersApi, ideasApi } from '../../apiConfig.js'

function Idea (props) {
    const checkmark = '✔';
    console.log('Idea',props)
   
    let ideaId=props.match.params.ideatitle
    console.log('api add: ', `${ideasApi}/id/${ideaId}`)

    const [ideas, setIdea] = useState({})
    
    useEffect(() => {
        const makeAPICall = async () => {
          try {
              const response = await axios(`${ideasApi}/${ideaId}`)
              console.log('Idea - response', response)
              setIdea(response.data)
            } catch (err) {
              console.error(err)
            }
       }
        makeAPICall()
      }, [])
      
      console.log('keytags',ideas)
      function keytags(array){
          if(!array) return <p>Loading...</p>
          else {
        const keytagArr=array.map((item)=>(
            <p className='dashboard-ind-key'>#{item}</p>
        ))
        return keytagArr
          }
    }


    let userComments 
    if(!ideas.comments) userComments=<div><p>Loading...</p></div>
    else{
    if(!ideas.comments[0]) userComments= <div><p>There are no comments for this idea, be the first to comment!</p></div>
    else{
        userComments=ideas.comments.map((comm)=>{
        return (
            <div className="CommentContainer">
                <div className="Comment-user-and-timestamp">
            <p className='dashboard-comment-name'>{comm.username}</p>
            <p className='dashboard-comment-timestamp'>{comm.timestamp}</p>
            </div>
            <p className='dashboard-comment-body'>{comm.commentBody}</p>
            </div>
        )
        })
    } 
}
    return (
        <>
        <div className="FeedUltimateContainer">
            <div className="FeedHeaderContainer">
                <div className="FeedHeader">
                    <img className="FeedHeaderAnimation" src="https://res.cloudinary.com/dgmpgmo60/image/upload/v1595116789/Untitled_7_2_vm15aq.png" alt="Flashing Lightbulb"/>      
                </div>
            </div>
            <div className="MainFeed">
                <div className='dashboard-creative-idea'>
                    <div className='dashboard-title'>
                        <div className="Title-and-votes">
                            <div className="IconsBoxPost">
                                <div className="PostUpBox">
                                    <i className="material-icons">keyboard_arrow_up</i>
                                    <img className="LightbulbIcon" src="https://res.cloudinary.com/dgmpgmo60/image/upload/v1595186577/Untitled_8_1_ymtxrr.png" alt="whole lightbulb"/>
                                </div>
                                    <div className="PostCountBox">
                                        <p>{ideas.votes}</p>
                                    </div>
                                <div className="PostDownBox">
                                    <i className="material-icons">keyboard_arrow_down</i>
                                    <img className="LightbulbIcon" src="https://res.cloudinary.com/dgmpgmo60/image/upload/v1595188165/Untitled_8_2_glwnue.png" alt="Broken lightbulb"/>
                                </div>
                            </div>
                            <h1 className='dashboard-idea-title feedtitle'>{ideas.title}</h1>
                        </div>
                        <h1 className='dashboard-idea-author'>{ideas.username}</h1>
                    </div>
                    <div className='dashboard-desc'>
                        <p>{ideas.description}</p>
                        {/* <img src={ideas.imgSrc}/> */}
                        {/* <p>keywords:</p> */}
                        <div className='dashboard-keytags'>{keytags(ideas.keywords)}</div>
                    </div>
                </div>
                <div className='dashboard-comments-section'>
                    <div className="BarrierContainer">
                        <img className="CommentBarrier" src="https://res.cloudinary.com/dgmpgmo60/image/upload/v1595191527/Untitled_12_taesgk.png" alt="Telephone Wire"/>
                    </div>
                    <p className='dashboard-comments-title'>Comments</p>
                    {userComments}
                </div>
                <div className="AddComment">
                    <form className="CommentForm">
                        {/* <input placeholder="Leave a Comment"/>  */}
                        <input placeholder="Leave a Comment"/> 
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
        </> 
    )
}

export default Idea 