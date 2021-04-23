import React, { useState } from 'react';
import { Button, CardGroup,Card,Image} from 'react-bootstrap';
import { useHistory } from "react-router-dom";

import healthimage from "../Images/logo192.png"
import routeChange from "../sharedComponents/routeChange"


const  Landing = (props) =>{
    const history = useHistory();
    localStorage.clear()
    //Render Form to the user.
    return(
        <div className="d-flex justify-content-around m-5">
            <div className="w-50">
            <h1 className={"display-1"}>Welcome</h1>
            <p className="text-justify lead">
                Wether youre a complete novice or a nutrional guru you're in the right place!
                Our application allows you to create helaty nutrionous meals tailored to your needs
                aswell as simple to follow exercise plans. Ready ? Lets get started.
            </p>
            
                <Button className="p-3 m-3" size="lg" onClick={() => routeChange(history,"/login")}>Login</Button>
                <Button  className="p-3" size="lg"  onClick={() => routeChange(history,"/signup")}>Sign Up</Button>
            
            </div>
                <Image src={healthimage}thumbnail />
            <div>
              
            </div>
        </div>
    
    )
}

export default Landing;