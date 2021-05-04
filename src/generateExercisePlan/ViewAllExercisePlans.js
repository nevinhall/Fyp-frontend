import { Button, CardGroup,Card,ListGroup} from 'react-bootstrap';
import React, { useState,useContext,useEffect } from 'react';
import { useHistory } from "react-router-dom";

import HandleUserIDPost  from "../sharedComponents/HandleUserIDPost"
import authContext from "../sharedComponents/authContext";

const ViewAllExercisePlans =  () =>{
    const  authenticated = localStorage.getItem('user_id');
    console.log("USER IS:", authenticated );
    const axios = require('axios').default;

    const [allPlans, setAllPlans] = useState([]);
    const url = "http://127.0.0.1:5000/get_exercise_plan"

    useEffect(async () => {
        let res = await HandleUserIDPost(authenticated, url)
        console.log(res);
        if (res == "failure"){
            setAllPlans([])
        }else{
            setAllPlans(res)
        }
        console.log(res);

     
    }, []);


    const setToCurrentExercisePlan = async (exercise_plan_id) => {
        
        const setNewPlan = "http://127.0.0.1:5000/set_current_user_exercise_plan"
        var bodyFormData = new FormData();

        bodyFormData.append("user_id",authenticated);
        bodyFormData.append("exercise_plan_id",exercise_plan_id);

        const result =  axios.post(setNewPlan,bodyFormData,{headers : {"Access-Control-Allow-Origin": "*"}})
    
       
        HandleUserIDPost(authenticated,url)
        window.location.reload();
        
    }




    return(
      
        <div>  
        {allPlans.length > 0  ? allPlans.map((exerciseplan) => (
         //    <p>{meal.Meal}</p>
         <Card>
         <Card.Body>
         <Card.Title><h2>{exerciseplan.ID}</h2></Card.Title>
         <h2>Number of Exercises: {exerciseplan.exercise_plan.length + 1}</h2>
         <Card.Text>

         <ListGroup>
         {exerciseplan.exercise_plan[0].map((workout) => {
                 return  <ListGroup.Item>{workout.name}</ListGroup.Item>
                
            })}

            {exerciseplan.exercise_plan.map((workout) => {
                    return  <ListGroup.Item>{workout.name}</ListGroup.Item>
                
            })} 
            </ListGroup>
                
        
         </Card.Text>
         </Card.Body>
         <Card.Footer>
            <Button variant="primary" onClick={() => setToCurrentExercisePlan(exerciseplan.ID)}>View</Button>
         </Card.Footer>
     </Card>
        )): "Loading"}
     </div>
    )

}

export default ViewAllExercisePlans;