import { Button, CardGroup,Card,Tabs,Tab,ListGroup} from 'react-bootstrap';
import React, { useState,useContext,useEffect } from 'react';
import { useHistory } from "react-router-dom";

import HandleUserIDPost  from "../sharedComponents/HandleUserIDPost"
import authContext from "../sharedComponents/authContext";

const ViewAllMealPlans =  () =>{
    const  authenticated = localStorage.getItem('user_id');
    console.log("USER IS:", authenticated );

    const [allPlans, setAllPlans] = useState([]);
    const url = "http://127.0.0.1:5000/get_meal_plan"

    useEffect(async () => {
        let res = await HandleUserIDPost(authenticated, url)
        console.log(res);

        setAllPlans(res)
    }, []);



    return(
        <div>
        {allPlans.length > 0 ? allPlans.map((mealplan) => (
         //    <p>{meal.Meal}</p>
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
             <Button variant="primary" onClick={() => 1+1}>View</Button>
         </Card.Footer>
     </Card>
        )): "Loading"}
     </div>
    )

}

export default ViewAllMealPlans;