import { Button, CardGroup,Card,Tabs,Tab,ListGroup, ResponsiveEmbed} from 'react-bootstrap';
import React, { useState,useContext,useEffect} from 'react';
import { useHistory } from "react-router-dom";


import authContext from "../sharedComponents/authContext";
import HandleUserIDPost  from "../sharedComponents/HandleUserIDPost"
import MealCard from "../generateMealPlan/MealCard"

const ViewCurrentMealPlan = (props) =>{
    const  authenticated = localStorage.getItem('user_id');
    const [allPlans, setAllPlans] = useState([]);
    const url = "http://127.0.0.1:5000/get_user_current_meal_plan"
    const mealplanString = ""
    const axios = require('axios').default;
    
    const history = useHistory();



    useEffect(() => {
        const fetchData = async () =>{
            var bodyFormData = new FormData();
            bodyFormData.append("user_id",authenticated);
            const result = await axios.post(url,bodyFormData,{headers : {"Access-Control-Allow-Origin": "*"}})

            console.log(result);
            if(!result.data){
                setAllPlans([])
            }else{
                console.log("HERE");
                setAllPlans(result.data.mealplan)
            }
         
        }

        fetchData()
      }, []);
  

   
   
 
    //Render Form to the user.s
    console.log(typeof allPlans);
    console.log(allPlans);

    allPlans.forEach(element => {
        console.log(element);
    });
    return(
        <div>
           {allPlans.map( (meal) => (
            //    <p>{meal.Meal}</p>

            
              
            <Card>
            <Card.Body>
            <Card.Title><h2>{meal.Meal}</h2></Card.Title>
            <Card.Text>
            <ListGroup>
                <h3>Calories:</h3>
                <h4>{meal.calories}</h4>
                <h3>Macro Breakdown</h3>
                <ListGroup.Item>Protein: {meal.Protein}</ListGroup.Item>
                <ListGroup.Item>Fats: {meal.Fats}</ListGroup.Item>
                <ListGroup.Item>Carbs: {meal.Carbs}</ListGroup.Item>
                </ListGroup>
            </Card.Text>
            </Card.Body>
            <Card.Footer>
                <Button variant="primary" onClick={() => history.push({pathname: '/mealinfo',  name: meal.Meal,  area: meal.strArea, instructions: meal.strInstructions,youtube: meal.strYoutube})}>View {props.title}</Button>
            </Card.Footer>
        </Card>
           ))}
        </div>
  

    )
}

export default ViewCurrentMealPlan;


// useEffect(() => {
//     HandleUserIDPost(authenticated, url)
//     .then(allPlans => setAllPlans(() => allPlans))
//     .catch(() => setAllPlans("You have Not created any plans"));

    
// }, []);