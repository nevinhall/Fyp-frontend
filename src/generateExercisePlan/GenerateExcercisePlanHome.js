import { Button, CardGroup,Card,Tabs,Tab} from 'react-bootstrap';
import React, { useState,useContext } from 'react';
import { useHistory } from "react-router-dom";

import authContext from "../sharedComponents/authContext";
import CreateExercisePlan from "../generateExercisePlan/CreateExercisePlan"
import ViewCurrentExercisePlan from "../generateExercisePlan/ViewCurrentExercisePlan"
import ViewAllExercisePlans from "../generateExercisePlan/ViewAllExercisePlans"

const GenerateExercisePlanHome = () =>{
    const { authenticated } = useContext(authContext);
    console.log("USER IS:", authenticated );

    //Render Form to the user.
    return(
        <Tabs defaultActiveKey="Home" id="uncontrolled-tab-example">
            <Tab eventKey="Create" title="Create Excercise Plan">
                 <CreateExercisePlan />
            </Tab>
            <Tab eventKey="Home" title="Home">
                <ViewCurrentExercisePlan />
            </Tab>
            <Tab eventKey="history" title="History" disabled>
                <ViewAllExercisePlans />
            </Tab>
        </Tabs>
  
    )
}

export default GenerateExercisePlanHome;