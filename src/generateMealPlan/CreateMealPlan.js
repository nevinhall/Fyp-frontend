import { Button, CardGroup,Card,Tabs,Tab} from 'react-bootstrap';
import React, { useState,useContext } from 'react';
import { useHistory } from "react-router-dom";

import authContext from "../sharedComponents/authContext";
import HandleUserIDPost  from "../sharedComponents/HandleUserIDPost"

const CreateMealPlan = () =>{
    const { authenticated } = useContext(authContext);
    console.log("USER IS:", authenticated );

    const generateMealPlan = () => {
        const url = "http://127.0.0.1:5000/generatemealplan"
        HandleUserIDPost(authenticated,url)
        window.location.reload();
        
    }
    //Render Form to the user.
    return(
     <Button onClick={generateMealPlan}>Generate Meal Plan</Button>
    )
}

export default CreateMealPlan;