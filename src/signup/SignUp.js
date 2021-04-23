import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

import Form from "../sharedComponents/Form"
import routeChange from "../sharedComponents/routeChange"
import HandleFormData from "../sharedComponents/HandleFormData"
import {Container,Col,Row} from 'react-bootstrap';

const SignUp = () =>{
    //Define hooks to store data.
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const history = useHistory();

    //Handlers.
    const handleSubmit = async (e) =>{
    	e.preventDefault()
      
        const  url="http://127.0.0.1:5000/signup"
        const rediectTo="/login"

        const res = await HandleFormData(email,password,url,rediectTo)

        if(res !== "failure"){
            routeChange(history,"/login")
        }
        else{
            window.location.reload();
        }
    
    }

    //Render Form to the user.
    return(
        <Container >
        <Row className="justify-content-md-center p-5">
             <h1 className={"display-4"}>Sign Up</h1>
        </Row>
        <Row className="justify-content-md-center"> 
            <Form 
                handleSubmit={handleSubmit}
                setEmail={setEmail}
                setPassword={setPassword}
            />
        </Row>
    </Container>
    )
}

export default SignUp;