import {Row,Col,Container,ListGroup,Card,Button,Nav,Form} from 'react-bootstrap';
import React, {useEffect,useState} from 'react';
import { useHistory } from "react-router-dom";
import HandleGet from '../sharedComponents/HandleGet';


const Admin = () =>{
    const  authenticated = localStorage.getItem('user_id');
    console.log("USER IS:", authenticated );
    const history = useHistory();
    const axios = require('axios').default;

    const getAllMeals = "http://127.0.0.1:5000/get_all_meals"
    const [meals, setMeals] = useState([]);

    const getAllExercises= "http://127.0.0.1:5000/get_all_exercises"
    const [exercises, setExercises] = useState([]);

    const getAllusers = "http://127.0.0.1:5000/get_num_users"
    const [users, setUsers] = useState(0);

    const getGenderMale = "http://127.0.0.1:5000/get_num_users_gender"
    const [genderMale, setGenderMale] = useState(0);


    const getGenderFemale = "http://127.0.0.1:5000/get_num_users_gender"
    const [genderFemale, setGenderFemale] = useState(0);




    useEffect(async () => {
        let resGetMeals = await HandleGet(getAllMeals)
        if (resGetMeals == "failure"){
            setMeals([])
        }else{
            setMeals(resGetMeals)
        }

        console.log("Fetched Measl Admin:",meals);


        let resGetExercises = await HandleGet(getAllExercises)
        if (resGetExercises == "failure"){
            setExercises([])
        }else{
            setExercises(resGetExercises)
        }


        let resNumUsers = await HandleGet(getAllusers)
        if (resNumUsers== "failure"){
            setUsers(0)
        }else{
            setUsers(resNumUsers)
        }



        var genderMaleFormData = new FormData();
        genderMaleFormData.append("gender","male");
        const genderMaleResult = await axios.post(getGenderMale,genderMaleFormData,{headers : {"Access-Control-Allow-Origin": "*"}})
    

        if(!genderMaleResult.data){
            setGenderMale(0)
        }else{
            setGenderMale(genderMaleResult.data)
        }

        var genderFemaleFormData = new FormData();
        genderFemaleFormData.append("gender","female");
        const genderFemaleResult = await axios.post(getGenderFemale,genderFemaleFormData,{headers : {"Access-Control-Allow-Origin": "*"}})
 

        if(!genderFemaleResult.data){
            setGenderFemale(0)
        }else{
            setGenderFemale(genderFemaleResult.data)
        }
        
    }, []);




    const [meal, setMealName]= useState("");
    const [protein, setProtein]= useState(0.0);
    const [carbs, setCarbs]= useState(0.0);
    const [fats, setFats]= useState(0.0);
    const [calories, setCalories]= useState(0);
    const [youtubeLink, setYoutubeLink]= useState("");
    const [mealInstructions, setMealInstructions]= useState("");
    const [mealArea, setMealArea]= useState("");
    const [vegatarianMeal,setVegatarianMeal]= useState("");

    const [exerciseName,setExerciseName]= useState("");
    const [exerciseDescription,setExerciseDescription]= useState("");
    const [exerciseType, setExerciseType]= useState("strength");

    const [deleteExercise, setDeleteExercise] = useState("");
    const [deleteMeal, setDeleteMeal]= useState("");

    
    const onChangeMealName = (e) => {setMealName(e.target.value)}

    const onChangeProtein= (e) => {setProtein(e.target.value)}

    const onChangeCarbs = (e) => {setCarbs(e.target.value)}

    const onChangeFats = (e) => {setFats(e.target.value)}

    const onChangeYoutube = (e) => {setYoutubeLink(e.target.value)}

    const onChangeMealInstructions = (e) => {setMealInstructions(e.target.value)}

    const onChangeMealArea = (e) => {setMealArea(e.target.value)}

    const onChangeVegatairan = (e) => {
        var checkBox = document.getElementById("isVegatarian");
        if (checkBox.checked == true){
            setVegatarianMeal("Vegatarian")
          } else {
            setVegatarianMeal("")
          } 
    }

    //Onclick Handlers.
    const onChangeExerciseName = (e) => {setExerciseName(e.target.value)}

    const onChangeExerciseDescription = (e) => {setExerciseDescription(e.target.value)}

    const onChangeExerciseType = (e) => {setExerciseType(e.target.value)}

    const onChangeCalories = (e) => {setCalories(e.target.value)}

    const onChangeMealDelete = (e) => {setDeleteMeal(e.target.value)}

    const onChangeExerciseDelete = (e) => {setDeleteExercise(e.target.value)}


    //OnSubmit Handlers.
    const onSubmitExerciseDelete = async () => {
        var bodyFormData = new FormData();
        bodyFormData.append("exercise_name", deleteExercise)

        await axios.post("http://127.0.0.1:5000/del_exercise",bodyFormData,{headers : {"Access-Control-Allow-Origin": "*"}}) 

    }


    const onSubmitMealDelete = async () => {
        var bodyFormData = new FormData();
        bodyFormData.append("meal_id", deleteMeal)

        await axios.post("http://127.0.0.1:5000/del_meal",bodyFormData,{headers : {"Access-Control-Allow-Origin": "*"}})
        
    }


    const onSubmitMeal = async () =>{
        var bodyFormData = new FormData();
        bodyFormData.append("Meal", meal)
        bodyFormData.append("Protein", protein)
        bodyFormData.append("Carbs",carbs)
        bodyFormData.append("Fats",fats)
        bodyFormData.append("calories",calories)
        bodyFormData.append( "Category",vegatarianMeal)
        bodyFormData.append( "strArea",mealArea)
        bodyFormData.append( "strInstructions",mealInstructions)
        bodyFormData.append("strYoutube",youtubeLink)
      

        await axios.post("http://127.0.0.1:5000/create_meal",bodyFormData,{headers : {"Access-Control-Allow-Origin": "*"}})
       
    }



    const onSubmitExercise = async () =>{

        var bodyFormData = new FormData();
     
        bodyFormData.append("name",exerciseName)
        bodyFormData.append("deciption",exerciseDescription)
        bodyFormData.append("type",exerciseType)
        
        await axios.post("http://127.0.0.1:5000/create_exercise",bodyFormData,{headers : {"Access-Control-Allow-Origin": "*"}})
       
     
    }


    //Render Form to the user.
    return(
        <div>

            <Nav className="justify-content-end mb-5" style={{backgroundColor:"black"}} activeKey="/home">
                <Nav.Item>
                <Nav.Link href="/" style={{color:"white"}}>Log out</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link href="http://localhost:3000/d/rYdddlPWk/node-exporter-full?orgId=1&refresh=1m" style={{color:"white"}}>Backend Metrics</Nav.Link>
                </Nav.Item>
            </Nav>
            <Container fluid>
            <Row className="mb-5">
                <Col>
                    <h4 className={"display-6"}>Number of Males 🕺</h4>
                    <p className="text-justify lead">
                        There are currently <strong>{genderMale > 0 ? genderMale : 0}</strong> number of males registered 
                        with the system.
                    </p>
                </Col>
                <Col>
                    <h4 className={"display-6"}>Total users 🌍</h4>
                    <p className="text-justify lead">
                        There are currently <strong>{users > 0 ? users : 0}</strong> number of total users registered 
                        with the system.
                    </p>
                </Col>
                <Col>
                    <h4 className={"display-6"}>Number of Females 💃</h4>
                    <p className="text-justify lead">
                        There are currently <strong>{genderFemale > 0 ? genderFemale : 0}</strong> number of total Females registered 
                        with the system.
                    </p>
                </Col>
                
            </Row>
            <Row>
                <Col>
                    <Form onSubmit={onSubmitMeal}>  
                    <Form.Group controlId="meal">
                        <Form.Label>Meal Name 🦒</Form.Label>
                        <Form.Control type="text" placeholder="Pancakes" onChange={onChangeMealName} />
                        <Form.Text className="text-muted">
                             Please Enter the name of the meal.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="protein">
                        <Form.Label>Protein 🥩</Form.Label>
                        <Form.Control type="number" placeholder="0.5" onChange={onChangeProtein} />
                        <Form.Text className="text-muted">
                        Please Enter the decimal value of protein in this meal 
                        </Form.Text>
                    </Form.Group>

                    
                    <Form.Group controlId="carbs">
                        <Form.Label>Carbs 🥔</Form.Label>
                        <Form.Control type="number" placeholder="0.2" onChange={onChangeCarbs} />
                        <Form.Text className="text-muted">
                        Please Enter the decimal value of carbs in this meal 
                        </Form.Text>
                    </Form.Group>


                    <Form.Group controlId="calories">
                        <Form.Label>Calories</Form.Label>
                        <Form.Control type="number" placeholder="300" onChange={onChangeCalories} />
                        <Form.Text className="text-muted">
                        Please Enter the number of calories. 
                        </Form.Text>
                    </Form.Group>


                    
                    <Form.Group controlId="fats">
                        <Form.Label>Fats 🧁</Form.Label>
                        <Form.Control type="number" placeholder="0.3" onChange={onChangeFats} />
                        <Form.Text className="text-muted">
                        Please Enter the decimal value of fats in this meal 
                        </Form.Text>
                    </Form.Group>


                         
                    <Form.Group controlId="youtube">
                        <Form.Label>Youtube 📹</Form.Label>
                        <Form.Control type="text" placeholder=" " onChange={onChangeYoutube} />
                        <Form.Text className="text-muted">
                        Please Enter the youtube link.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="instructions">
                        <Form.Label>Meal instructions 📜</Form.Label>
                        <Form.Control type="text" placeholder="Add the eggs" onChange={onChangeMealInstructions} />
                        <Form.Text className="text-muted">
                        Please Enter the description in regards to preparing the meal
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="instructions">
                        <Form.Label>Meal Area 🌍</Form.Label>
                        <Form.Control type="text" placeholder="Ireland" onChange={onChangeMealArea} />
                        <Form.Text className="text-muted">
                        Please Enter the area from which the meal orginates 
                        </Form.Text>
                    </Form.Group>


                    <Form.Group controlId="isVegatarian" onChange={onChangeVegatairan}>
                     <Form.Check type="checkbox" label="Vegatarian 🌱" />
                    </Form.Group>
                        


                        
                    <Button variant="primary" type="submit" >
                        Submit
                    </Button>
                </Form>
                </Col>

                <Row>
                    <Col>
                        <Form onSubmit={onSubmitMealDelete}>  
                        <Form.Group controlId="meal_id">
                            <Form.Label>Meal ID</Form.Label>
                            <Form.Control type="text" placeholder="1a8yf8q90g" onChange={onChangeMealDelete} />
                            <Form.Text className="text-muted">
                                Please Enter the name of the meal to delete.
                            </Form.Text>
                        </Form.Group>

                        <Button variant="primary" type="submit" >
                            Delete
                        </Button>
                        </Form>
                     </Col>

                     <Col>
                        <Form onSubmit={onSubmitExerciseDelete}>  
                        <Form.Group controlId="exercise_id">
                            <Form.Label>Exercise name</Form.Label>
                            <Form.Control type="text" placeholder="Push Up" onChange={onChangeExerciseDelete} />
                            <Form.Text className="text-muted">
                                Please Enter the name of the exercise to delete.
                            </Form.Text>
                        </Form.Group>

                        <Button variant="primary" type="submit" >
                            Delete
                        </Button>
                        </Form>
                     </Col>
                </Row>

                
                <Col>
                <Form onSubmit={onSubmitExercise}>  
                    <Form.Group controlId="exercisename">
                        <Form.Label>Exercise Name 🏋️‍♂️</Form.Label>
                        <Form.Control type="text" placeholder="Pull Up" onChange={onChangeExerciseName} />
                        <Form.Text className="text-muted">
                             Please Enter the name of the exercise.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="exercisedescription">
                        <Form.Label>Exercise Description 📰</Form.Label>
                        <Form.Control type="text" placeholder="Pull from the wrists..." onChange={onChangeExerciseDescription} />
                        <Form.Text className="text-muted">
                        Please Enter a description of how to complete the workout.
                        </Form.Text>
                    </Form.Group>

                    
                    <Form.Group controlId="type">
                    <Form.Label>Type </Form.Label>
                        <Form.Control as="select" select onChange={e => onChangeExerciseType(e)}>
                            <option>strength</option>
                            <option>cardio</option>
                        </Form.Control>
                    </Form.Group>

                    
                    <Button variant="primary" type="submit" >
                        Submit
                    </Button>
                    </Form>
                
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
                                <h4>Meal ID:</h4>
                                <p><strong>{meal.idMeal}</strong></p>
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
                                <p>{exercise.deciption}</p>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                     </Card.Footer>
                    </Card>
                    )): 'Fetching...'}
                </Col>
            </Row>

         
            </Container>
        </div>
  
    )
}

export default Admin;