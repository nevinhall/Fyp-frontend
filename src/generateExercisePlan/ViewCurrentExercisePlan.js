import { Button, CardGroup,Card,Tabs,Tab} from 'react-bootstrap';
import React, { useState,useContext,useEffect} from 'react';
import { useHistory } from "react-router-dom";

import authContext from "../sharedComponents/authContext";
import HandleUserIDPost  from "../sharedComponents/HandleUserIDPost"

const ViewCurrentExercisePlan = () =>{
    const  authenticated = localStorage.getItem('user_id');
    const [allPlans, setAllPlans] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const url = "http://127.0.0.1:5000/get_user_current_exercise_plan"
    const axios = require('axios').default;

  
    useEffect(() => {
        const fetchData = async () =>{
            var bodyFormData = new FormData();
            bodyFormData.append("user_id",authenticated);
            const result = await axios.post(url,bodyFormData,{headers : {"Access-Control-Allow-Origin": "*"}})

             setAllPlans(result.data.exercise_plan)
             console.log(allPlans);
             setIsLoaded(true)
            
         
        }

        fetchData()
      }, []);
  

    return(
        <div>
        <div>
            {allPlans.length > 0 ? allPlans[0].map( (exercise) => (
            //    <p>{meal.Meal}</p>
              
                <Card>
                <Card.Body>
                <Card.Title><h2>{exercise.name}</h2></Card.Title>
                <Card.Text>
                     <h3>Type:</h3>
                    <h4>{exercise.type}</h4>
                    <h3>Reps:</h3>
                    <h4>{exercise.reps}</h4>

                    <p>{exercise.desciption}</p>
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                   
                </Card.Footer>
            </Card>
           )): 'Fetching...'}
        </div>

        <div>
        {allPlans.length > 0 ?  <Card>
                    <Card.Body>
                    <Card.Title><h2>{allPlans[1].name}</h2></Card.Title>
                    <Card.Text>
                        <h3>Type:</h3>
                        <h4>{allPlans[1].type}</h4>
                        <h3>Reps:</h3>
                        <h4>{allPlans[1].reps}</h4>

                        <p>{allPlans[1].desciption}</p>
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                   
                </Card.Footer>
            </Card> : ''}
        </div> 
        </div>
    )
    

    //Render Form to the user.
    
    
}

export default ViewCurrentExercisePlan;