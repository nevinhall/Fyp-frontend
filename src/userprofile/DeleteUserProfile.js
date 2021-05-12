
import React, { useState } from 'react';
import {Row,Col,Image, Container,Button} from 'react-bootstrap';
import { useHistory } from "react-router-dom";

import deleteImage from "../Images/x.png"
import routeChange from "../sharedComponents/routeChange"
import HandleUserIDPost from "../sharedComponents/HandleUserIDPost"


const  DeleteMyProfile = (props) =>{
    const history = useHistory();
    const  authenticated = localStorage.getItem('user_id');

    const deleteUserProfile = async () => {
        const url = "http://127.0.0.1:5000/deluser"
       let res = await HandleUserIDPost(authenticated,url)

     
        routeChange(history,"/mainpage")

    }

    //Render Form to the user.
    return(
        <Container  className="mt-5">
        <Row>
        <Col>
            <Image src={deleteImage}thumbnail style={{width:200,height:250}}/>
        </Col> 

        <Col>
          <h1 className={"display-6"}>Delete My Profile</h1>
          <p className="text-justify lead">
             You can delete your user profile from here at any time. Dont worry you'll still
             be able to log in with the same credentials you'll just have to create a new profile
             before getting started ✔
          </p>

          <Button variant="danger" onClick={deleteUserProfile}>Delte My Profile</Button>
        </Col>
      
      </Row>
  </Container>
    
    )
}

export default DeleteMyProfile;