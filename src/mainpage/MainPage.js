import { Button, CardGroup,Card,Modal,Row,Col,Container} from 'react-bootstrap';
import React, { useState,useContext,useEffect } from 'react';
import { useHistory } from "react-router-dom";

//Import Required Components.
import CardComponent from "../sharedComponents/CardComponent"
import authContext from "../sharedComponents/authContext";
import routeChange from "../sharedComponents/routeChange"
import GenerateExercisePlanHome  from "../generateExercisePlan/GenerateExcercisePlanHome"
import HandleUserIDPost  from "../sharedComponents/HandleUserIDPost"
import UserProfileForm from '../sharedComponents/UserProfileForm';
import Navbar from "../sharedComponents/Nav"

import workout from "../Images/workout.png"
import food from "../Images/food.png"
import userprofile from "../Images/userprofile.png"


const MainPage = () =>{
    const authenticated = localStorage.getItem('user_id');
    console.log("USER IS:", authenticated );
    const history = useHistory();

    const url = "http://127.0.0.1:5000/getuserprofile"

    useEffect(async () => {
      console.log("use effect");
      var res = await HandleUserIDPost(authenticated, url)


      console.log("This is res", res);
        

        if(!res){
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
    
      <Navbar/>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{color:"red"}}>Warning</Modal.Title>
        </Modal.Header>
        <p className="m-3">
        You have not yet created a user profile. Please create one first before procceding.
        </p>
        <Modal.Footer>
          <Button variant="primary" onClick={handleVisit}>
            Create Profile Now
          </Button>
        </Modal.Footer>
      </Modal>



      <Container className="mt-5">
            <Row>
              <Col>
                  <CardGroup>
            
                      <CardComponent
                    
                      title={"Exercise Plan"} 
                      data={"View or generate your exercise plans here"}
                      link={"/generatehxcercisePlanhome"}
                      image={workout}
                      />

                      <CardComponent   
                      title={"User Profile"} 
                      data={"View. amenend or create your user profile here"}
                      link={"/userprofilehome"}
                      image={userprofile}
                    />

                      <CardComponent   
                      title={"Meal Plan"} 
                      data={"View or generate your meal plans here"}
                      link={"/generatemealplanhome"}
                      image={food}
                    />
              
                </CardGroup>
              
              </Col> 

              <Col xs="5" className="mt-5">
                <h1 className={"display-6"}> Main Page</h1>
                <p className="text-justify lead">
                   Well done, you've taken the first steps in living a healthier and happier lifstyle.
                   From here you can naviagte through the various factors of the application as seen on the 
                   left. 
                </p>
              </Col>
            
            </Row>
        </Container>
        </div>
    )
}

export default MainPage;