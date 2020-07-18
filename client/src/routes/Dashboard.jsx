import React from 'react'
import './Dashboard.css'

function Dashboard () {
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
            isAnonymous: true,
            username:{
                name: 'Jim Chen'
            },
            canContact: true
        },
        otherUserResponse:{
            comments:[
                {
                    comment:'this idea sucks',
                    user: 'Nick'
                },
                {
                    comment: 'i like this idea',
                    user: 'Tam'
                },
                {
                    comment: 'go get a life',
                    user: 'Andrew'
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
            <div>
            <p className='dashboard-comment-name'>{comm.user}</p>
            <p className='dashboard-comment-body'>{comm.comment}</p>
            </div>
        )
        })
    } else userComments= <div><p>There are no comments for this idea, be the first to comment!</p></div>
    
    

    return (
        <div className='dashboard-creative-idea'>
            <div className='dashboard-title'>
                <h1 className='dashboard-idea-title'>{idea.creative_idea.title}</h1>
                <h1 className='dashboard-idea-author'>{authorName}</h1>
            </div>
            <div className='dashboard-desc'>
                <p>{idea.creative_idea.description}</p>
                {/* <p>keywords:</p> */}
                <div className='dashboard-keytags'> {keytags}</div>
            </div>
            <div className='dashboard-comments-section'>
                <p className='dashboard-comments-title'>Comments</p>
                {userComments}
            </div>
        </div>
    )
}

export default Dashboard