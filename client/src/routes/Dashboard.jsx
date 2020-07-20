import React from 'react'
import './Dashboard.css'

function Dashboard () {
    const checkmark = '✔';
    // let ideaSchema = {
    //     createive_idea: {
    //         title: { type: String, required: true },
    //         description: { type: String, required: true },
    //         pictures: [{
    //             src: String,
    //             alt: String
    //         }],
    //         keywords: [Strings],
    //         votes: { type: Number, default: 0 }
    //         // counter
    //     },
    //     personal: {
    //         isAnonymous: Boolean,
    //         username: {
    //             ref: "Username",
    //             type: mongoose.Schema.Types.ObjectId
    //         }
    //         canContact: { type: Boolean, default: true }
    //     },
    //     otherUserResponse {
    //         comments: [{
    //             ref: "Comment",
    //             type: mongoose.Schema.Types.ObjectId
    //     }]},
    //     {timestamps: true}
    // }
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
    let keytags=idea.creative_idea.keywords.map((tags)=>{
        return (
            <p className='dashboard-ind-key'>#{tags}</p>
        )
    })
    
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
        <div className="FeedHeaderContainer">
        <div className="FeedHeader">
          <img className="FeedHeaderAnimation" src="https://res.cloudinary.com/dgmpgmo60/image/upload/v1595116789/Untitled_7_2_vm15aq.png" alt="Flashing Lightbulb"/>      
        </div>
        <h4 className="Brilliant"> What Brilliant Ideas did the world have while you were gone?</h4>
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
                        <p>0</p>
                  </div>
                  <div className="PostDownBox">
                    <i className="material-icons">keyboard_arrow_down</i>
                    <img className="LightbulbIcon" src="https://res.cloudinary.com/dgmpgmo60/image/upload/v1595188165/Untitled_8_2_glwnue.png" alt="Broken lightbulb"/>
                  </div>
                </div>
                <h1 className='dashboard-idea-title'>{idea.creative_idea.title}</h1>
                </div>
                <h1 className='dashboard-idea-author'>{authorName}</h1>
            </div>
            <div className='dashboard-desc'>
                <p>{idea.creative_idea.description}</p>
                {/* <p>keywords:</p> */}
                <div className='dashboard-keytags'> {keytags}</div>
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

export default Dashboard