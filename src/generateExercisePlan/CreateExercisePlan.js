import { Button,Image,Nav} from 'react-bootstrap';
import React from 'react';


import HandleUserIDPost  from "../sharedComponents/HandleUserIDPost"
import robot from "../Images/robot.png"


const CreateExercisePlan = () =>{
    const  authenticated = localStorage.getItem('user_id');
    const axios = require('axios').default;
    console.log("USER IS:", authenticated );

    const generateExercisePlan  = () => {
        const url = "http://127.0.0.1:5000/generateexerciseplan"
        let res =   HandleUserIDPost(authenticated,url)

        const setNewPlan = "http://127.0.0.1:5000/set_current_user_exercise_plan"
        var bodyFormData = new FormData();

        bodyFormData.append("user_id",authenticated);
        bodyFormData.append("exercise_plan_id",res.ID);

        const result =  axios.post(setNewPlan,bodyFormData,{headers : {"Access-Control-Allow-Origin": "*"}})
    
       
    
        window.location.reload();

    }
    //Render Page to the user.
    return(
    
        <div className="d-flex justify-content-center m-4">
        <div className="w-50 p-2">
            <Image src={robot}thumbnail style={{width:200,height:250}}/>
            <h2 className={"display-6"}> Generate Exercise Plan</h2>
            <p className="text-justify lead">
               We've captured your user profile now let our robots get to work on creating an exercise plan
               tailored to your needs. This done using a magic that relies on your bmi and activity level to return an a plan just 
               for you.
            </p>  

      <Button onClick={generateExercisePlan}>Generate Exercise Plan</Button>
    </div>
     </div>   
      )
    
}

export default CreateExercisePlan;