import { Button, CardGroup,Card,Tabs,Tab} from 'react-bootstrap';
import React, { useState,useContext } from 'react';
import { useHistory } from "react-router-dom";

import authContext from "../sharedComponents/authContext";
import HandleUserIDPost  from "../sharedComponents/HandleUserIDPost"

const CreateExercisePlan = () =>{
    const  authenticated = localStorage.getItem('user_id');
    const axios = require('axios').default;
    console.log("USER IS:", authenticated );

    const generateExercisePlan  = () => {
        const url = "http://127.0.0.1:5000/generateexerciseplan"
        let res =   HandleUserIDPost(authenticated,url)

        const setNewPlan = "http://127.0.0.1:5000/set_current_user_exercise_plan"
        var bodyFormData = new FormData();

        bodyFormData.append("user_id",authenticated);
        bodyFormData.append("exercise_plan_id",res.ID);

        const result =  axios.post(setNewPlan,bodyFormData,{headers : {"Access-Control-Allow-Origin": "*"}})
    
       
     
        
        window.location.reload();

        
      
      
      
        
    }
    //Render Form to the user.
    return(
     <Button onClick={generateExercisePlan}>Generate Exercise Plan</Button>
    )
}

export default CreateExercisePlan;