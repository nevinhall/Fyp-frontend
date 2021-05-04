import {Row,Col,Container,ListGroup,Card,Button,Nav} from 'react-bootstrap';
import React, {useEffect,useState} from 'react';
import { useHistory } from "react-router-dom";
import authContext from "../sharedComponents/authContext";
import Navbar from "../sharedComponents/Nav"
import HandleGet from '../sharedComponents/HandleGet';




const Admin = () =>{
    const  authenticated = localStorage.getItem('user_id');
    console.log("USER IS:", authenticated );
    const history = useHistory();

    const getAllMeals = "http://127.0.0.1:5000/get_all_meals"
    const [meals, setMeals] = useState([]);

    const getAllExercises= "http://127.0.0.1:5000/get_all_exercises"
    const [exercises, setExercises] = useState([]);

    

    useEffect(async () => {
        let resGetMeals = await HandleGet(getAllMeals)
        if (resGetMeals == "failure"){
            setMeals([])
        }else{
            setMeals(resGetMeals)
        }


        let resGetExercises = await HandleGet(getAllExercises)
        if (resGetExercises == "failure"){
            setExercises([])
        }else{
            setExercises(resGetExercises)
        }
       
       

     
    }, []);


    //Render Form to the user.
    return(
        <div>

            <Nav className="justify-content-end mb-5" style={{backgroundColor:"black"}} activeKey="/home">
                <Nav.Item>
                <Nav.Link href="/" style={{color:"white"}}>Log out</Nav.Link>
                </Nav.Item>
            </Nav>
            <Container fluid>
            <Row className="mb-5">
                <Col>
                    <h4 className={"display-6"}>Number of Males 🕺</h4>
                    <p className="text-justify lead">
                        There are currently <strong>x</strong> number of males registered 
                        with the system.
                    </p>
                </Col>
                <Col>
                    <h4 className={"display-6"}>Total users 🌍</h4>
                    <p className="text-justify lead">
                        There are currently <strong>x</strong> number of total users registered 
                        with the system.
                    </p>
                </Col>
                <Col>
                    <h4 className={"display-6"}>Number of Females 💃</h4>
                    <p className="text-justify lead">
                        There are currently <strong>x</strong> number of total Females registered 
                        with the system.
                    </p>
                </Col>
                
            </Row>
            <Row className="h-50">
                <Col>  
                    <div>
                    <div >
                        {meals.length > 0 ? meals.map( (meal) => (
                            <Card>
                            <Card.Body>
                            <Card.Title ><h3 className={"display-6"}>{meal.Meal}</h3></Card.Title>
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
                                <Button variant="primary" onClick={() => history.push({pathname: '/mealinfo',  name: meal.Meal,  area: meal.strArea, instructions: meal.strInstructions,youtube: meal.strYoutube})}>View More</Button>
                            </Card.Footer>
                        </Card>
                        )) : "Fetching"}
                    </div>
                    </div>
                 </Col>


                <Col>  
                 {exercises.length > 0 ? exercises.map( (exercise) => (
                    <Card>
                        <Card.Body>
                        <Card.Title className="mb-5"><h1>{exercise.name}</h1></Card.Title>
                            <Card.Text>

                                <h4>The Facts:</h4>
                                <p>This exercise is of type <strong>{exercise.type}</strong> we suggest to hit a minimum of<strong>{exercise.reps}</strong> but if you can push harder go for it ! 
                                </p>

                                <h4>How its Done:</h4>
                                <p>{exercise.desciption}</p>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                     </Card.Footer>
                    </Card>
                    )): 'Fetching...'}
                </Col>
            </Row>

            <Row>
                <Col>Create meal plans</Col>
                <Col>Create exercise plans</Col>
            </Row>
            </Container>
        </div>
  
    )
}

export default Admin;