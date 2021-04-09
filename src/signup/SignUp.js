// import { Button, Form} from 'react-bootstrap';
import React, { useState } from 'react';
import Form from "../sharedComponents/Form"
import HandleFormData from "../sharedComponents/HandleFormData"

const SignUp = () =>{
    //Define hooks to store data.
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    //Handlers.
    const handleSubmit = async (e) =>{
    	e.preventDefault()
      
        const  url="http://127.0.0.1:5000/signup"
        const rediectTo="/login"


        const res = await HandleFormData(email,password,url,rediectTo)

        if(res != "failure"){

            console.log("signup success");
        }
        else{
            return(
                <Form
                     handleSubmit={handleSubmit}
                     setEmail={setEmail}
                     setPassword={setPassword}
                />
            )

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