import { Button, CardGroup,Card,Tabs,Tab} from 'react-bootstrap';
import React, { useState,useContext,useEffect } from 'react';
import { useHistory } from "react-router-dom";

import HandleUserIDPost  from "../sharedComponents/HandleUserIDPost"
import authContext from "../sharedComponents/authContext";

const ViewUserProfile = () =>{
    const  authenticated = localStorage.getItem('user_id');
    console.log("USER IS:", authenticated );

    const [userProfile, setUserProfile] = useState("You have Not created a user profile yet");
    const url = "http://127.0.0.1:5000/getuserprofile"

    useEffect(() => {
        HandleUserIDPost(authenticated, url)
        .then(userProfile => setUserProfile(() => userProfile))
        .catch(() => setUserProfile("Error fetching user profile"));
    }, []);



    return <p>{userProfile}</p>

}

export default ViewUserProfile