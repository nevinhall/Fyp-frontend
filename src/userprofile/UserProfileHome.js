import { Button, CardGroup,Card,Tabs,Tab} from 'react-bootstrap';
import React, { useState,useContext } from 'react';
import { useHistory } from "react-router-dom";
import ViewUserProfile from './ViewUserProfile';
import authContext from "../sharedComponents/authContext";
import Navbar from "../sharedComponents/Nav"
import DeleteUserProfile from "./DeleteUserProfile"



const UserProfileHome = () =>{
    const  authenticated = localStorage.getItem('user_id');
    console.log("USER IS:", authenticated );

    //Render Form to the user.
    return(
        <div>
        <Navbar/>
        <Tabs defaultActiveKey="My Profile" id="uncontrolled-tab-example">
            <Tab eventKey="Create" title="Create Meal Plan">
               
            </Tab>
            <Tab eventKey="My Profile" title="My Profile">
                <ViewUserProfile />
            </Tab>
            <Tab eventKey="Delete My Profile" title="Delete My Profile">
                <DeleteUserProfile/>
               
            </Tab>
        </Tabs>
        </div>
  
    )
}

export default UserProfileHome;