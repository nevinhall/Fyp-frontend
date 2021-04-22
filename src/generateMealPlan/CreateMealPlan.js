import { Button, CardGroup,Card,Tabs,Tab} from 'react-bootstrap';
import React, { useState,useContext } from 'react';
import { useHistory } from "react-router-dom";

import authContext from "../sharedComponents/authContext";
import HandleUserIDPost  from "../sharedComponents/HandleUserIDPost"

const CreateMealPlan = () =>{
    const  authenticated = localStorage.getItem('user_id');
    const axios = require('axios').default;
    console.log("USER IS:", authenticated );

    const generateMealPlan = async () => {
        const url = "http://127.0.0.1:5000/generatemealplan"
        let res = await HandleUserIDPost(authenticated,url)

        const setNewPlan = "http://127.0.0.1:5000/set_current_user_meal_plan"
        var bodyFormData = new FormData();


       
        bodyFormData.append("user_id",authenticated);
        bodyFormData.append("meal_plan_id",res.ID);

        console.log("This is res",res);
        const result =  axios.post(setNewPlan,bodyFormData,{headers : {"Access-Control-Allow-Origin": "*"}})
    
       
        HandleUserIDPost(authenticated,url)
        window.location.reload();
        
    }
    //Render Form to the user.
    return(
     <Button onClick={generateMealPlan}>Generate Meal Plan</Button>
    )
}

export default CreateMealPlan;