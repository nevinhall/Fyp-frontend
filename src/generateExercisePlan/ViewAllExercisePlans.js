import { Button, CardGroup,Card,Tabs,Tab} from 'react-bootstrap';
import React, { useState,useContext,useEffect } from 'react';
import { useHistory } from "react-router-dom";

import HandleUserIDPost  from "../sharedComponents/HandleUserIDPost"
import authContext from "../sharedComponents/authContext";

const ViewAllExercisePlans =  () =>{
    const axios = require('axios').default;
    const  authenticated = localStorage.getItem('user_id');;
    console.log("USER IS:", authenticated );

    const [allPlans, setAllPlans] = useState([]);
    const url = "http://127.0.0.1:5000/get_exercise_plan"
    
    
 

    useEffect(() => {
        const fetchData = async () =>{
            var bodyFormData = new FormData();
            bodyFormData.append("user_id",authenticated);
            const result = await axios.post(url,bodyFormData,{headers : {"Access-Control-Allow-Origin": "*"}})


            console.log(result.data.exercise_plan);
            setAllPlans([])
        }

        fetchData()
      }, []);
  



    return <p>test</p>

}

export default ViewAllExercisePlans;