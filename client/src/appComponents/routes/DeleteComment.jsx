import axios from "axios";
import { ideasApi, usersApi } from '../../apiConfig'
import React, { useState, useEffect } from "react";
import { Link, Redirect } from 'react-router-dom'

function DeleteComment (props) {
        const [isDeleted,setIsDeleted] = useState(false)
        const destroy = async (link) => {
            const response = await axios(
                {
              url: `${link}`,
              method: 'PUT'
            }
            )
            setIsDeleted(true)
            console.log(isDeleted)
          }
        const handleClick = (e) => {
            const key= props.comm._id;
            const ideaIds=props.ideaId
            console.log(`${ideasApi}/comment/delete/${ideaIds}/${key}`);
            const url=`${ideasApi}/comment/delete/${ideaIds}/${key}`; 
            destroy(url)
        }
        if (isDeleted) {
            window.location.reload()
          }
        return ( <p onClick={handleClick} className="deleteicon">X</p>)
    }

export default DeleteComment