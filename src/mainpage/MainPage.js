import { Button, CardGroup,Card,Modal} from 'react-bootstrap';
import React, { useState,useContext,useEffect } from 'react';
import { useHistory } from "react-router-dom";

//Import Required Components.
import CardComponent from "../sharedComponents/CardComponent"
import authContext from "../sharedComponents/authContext";
import routeChange from "../sharedComponents/routeChange"
import GenerateExercisePlanHome  from "../generateExercisePlan/GenerateExcercisePlanHome"
import HandleUserIDPost  from "../sharedComponents/HandleUserIDPost"
import UserProfileForm from '../sharedComponents/UserProfileForm';

const MainPage = () =>{
    const authenticated = localStorage.getItem('user_id');
    console.log("USER IS:", authenticated );
    const history = useHistory();

    const url = "http://127.0.0.1:5000/getuserprofile"

    useEffect(async () => {
      console.log("use effect");
      var res = await HandleUserIDPost(authenticated, url)


      console.log("This is res", res);
        

        if(res == "None"){
          setShow(true)
         
        }
    }, []);



    const [userProfile, setUserProfile] = useState("You have Not created a user profile yet");
    const [show, setShow] = useState(false);

    const handleVisit = () => {
      setShow(false);
      routeChange(history,"/userprofileform")
    }

    const handleClose = () => {
      setShow(false);
    }
    


    //Render Form to the user.
    return(
      <div>
    
     
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Warning</Modal.Title>
        </Modal.Header>
        You have not yet created a user profile. Please create one first before procceding.
        <Modal.Footer>
          <Button variant="primary" onClick={handleVisit}>
            Creat Profile Now
          </Button>
        </Modal.Footer>
      </Modal>
    
    
    

          
        <CardGroup>
       
            <CardComponent
             title={"Exercise Plan"} 
             data={"View or generate your exercise plans here"}
             link={"/generatehxcercisePlanhome"}
            />

            <CardComponent   
             title={"User Profile"} 
             data={"View. amenend or create your user profile here"}
             link={"/userprofilehome"}
           />

            <CardComponent   
             title={"Meal Plan"} 
             data={"View or generate your meal plans here"}
             link={"/generatemealplanhome"}
           />
        
        </CardGroup>
        </div>
    )
}

export default MainPage;