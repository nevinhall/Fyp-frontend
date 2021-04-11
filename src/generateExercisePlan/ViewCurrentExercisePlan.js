import { Button, CardGroup,Card,Tabs,Tab} from 'react-bootstrap';
import React, { useState,useContext,useEffect} from 'react';
import { useHistory } from "react-router-dom";

import authContext from "../sharedComponents/authContext";
import HandleUserIDPost  from "../sharedComponents/HandleUserIDPost"

const ViewCurrentExercisePlan = () =>{
    const { authenticated } = useContext(authContext);
    const [allPlans, setAllPlans] = useState("You have Not created any plans");
    const url = "http://127.0.0.1:5000/get_user_current_exercise_plan"

    useEffect(() => {
        HandleUserIDPost(authenticated, url)
        .then(allPlans => setAllPlans(() => allPlans))
        .catch(() => setAllPlans("You have Not created any plans"));
    }, []);

    console.log("USER IS:", authenticated );


    //Render Form to the user.
    return(
        <p>{allPlans}</p>
    )
}

export default ViewCurrentExercisePlan;