import { Button, CardGroup,Card,Tabs,Tab} from 'react-bootstrap';
import React, { useState,useContext } from 'react';
import { useHistory } from "react-router-dom";
import ViewUserProfile from './ViewUserProfile';
import authContext from "../sharedComponents/authContext";



const UserProfileHome = () =>{
    const  authenticated = localStorage.getItem('user_id');
    console.log("USER IS:", authenticated );

    //Render Form to the user.
    return(
        <Tabs defaultActiveKey="Home" id="uncontrolled-tab-example">
            <Tab eventKey="Create" title="Create Meal Plan">
               
            </Tab>
            <Tab eventKey="Home" title="Home">
              
            </Tab>
            <Tab eventKey="history" title="History">
                <ViewUserProfile />
            </Tab>
        </Tabs>
  
    )
}

export default UserProfileHome;