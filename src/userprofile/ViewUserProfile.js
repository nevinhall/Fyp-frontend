import {Image} from 'react-bootstrap';
import React, { useState,useContext,useEffect } from 'react';
import { useHistory } from "react-router-dom";

import HandleUserIDPost  from "../sharedComponents/HandleUserIDPost"
import authContext from "../sharedComponents/authContext";
import userProfileImage from "../Images/user.png"

const ViewUserProfile = () =>{
    const  authenticated = localStorage.getItem('user_id');
    const axios = require('axios').default;
    console.log("USER IS:", authenticated );

    const [userProfile, setUserProfile] = useState({});
    const url = "http://127.0.0.1:5000/getuserprofile"

    useEffect( async () => {
        var bodyFormData = new FormData();
        bodyFormData.append("user_id",authenticated);
        const result = await axios.post(url,bodyFormData,{headers : {"Access-Control-Allow-Origin": "*"}})
        console.log("this is res",result);
        setUserProfile(result.data)

    }, []);



    return (
        <div>
            {userProfile ?
              <div className="d-block d-flex justify-content-around">
                  <div>
                   <Image src={userProfileImage}style={{width:200,height:200}}/>
                    <p>User ID: <strong>{userProfile[0]}</strong></p>
                    <p>Height: <strong>{userProfile[1]}</strong>cm</p>
                    <p>Weight: <strong>{userProfile[2]}</strong>kg</p>
                    <p>Bmi: <strong>{userProfile[3]}</strong></p>
                    <p>Activity Level: <strong>{userProfile[4]}</strong></p>
                    <p>Dietary Options: <strong>{userProfile[5]}</strong></p>
                    <p>Allergies: <strong>{userProfile[6]}</strong></p>
                    <p>Age: <strong>{userProfile[7]}</strong></p>
                    <p>Calories: <strong>{userProfile[8]}</strong>kcal</p>
                    <p>Gender: <strong>{userProfile[9]}</strong></p>
             
             
                </div>
            </div>: <p>No Profile here</p>}
        </div>
    )

}

export default ViewUserProfile