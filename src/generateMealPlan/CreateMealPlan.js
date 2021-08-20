import { Button,Image,Form} from 'react-bootstrap';
import React, { useState } from 'react';

import robot from "../Images/robot.png"

const CreateMealPlan = () =>{

    const  authenticated = localStorage.getItem('user_id');
    const axios = require('axios').default;
    console.log("USER IS:", authenticated );
    const [is_optimal,setIs_optimal] = useState(true);

    const onChangeOptimal = (e) => {
        if(e == "Yes"){
            setIs_optimal(true)
        }else{
            setIs_optimal(false)
        }

    }


    const generateMealPlan = async () => {
        console.log(is_optimal);
    
        const url = "http://127.0.0.1:5000/generatemealplan"
        var createMealFormData = new FormData();
        createMealFormData.append("user_id",authenticated);
        createMealFormData.append("is_optimal",is_optimal.toString());

        let res = await axios.post(url,createMealFormData,{headers : {"Access-Control-Allow-Origin": "*"}})
        
        const setNewPlan = "http://127.0.0.1:5000/set_current_user_meal_plan"
        var bodyFormData = new FormData();

        bodyFormData.append("user_id",authenticated);
        bodyFormData.append("meal_plan_id",res.data.ID);

        const result = await axios.post(setNewPlan,bodyFormData,{headers : {"Access-Control-Allow-Origin": "*"}})
    

        window.location.reload();
    }


    //Render to the user.
    return(
        <div className="d-flex justify-content-center m-4">
            <div className="w-50 p-2">
                <Image src={robot}thumbnail style={{width:200,height:250}}/>
                <h2 className={"display-6"}> Generate Meal Plan</h2>

                <Form.Group controlId="gender">
                <Form.Label>Optimal Meal Plan</Form.Label>
                    <Form.Control as="select" select onChange={e => onChangeOptimal(e)}>
                        <option>Yes</option>
                        <option>No</option>
                </Form.Control>
                </Form.Group>
         
                
                 

                <p className="text-justify lead">
                   We've captured your user profile now let our robots get to work on creating a meal plan
                   tailored to your needs. This done using a combinatorial alogrithm to ensure the plan is suitable.
                   Dont worry we've also calculated the optiaml calorie intake specifcally for you and your needs.
                </p>  
    
          <Button onClick={generateMealPlan}>Generate Meal Plan</Button>
        </div>
         </div>
    )
}

export default CreateMealPlan;