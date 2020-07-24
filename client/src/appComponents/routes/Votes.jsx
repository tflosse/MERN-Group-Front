import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Idea.css";
import { usersApi, ideasApi } from "../../apiConfig.js";

const Votes = ({ ideaId, time, ideas }) => {
  console.log(ideaId);
  const [votes, updateVotes] = useState();
  const [upvoted, setUpvoted] = useState(false);
  const [downvoted, setDownvoted] = useState(false);

  useEffect(() => {
    const makeAPICall = async () => {
      try {
        const response = await axios(`${ideasApi}/${ideaId}`);
        console.log("Idea - response", response);
        updateVotes(response.data.votes);
        console.log(votes);
      } catch (err) {
        console.error(err);
      }
    };
    makeAPICall();
  }, []);

  const handleUpvote = async (event) => {
    try {
      const response = await axios(`${ideasApi}/${ideaId}`);
      updateVotes((response.data.votes += 1));
      let newData = response.data;
      await axios({
        url: `${ideasApi}/${ideaId}`,
        method: "PUT",
        data: newData,
      });
      //   setIsUpdated(true)
    } catch (err) {
      console.error(err);
    }
    setUpvoted(true);
    setDownvoted(false);
    console.log("handled Upvote");
  };

  const handleDownvote = async (event) => {
    try {
      const response = await axios(`${ideasApi}/${ideaId}`);
      updateVotes((response.data.votes -= 1));
      let newData = response.data;
      await axios({
        url: `${ideasApi}/${ideaId}`,
        method: "PUT",
        data: newData,
      });
      //   setIsUpdated(true)
    } catch (err) {
      console.error(err);
    }
    setDownvoted(true);
    setUpvoted(false);
    console.log("handled Downvote");
  };

  return (
    <div className="IconsBoxPost">
      <div className="PostUpBox">
        <i className="material-icons" onClick={handleUpvote}>{`${
          upvoted ? "  " : "keyboard_arrow_up"
        }`}</i>
      </div>
      <div className="PostCountBox">
        <p>
          <img
            className="LightbulbIcon"
            src="https://res.cloudinary.com/dgmpgmo60/image/upload/v1595186577/Untitled_8_1_ymtxrr.png"
            alt="whole lightbulb"
          />
          <strong>{` `} {votes}</strong>
          {()=>time(ideas.createdAt)}
        </p>
        
      </div>
      <div className="PostDownBox">
        <i className="material-icons" onClick={handleDownvote}>{`${
          downvoted ? "  " : "keyboard_arrow_down"
        }`}</i>
        {/* <img
                className="LightbulbIcon"
                src="https://res.cloudinary.com/dgmpgmo60/image/upload/v1595188165/Untitled_8_2_glwnue.png"
                alt="Broken lightbulb"
            /> */}
      </div>
    </div>
  );
};

export default Votes;
