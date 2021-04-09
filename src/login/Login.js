// import { Button, Form} from 'react-bootstrap';
import React, { useState } from 'react';
import Form from "../sharedComponents/Form"
import HandleFormData from "../sharedComponents/HandleFormData"

const Login = () =>{
    //Define hooks to store data.
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    //Handlers.
    const handleSubmit = async (e) =>{
        e.preventDefault()
         
        const  url="http://127.0.0.1:5000/login"
        const rediectTo="/"
        
        const res =  await HandleFormData(email,password,url,rediectTo)

        if (res == "login failed"){
            console.log("failed to login redirecting now");
        }else{
            console.log(res);
        }

    
    }

    //Render Form to the user.
    return(
        <Form
             handleSubmit={handleSubmit}
             setEmail={setEmail}
             setPassword={setPassword}
        />
    )
}

export default Login;