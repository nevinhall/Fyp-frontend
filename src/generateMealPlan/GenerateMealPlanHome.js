import { Button, CardGroup,Card,Tabs,Tab} from 'react-bootstrap';
import React, { useState,useContext } from 'react';
import { useHistory } from "react-router-dom";

import authContext from "../sharedComponents/authContext";
import CreateMealPlan from "../generateMealPlan/CreateMealPlan"
import ViewAllMealPlans from "../generateMealPlan/ViewAllMealPlans"
import ViewCurrentMealPlan from "../generateMealPlan/ViewCurrentMealPlan"

const GenerateMealPlanHome = () =>{
    const { authenticated } = useContext(authContext);
    console.log("USER IS:", authenticated );

    //Render Form to the user.
    return(
        <Tabs defaultActiveKey="Home" id="uncontrolled-tab-example">
            <Tab eventKey="Create" title="Create Meal Plan">
                 <CreateMealPlan />
            </Tab>
            <Tab eventKey="Home" title="Home">
                <ViewCurrentMealPlan />
            </Tab>
            <Tab eventKey="history" title="History">
                <ViewAllMealPlans />
            </Tab>
        </Tabs>
  
    )
}

export default GenerateMealPlanHome;