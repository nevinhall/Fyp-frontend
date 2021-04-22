// import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import React, { useState } from "react";

//Import required components.
import Login from "./login/Login"
import SignUp from "./signup/SignUp"
import MainPage from "./mainpage/MainPage"
import authContext from "./sharedComponents/authContext";
import GenerateExcercisePlanHome from "./generateExercisePlan/GenerateExcercisePlanHome"
import GenerateMealPlanHome from "./generateMealPlan/GenerateMealPlanHome"
import UserProfileHome from './userprofile/UserProfileHome';
import UserProfileForm from './sharedComponents/UserProfileForm';
import AdditionalInfo from './generateMealPlan/AdditionalInfo';
import Landing from './landingpage/Landing';



function App() {
  const [authenticated, setAuthenticated] = useState("");

  return (
    <authContext.Provider value={{ authenticated, setAuthenticated }}>
    <Router>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/login" exact component={Login} />
        <Route path="/signUp" exact component={SignUp} />
        <Route path="/mainpage" exact component={MainPage} />
        <Route path="/generatehxcercisePlanhome" exact component={GenerateExcercisePlanHome} />
        <Route path="/generatemealplanhome" exact component={GenerateMealPlanHome} />
        <Route path="/userprofilehome" exact component={UserProfileHome} />
        <Route path="/userprofileform" exact component={UserProfileForm} />
        <Route path="/mealinfo" exact component={AdditionalInfo} />
      </Switch>
    </Router>
    </authContext.Provider>
  );
}

export default App;
