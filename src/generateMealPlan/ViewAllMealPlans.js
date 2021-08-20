import { Button,Card,ListGroup} from 'react-bootstrap';
import React, { useState,useEffect } from 'react';

import HandleUserIDPost  from "../sharedComponents/HandleUserIDPost"

const ViewAllMealPlans =  () =>{
    const  authenticated = localStorage.getItem('user_id');
    console.log("USER IS:", authenticated );
    const axios = require('axios').default;

    const [allPlans, setAllPlans] = useState([]);
    const url = "http://127.0.0.1:5000/get_meal_plan"




    useEffect(async () => {
        let res = await HandleUserIDPost(authenticated, url)
        if (res == "failure"){
            setAllPlans([])
        }else{
            setAllPlans(res)
        }
     
    }, []);




    const setToCurrentMealPlan = async (meal_id) => {
        
        const setNewPlan = "http://127.0.0.1:5000/set_current_user_meal_plan"
        var bodyFormData = new FormData();

        bodyFormData.append("user_id",authenticated);
        bodyFormData.append("meal_plan_id",meal_id);

        const result =  axios.post(setNewPlan,bodyFormData,{headers : {"Access-Control-Allow-Origin": "*"}})
    
        HandleUserIDPost(authenticated,url)
        window.location.reload();
        
    }



    return(
        <div>
        {allPlans.length > 0  ? allPlans.map((mealplan) => (

         <Card>
         <Card.Body>
         <Card.Title><h2>{mealplan.ID}</h2></Card.Title>
         <h2>Number of Meals: {mealplan.mealplan.length}</h2>
         <Card.Text>

         <ListGroup>
         {mealplan.mealplan.map((meal) => {
                 return  <ListGroup.Item>{meal.Meal}</ListGroup.Item>
                
            })}
        </ListGroup>
            
        
         </Card.Text>
         </Card.Body>
         <Card.Footer>
             <Button variant="primary" onClick={() => setToCurrentMealPlan(mealplan.ID)}>View</Button>
         </Card.Footer>
     </Card>
        )): "Loading"}
     </div>
    )

}

export default ViewAllMealPlans;