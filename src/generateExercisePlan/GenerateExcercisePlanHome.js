import {Tabs,Tab} from 'react-bootstrap';
import React from 'react';

import CreateExercisePlan from "../generateExercisePlan/CreateExercisePlan"
import ViewCurrentExercisePlan from "../generateExercisePlan/ViewCurrentExercisePlan"
import ViewAllExercisePlans from "../generateExercisePlan/ViewAllExercisePlans"
import Navbar from "../sharedComponents/Nav"

const GenerateExercisePlanHome = () =>{
    const  authenticated = localStorage.getItem('user_id');
    console.log("USER IS:", authenticated );

    //Render to the user.
    return(
        <div>
        <Navbar/>
 
        <Tabs defaultActiveKey="Home" id="uncontrolled-tab-example" >
            <Tab eventKey="Create" title="Create Excercise Plan">
                 <CreateExercisePlan />
            </Tab>
            <Tab eventKey="Home" title="Home">
                <ViewCurrentExercisePlan />
            </Tab>
            <Tab eventKey="history" title="History">
                <ViewAllExercisePlans />
            </Tab>
        </Tabs>
        </div>
  
    )
}

export default GenerateExercisePlanHome;