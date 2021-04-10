import { Button, CardGroup,Card,Tabs,Tab} from 'react-bootstrap';
import React, { useState,useContext } from 'react';
import { useHistory } from "react-router-dom";
import authContext from "../sharedComponents/authContext";

const GenerateExercisePlanHome = () =>{
    const { authenticated } = useContext(authContext);
    console.log("USER IS:", authenticated );

    //Render Form to the user.
    return(
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
            <Tab eventKey="home" title="Home">
               
            </Tab>
            <Tab eventKey="profile" title="Profile">
                
            </Tab>
            <Tab eventKey="contact" title="Contact" disabled>
                
            </Tab>
        </Tabs>
  
    )
}

export default GenerateExercisePlanHome;