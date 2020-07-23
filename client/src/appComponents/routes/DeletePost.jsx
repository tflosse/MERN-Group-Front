import axios from "axios";
import { ideasApi, usersApi } from '../../apiConfig'
import React, { useState, useEffect } from "react";
import { Link, Redirect } from 'react-router-dom'

function DeletePost (props) {
        const [isDeleted,setIsDeleted] = useState(false)
        const destroy = async (link) => {
            const response = await axios(
                {
              url: `${link}`,
              method: 'DELETE'
            }
            )
            setIsDeleted(true)
            console.log(isDeleted)
          }
        const handleClick = (e) => {
            // const key= props.comm._id;
            const ideaIds=props.ideaId
            console.log(`${ideasApi}/${ideaIds}`);
            const url=`${ideasApi}/${ideaIds}`; 
            destroy(url)
        }
        if (isDeleted) {
            return (
                <>
                <p> Successfully deleted your post. </p>
                <Link to='/Home'> Home </Link> 
                </>
                )
          }
          if(props.myUsername==props.postUsername){
        return ( <button onClick={handleClick}>Delete</button>)
          } else return <></>
    }

export default DeletePost