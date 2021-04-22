import React, { useState } from 'react';
import { Button, CardGroup,Card,Image} from 'react-bootstrap';
import { useHistory } from "react-router-dom";

import routeChange from "../sharedComponents/routeChange"


const  Landing = (props) =>{
    const history = useHistory();
    //Render Form to the user.
    return(
        <div>
            <div className="w-50">
            <h1>Welcome</h1>
            <p className="text-justify">
                Wether youre a complete novice or a nutrional guru you're in the right place!
                Our application allows you to create helaty nutrionous meals tailored to your needs
                aswell as simple to follow exercise plans. Ready ? Lets get started.
            </p>
                <Button>Login</Button>
                <Button>Sign Up</Button>
            </div>
                <Image src="holder.js/171x180" thumbnail />
            <div>
              
            </div>
        </div>
    
    )
}

export default Landing;