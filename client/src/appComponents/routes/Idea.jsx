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


    let idea={
        creative_idea: {
            title: "coffee when you are done with hygiene",
            description: 'a cup of coffee freshly brewed as you wake up and conduct personal hygiene and ready on the table when you are done',
            picture:{
                src:'',
                alt:''
            },
            keywords: ['coffee', 'ready when you are','fresh']
        },
        personal:{
            isAnonymous: false,
            username:{
                name: 'Jim Chen'
            },
            canContact: true
        },
        otherUserResponse:{
            comments:[
                {
                    comment:'This idea needs development. What exactly are you proposing?',
                    user: 'Nick', 
                    timestamp: "3 Hours ago"
                },
                {
                    comment: 'I like this idea',
                    user: 'Tam', 
                    timestamp: "1 hours ago"
                },
                {
                    comment: 'That is probably going to involve a timer, a robot, and a button you press to start the robot. You will also need to calculate a working average hygiene prep time which may vary per customer.',
                    user: 'Andrew', 
                    timestamp: "15 mins ago"
                }
            ]
        }
    }
    let authorName= (idea.personal.isAnonymous ? 'Anonymous':idea.personal.username.name)
    
    let userComments 
    if(idea.otherUserResponse.comments[0]){
        userComments=idea.otherUserResponse.comments.map((comm)=>{
        return (
            <div className="CommentContainer">
                <div className="Comment-user-and-timestamp">
            <p className='dashboard-comment-name'>{comm.user}</p>
            <p className='dashboard-comment-timestamp'>{comm.timestamp}</p>
            </div>
            <p className='dashboard-comment-body'>{comm.comment}</p>
            </div>
        )
        })
    } else userComments= <div><p>There are no comments for this idea, be the first to comment!</p></div>
    
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
                        <p> Anon {checkmark} </p>
                        <input placeholder="Leave a Comment"/> 
                        <input placeholder="Add Hashtags"/>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
        </> 
    )
}

export default Idea 