import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import Form from "../sharedComponents/Form"
import HandleFormData from "../sharedComponents/HandleFormData"

const SignUp = () =>{
    //Define hooks to store data.
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const history = useHistory();

    const routeChange = () =>{ 
      let path = "/login"; 
      history.push(path);
    }


    //Handlers.
    const handleSubmit = async (e) =>{
    	e.preventDefault()
      
        const  url="http://127.0.0.1:5000/signup"
        const rediectTo="/login"

        const res = await HandleFormData(email,password,url,rediectTo)

        if(res !== "failure"){
            routeChange()
        }
        else{
            window.location.reload();
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

export default SignUp;