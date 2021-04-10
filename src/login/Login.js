import React, { useState,useContext} from 'react';
import { useHistory } from "react-router-dom";

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
            window.location.reload();
        }else{
            console.log(res);
            setAuthenticated(res)
            routeChange(history,"/mainpage")
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