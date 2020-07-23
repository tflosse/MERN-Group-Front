import React, { useState, useEffect } from 'react'
import './Dashboard.css'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { usersApi, ideasApi } from '../../apiConfig.js'
import axios from 'axios'


function Dashboard (props) {
    const checkmark = '✔';
    console.log(props.username)        
      const [ideas, setIdeas] = useState([]);
      const [isDeleted,setIsDeleted] = useState(false)
      useEffect(() => {
        const makeAPICall = async () => {
          try {
            const response = await axios(`${ideasApi}/all`);
            console.log("Ideas - useEffect - response", response);
            setIdeas(response.data);
          } catch (err) {
            console.error(err);
          }
        };  
        makeAPICall();
      }, [])

    function keytags(array){
        const keytagArr=array.map((item)=>(
            <p className='dashboard-ind-key'>#{item}</p>
        ))
        return keytagArr
    }

      const ideaArray= ideas.map((idea)=> (
        <div className='dashboard-creative-idea'>
            <div className='dashboard-title'>
                <div className="Title-and-votes">
                    <div className="IconsBoxPost">
                        {/* <div className="PostUpBox">
                            <i className="material-icons">keyboard_arrow_up</i>
                            <img className="LightbulbIcon" src="https://res.cloudinary.com/dgmpgmo60/image/upload/v1595186577/Untitled_8_1_ymtxrr.png" alt="whole lightbulb"/>
                        </div> */}
                        <div className="PostCountBox">
                            <p><img className="LightbulbIcon" src="https://res.cloudinary.com/dgmpgmo60/image/upload/v1595186577/Untitled_8_1_ymtxrr.png" alt="whole lightbulb"/> <strong>{idea.votes}</strong></p>
                        </div>
                        {/* <div className="PostDownBox">
                            <i className="material-icons">keyboard_arrow_down</i>
                            <img className="LightbulbIcon" src="https://res.cloudinary.com/dgmpgmo60/image/upload/v1595188165/Untitled_8_2_glwnue.png" alt="Broken lightbulb"/>
                        </div> */}
                    </div>
                    <Link to={'/ideas/' + idea._id}> 
                        <h1 className='dashboard-idea-title feedtitle'>{idea.title}</h1>
                    </Link> 
                </div>
                <h1 className='dashboard-idea-author'>{idea.username}</h1>
            </div>
            <div className='dashboard-desc'>
                <p>{idea.description}</p>
                {/* <p>keywords:</p> */}
                <div className='dashboard-keytags'>{keytags(idea.keywords)}</div>
            </div>
        </div>
       ));
       
    // let keytags=idea.creative_idea.keywords.map((tags)=>{
    //     return (
    //         <p className='dashboard-ind-key'>#{tags}</p>
    //     )
    // })
    
    // let userComments 
    // if(idea.otherUserResponse.comments[0]){
    //     userComments=idea.otherUserResponse.comments.map((comm)=>{
    //     return (
    //         <div className="CommentContainer">
    //             <div className="Comment-user-and-timestamp">
    //         <p className='dashboard-comment-name'>{comm.user}</p>
    //         <p className='dashboard-comment-timestamp'>{comm.timestamp}</p>
    //         </div>
    //         <p className='dashboard-comment-body'>{comm.comment}</p>
    //         </div>
    //     )
    //     })
    // } else userComments= <div><p>There are no comments for this idea, be the first to comment!</p></div>
    return (
        <>
        <div className="FeedUltimateContainer">
            <div className="FeedHeaderContainer">
                <div className="FeedHeader">
                    <img className="FeedHeaderAnimation" src="https://res.cloudinary.com/dgmpgmo60/image/upload/v1595116789/Untitled_7_2_vm15aq.png" alt="Flashing Lightbulb"/>      
                </div>
                <h4 className="Brilliant"> {`What Brilliant Ideas did the world have while you were gone, ${props.username}`}</h4>
            </div>
            <div className="MainFeed">
                {ideaArray}
            </div>
        </div>
        </> 
    )
}

export default Dashboard