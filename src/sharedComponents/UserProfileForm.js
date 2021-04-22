import React, { useState,useContext} from 'react';
import { useHistory } from "react-router-dom";

import HandleCreateProfile from './HandleCreateProfile';
import authContext from "../sharedComponents/authContext";
import routeChange from './routeChange';


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
        await HandleCreateProfile(authenticated,height,weight,dietaryOptions,allergies,activityLevel,age,gender,url)

        routeChange(history,"/mainpage")
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
        <form onSubmit={onSubmit}>
            <label>
                Height:
                <input type="number" name="Height" id="Height"  onChange={onChangeHeight}/>
            </label>

            <label>
                Weight:
                <input type="number" name="Weight" id="Weight" onChange={onChangeWeight}/>
            </label>

            <label>
                Activity level:
                <input type="text" name="activity_level" id="activity_level"  onChange={onChangeActivityLevel}/>
            </label>

            <label>
                Dietary Options:
                <input type="text" name="dietary_options" id="dietary_options"   onChange={onChangeDietaryOptions}/>
            </label>

            <label>
                Gender:
                <input type="text" name="gender" id="gender"   onChange={onChangeGender}/>
            </label>

            
            <label>
                Allergies:
                <input type="text" name="allergies" id="allergies"   onChange={onChangeAllergies}/>
            </label>

            
            <label>
                Age:
                <input type="number" name="age" id="age"  onChange={onChangeAge}/>
            </label>
            <input type="submit" value="Submit" />
      </form>
    )
}

export default UserProfileForm;