import { Button, CardGroup,Card,Tabs,Tab} from 'react-bootstrap';
import React, { useState,useContext,useEffect } from 'react';
import { useHistory } from "react-router-dom";

import HandleUserIDPost  from "../sharedComponents/HandleUserIDPost"
import authContext from "../sharedComponents/authContext";

const ViewAllExercisePlans =  () =>{
    const { authenticated } = useContext(authContext);
    console.log("USER IS:", authenticated );

    const [allPlans, setAllPlans] = useState("You have Not created any plans");
    const url = "http://127.0.0.1:5000/get_exercise_plan"

    useEffect(() => {
        HandleUserIDPost(authenticated, url)
        .then(allPlans => setAllPlans(() => allPlans))
        .catch(() => setAllPlans("You have Not created any plans"));
    }, []);



    return <p>{allPlans}</p>

}

export default ViewAllExercisePlans;