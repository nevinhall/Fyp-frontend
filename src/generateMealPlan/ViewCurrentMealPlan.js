import { Button,Card,ListGroup} from 'react-bootstrap';
import React, { useState,useContext,useEffect} from 'react';
import { useHistory } from "react-router-dom";

const ViewCurrentMealPlan = (props) =>{
    const  authenticated = localStorage.getItem('user_id');
    const [allPlans, setAllPlans] = useState([]);
    const url = "http://127.0.0.1:5000/get_user_current_meal_plan"
    const axios = require('axios').default;
    const history = useHistory();




    useEffect(() => {
        const fetchData = async () =>{
            var bodyFormData = new FormData();
            bodyFormData.append("user_id",authenticated);
            const result = await axios.post(url,bodyFormData,{headers : {"Access-Control-Allow-Origin": "*"}})

            if(!result.data){
                setAllPlans([])
            }else{
                setAllPlans(result.data.mealplan)
            }
         
        }

        fetchData()
      }, []);
  

    return(
        <div className="d-flex justify-content-around">
        <div className="w-75">
           {allPlans.length > 0 ? allPlans.map( (meal) => (
        
            <Card className="mt-5">
            <Card.Body>
            <Card.Title ><h3 className={"display-3"}>{meal.Meal}</h3></Card.Title>
            <Card.Text>
            <ListGroup>
                <h4>Calories:</h4>
                <p><strong>{meal.calories}</strong></p>
                <h4>Macro Breakdown</h4>
                <ListGroup.Item>Protein 🥩: <strong>{meal.Protein}</strong></ListGroup.Item>
                <ListGroup.Item>Fats 🍬: <strong>{meal.Fats}</strong></ListGroup.Item>
                <ListGroup.Item>Carbs 🥔:  <strong>{meal.Carbs}</strong></ListGroup.Item>
                </ListGroup>
            </Card.Text>
            </Card.Body>
            <Card.Footer>
                <Button variant="primary" onClick={() => history.push({pathname: '/mealinfo',  name: meal.Meal,  area: meal.strArea, instructions: meal.strInstructions,youtube: meal.strYoutube})}>View {props.title}</Button>
            </Card.Footer>
        </Card>
           )) : "Fetching"}
        </div>
        </div>
  

    )
}

export default ViewCurrentMealPlan;


// useEffect(() => {
//     HandleUserIDPost(authenticated, url)
//     .then(allPlans => setAllPlans(() => allPlans))
//     .catch(() => setAllPlans("You have Not created any plans"));

    
// }, []);