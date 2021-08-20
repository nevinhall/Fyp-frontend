import {Tabs,Tab} from 'react-bootstrap';
import React from 'react';

import CreateMealPlan from "../generateMealPlan/CreateMealPlan"
import ViewAllMealPlans from "../generateMealPlan/ViewAllMealPlans"
import ViewCurrentMealPlan from "../generateMealPlan/ViewCurrentMealPlan"
import Navbar from "../sharedComponents/Nav"

const GenerateMealPlanHome = () =>{

    const  authenticated = localStorage.getItem('user_id');

    //Render to the user.
    return(
        <div>
        <Navbar/>
        <Tabs defaultActiveKey="Home" id="uncontrolled-tab-example">
            <Tab eventKey="Create" title="Create Meal Plan">
                 <CreateMealPlan authenticated={authenticated}/>
            </Tab>
            <Tab eventKey="Home" title="Home">
                <ViewCurrentMealPlan authenticated={authenticated} />
            </Tab>
            <Tab eventKey="history" title="History">
                <ViewAllMealPlans authenticated={authenticated}/>
            </Tab>
        </Tabs>
        </div>
  
    )
}

export default GenerateMealPlanHome;