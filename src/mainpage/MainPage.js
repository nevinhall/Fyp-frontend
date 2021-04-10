import { Button, CardGroup,Card} from 'react-bootstrap';
import React, { useState,useContext } from 'react';
import { useHistory } from "react-router-dom";

//Import Required Components.
import CardComponent from "../sharedComponents/CardComponent"
import authContext from "../sharedComponents/authContext";
import GenerateExercisePlanHome  from "../generateExercisePlan/GenerateExcercisePlanHome"

const MainPage = () =>{
    const { authenticated } = useContext(authContext);
    console.log("USER IS:", authenticated );

    //Render Form to the user.
    return(
        <CardGroup>
       
            <CardComponent
             title={"Exercise Plan"} 
             data={"View or generate your exercise plans here"}
             link={"/generatehxcercisePlanhome"}
           />

            <CardComponent   
             title={"User Profile"} 
             data={"View. amenend or create your user profile here"}
             link={"/"}
           />

            <CardComponent   
             title={"Meal Plan"} 
             data={"View or generate your meal plans here"}
             link={"/"}
           />
        
        </CardGroup>
    )
}

export default MainPage;