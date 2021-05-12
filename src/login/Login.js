import React, { useState,useContext} from 'react';
import { useHistory } from "react-router-dom";
import {Container,Col,Row} from 'react-bootstrap';

import Form from "../sharedComponents/Form"
import HandleFormData from "../sharedComponents/HandleFormData"
import authContext from "../sharedComponents/authContext";
import routeChange from "../sharedComponents/routeChange"


const Login = () =>{
    //Define hooks to store data.
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { setAuthenticated } = useContext(authContext);

    const history = useHistory();

    //Handlers.
    const handleSubmit = async (e) =>{
        e.preventDefault()
         
        const  url="http://127.0.0.1:5000/login"
        const rediectTo="/login"
        
        const res =  await HandleFormData(email,password,url,rediectTo)

        if (res == "failure"){
            // window.location.reload();
        }else{
            console.log("authenticated");
            setAuthenticated(res)
            localStorage.clear()
            localStorage.setItem('user_id', res);

            if(res == "admin1"){
                routeChange(history,"/admin")
            }else{
                routeChange(history,"/mainpage")
            }
           
        }

    
    }

    //Render Form to the user.
    return(
        <div>
        <Container >
            <Row className="justify-content-md-center p-5">
                 <h1 className={"display-4"}>Login</h1>
            </Row>
            <Row className="justify-content-md-center"> 
                <Form 
                    handleSubmit={handleSubmit}
                    setEmail={setEmail}
                    setPassword={setPassword}
                />
            </Row>
        </Container>
        </div>
   
    
    )
}

export default Login;


