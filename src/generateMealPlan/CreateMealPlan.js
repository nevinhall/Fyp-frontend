import { Button, CardGroup,Card,Tabs,Tab,Image} from 'react-bootstrap';
import React, { useState,useContext } from 'react';
import { useHistory } from "react-router-dom";

import authContext from "../sharedComponents/authContext";
import HandleUserIDPost  from "../sharedComponents/HandleUserIDPost"
import robot from "../Images/robot.png"

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
        <div className="d-flex justify-content-center m-4">
            <div className="w-50 p-2">
                <Image src={robot}thumbnail style={{width:200,height:250}}/>
                <h2 className={"display-6"}> Generate Meal Plan</h2>
                <p className="text-justify lead">
                   We've captured your user profile now let our robots get to work on creating a meal plan
                   tailored to your needs. This done using a combinatorial alogrithm to ensure the plan is suitable.
                   Dont worry we've also calculated the optiaml calorie intake specifcally for you and your needs.
                </p>  
    
          <Button onClick={generateMealPlan}>Generate Meal Plan</Button>
        </div>
         </div>
    )
}

export default CreateMealPlan;