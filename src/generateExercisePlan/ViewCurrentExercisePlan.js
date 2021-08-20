import {Card,Col,Row,Container} from 'react-bootstrap';
import React, { useState,useEffect} from 'react';

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

            if(!result.data){
              setAllPlans([])
            }else{
              setAllPlans(result.data.exercise_plan)
            }
             setIsLoaded(true)
        }

        fetchData()
      }, []);

      


    return(
        <Container fluid>
        <Row>
          <Col>
          <div>
          <div>
             {allPlans.length > 0 ? allPlans[0].map( (exercise) => (
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
            </div>

            <div>
            {allPlans.length > 0 ?  <Card>
                        <Card.Body>
                        <Card.Title className="mb-5"><h1>{allPlans[1].name}</h1></Card.Title>
                        <Card.Text>

                            <h4>The Facts:</h4>
                            <p>This exercise is of type <strong>{allPlans[1].type}</strong> we suggest to hit a minimum of<strong>{allPlans[1].reps}</strong> but if you can push harder go for it ! 
                            </p>

                            <h4>How its Done:</h4>
                            <p>{allPlans[1].desciption}</p>
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                    
                    </Card.Footer>
                </Card> : ''}
            </div> 

            
            </div>
          
          </Col>
          <Col>
            <div className="m-5">
            <h3 className={"display-4"}>Ta Da!</h3>
            <p className="text-justify lead">
                Here it is, your very own exercise plan tailored to your needs
                We recommend doing three rounds of these exercises once a day for 
                the week. Follow it closely along with your meal plan and you'll 
                be fit as a fiddle in no time.
            </p>
            </div>
          </Col>
        </Row>
      </Container>
    )

}


export default ViewCurrentExercisePlan;


