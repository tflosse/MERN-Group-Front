import React from 'react';
import "./About.css";
import gitIcon from './gitIcon.svg';
import linkedIcon from './linkedIcon.svg';

const About = () => {

    return(
        <div className="About-page">
            <div className="App-container">
                <h4>This Project</h4>
                <p> We provide innovators, developers, and creators a communication 
                    platform to post, read, and comment on ideas. We encourage them 
                    to build new relationships over common interests and potential 
                    future ventures.</p>
            </div>
            <div className="Team-container">
                <h4>The Team</h4>
                <div className="about-team">    
                    <div className="member-container">
                        <div className="member--picture" id="nick-div">
                            <img src="https://i.imgur.com/wf3ZXNX.jpg" alt="nick-profile"/>
                        </div>
                        <div className="member--titles">
                            <h4>Nick diPreta</h4>
                            <h5>Web Plumber</h5>
                        </div>
                        <div className="member--description">
                            <p>I am a full-stack software engineer and Cornell University Alumnus. 
                                I focused on connecting the front and back-end, implemented user 
                                authentication and log in functionalities, handled deployment, and 
                                enjoyed experimenting with other APIs and libraries to enhance user 
                                experience and security as I continue to learn lots about latest tech trends.</p>
                        </div>
                        <div className="member--links">
                            <button><a target="_blank" href="https://www.linkedin.com/in/nicholas-dipreta/"><img className="linked-button" src={linkedIcon} alt="LinkedIn Logo" /></a></button>
                            <button><a target="_blank" href="https://github.com/NickDiPreta"><img className="github-button" src={gitIcon} alt="GitHub Logo" /></a></button>
                        </div>
                    </div>
                    <div className="member-container">
                        <div className="member--picture" id="jim-div">
                            <img src="https://i.imgur.com/mZ4nFIa.jpg" alt="jim-profile"/>
                        </div>
                        <div className="member--titles">
                            <h4>Jim Chen</h4>
                            <h5>Javascript Ninja</h5>
                        </div>
                        <div className="member--description">
                            <p>Although I am a full-stack developer, I focused on the front-end for this project and 
                                created a user-friendly interface using React. Andrew and I collaborated on
                                styling and functionalities for the main pages of the app as well as the front-end routes, 
                                ensuring users could navigate, read, and delete posts and comments.</p>
                        </div>
                        <div className="member--links">
                            <button><a target="_blank" href="https://www.linkedin.com/in/jim-j-chen/"><img className="linked-button" src={linkedIcon} alt="LinkedIn Logo" /></a></button>
                            <button><a target="_blank" href="https://github.com/jadecity2020"><img className="github-button" src={gitIcon} alt="GitHub Logo" /></a></button>
                        </div>
                    </div>
                    <div className="member-container">
                        <div className="member--picture" id="drew-div">
                            <img src="https://i.imgur.com/SvQkc8I.jpg" alt="drew-profile"/>
                        </div> 
                        <div className="member--titles">
                            <h4>Drew Culhane</h4>
                            <h5>CSS Overlord</h5>
                        </div>
                        <div className="member--description">
                            <p>I loved working on the styles and React parts of this project, 
                                and tying the back and front-end. My interest in the gaming industry also 
                                made it very enjoyable to create icons, logos, images, and animations from scratch. 
                                Our team worked well together, and our common efforts allowed for the smooth 
                                development of this UI.</p>
                        </div> 
                        <div className="member--links">
                            <button><a target="_blank" href="https://www.linkedin.com/in/culhaneandrew/"><img className="linked-button" src={linkedIcon} alt="LinkedIn Logo" /></a></button>
                            <button><a target="_blank" href="https://github.com/drewculhane"><img className="github-button" src={gitIcon} alt="GitHub Logo" /></a></button>
                        </div>
                    </div>
                    <div className="member-container">
                    <div className="member--picture" id="tam-div">
                        <img src="https://i.imgur.com/MQHeFb2.jpg" alt="tam-profile"/>
                    </div>
                    <div className="member--titles">
                        <h4>Tam Flosse</h4>
                        <h5>Scrummy Product Owner</h5>
                    </div>
                    <div className="member--description">
                        <p>As the Product Owner of this project, I mapped out our execution plan and 
                            engaged our team around a common vision.
                            I built the architecture for the app and created models and back-end routes 
                            with UX in mind to ensure seemless front-end integration. It was a rewarding 
                            first experience working full-stack with a team, 
                            especially collaborating on front-end features. 
                            I am excited for the projects that might be born here!</p>
                    </div>
                    <div className="member--links">
                            <button><a target="_blank" href="https://www.linkedin.com/in/tflosse/"><img className="linked-button" src={linkedIcon} alt="LinkedIn Logo" /></a></button>
                            <button><a target="_blank" href="https://github.com/tflosse"><img className="github-button" src={gitIcon} alt="GitHub Logo" /></a></button>
                        </div>
                </div>
                </div>
            </div>    
        </div>
    )
};
export default About;
