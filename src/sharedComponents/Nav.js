import React, { useState } from 'react';
import { Button, CardGroup,Card,Image,Nav} from 'react-bootstrap';
import { useHistory } from "react-router-dom";

import healthimage from "../Images/logo192.png"
import routeChange from "../sharedComponents/routeChange"


const  Navbar = (props) =>{
    const history = useHistory();
    //Render Form to the user.
    return(
        <Nav className="justify-content-end" style={{backgroundColor:"black"}} activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/mainpage"  style={{color:"white"}}><strong>Home</strong></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/" style={{color:"red"}}><strong>log out</strong></Nav.Link>
        </Nav.Item>
      </Nav>
    
    )
}

export default Navbar;












