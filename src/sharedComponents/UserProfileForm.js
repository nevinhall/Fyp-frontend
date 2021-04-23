import React, { useState,useContext} from 'react';
import { useHistory } from "react-router-dom";

import HandleCreateProfile from './HandleCreateProfile';
import authContext from "../sharedComponents/authContext";
import routeChange from './routeChange';
import { Container,Row,Col } from 'react-bootstrap';


const UserProfileForm = (props) =>{
    //Define hooks to store data.
    const [height, setHeight]= useState(0);
    const [weight, setWeight ]= useState(0);
    const [dietaryOptions, setDietaryOptions ]= useState("");
    const [allergies, setAllergies ]= useState("");
    const [gender, setGender ]= useState("");
    const [activityLevel, setActivityLevel ]= useState("");
    const [age, setAge ] = useState(0);
    const  authenticated = localStorage.getItem('user_id');

    
    const history = useHistory();

    const onSubmit = async (e) => {
        const url = "http://127.0.0.1:5000/createuserprofile"
        HandleCreateProfile(authenticated,height,weight,dietaryOptions,allergies,activityLevel,age,gender,url).then(routeChange(history,"/mainpage")
        )

    }

    const onChangeHeight = (e) => {
        console.log(e.target.value);
        setHeight(e.target.value)
        
     }
    

    const onChangeGender = (e) => {
        console.log(e.target.value);
        setGender(e.target.value)
        
     }
    

    const onChangeWeight = (e) => {
        console.log(e.target.value);
        setWeight(e.target.value)
    }

    const onChangeDietaryOptions = (e) => {
        console.log(e.target.value);
        setDietaryOptions(e.target.value)
    }


    const onChangeAllergies = (e) => {
        console.log(e.target.value);
        setAllergies(e.target.value)
    }


    const onChangeActivityLevel = (e) => {
        console.log(e.target.value);
        setActivityLevel(e.target.value)
    }

    const onChangeAge = (e) => {
        console.log(e.target.value);
        setAge(e.target.value)
    }



 
 
    //Render Form to the user.
    return(
        <Container  className="d-flex justify-content-around mt-5">
        <form onSubmit={onSubmit}>
            <Row>
            <label>
                <Col>
                Height:
                </Col>
                <Col>
                <input type="number" name="Height" id="Height"  onChange={onChangeHeight}/>
                </Col>
            </label>
            </Row>

            <Row>
            <label>
                <Col>
                Weight:
                </Col>
                <Col>
                <input type="number" name="Weight" id="Weight" onChange={onChangeWeight}/>
                </Col>
            </label>
            </Row>
            <Row>
                    
                <label>
                    <Col>
                        Activity level:
                    </Col>
                    <Col>
                        <input type="text" name="activity_level" id="activity_level"  onChange={onChangeActivityLevel}/>
                    </Col>
                </label>
            </Row>

            <Row>
            <label>
                <Col>
                     Dietary Options:
                </Col>
                <Col>
                    <input type="text" name="dietary_options" id="dietary_options"   onChange={onChangeDietaryOptions}/>
                </Col>
            </label>
            </Row>

            <Row>
            <label>
                <Col>
                      Gender:
                </Col>
                <Col>
                     <input type="text" name="gender" id="gender"   onChange={onChangeGender}/>
                </Col>
            </label>
            </Row>

            <Row>
            <label>
                <Col>
                Allergies:
                </Col>
                <Col>
                <input type="text" name="allergies" id="allergies"   onChange={onChangeAllergies}/>
                </Col>
            </label>
            </Row>

            <Row>
            <label>
                 <Col>
                      Age:
                </Col>
                <Col>
                  <input type="number" name="age" id="age"  onChange={onChangeAge}/>
                </Col>
            </label>
            </Row>
            <input type="submit" value="Submit" />
      </form>
      </Container>
    )
}

export default UserProfileForm;