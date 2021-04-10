// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import React, { useState } from "react";

//Import required components.
import Login from "./login/Login"
import SignUp from "./signup/SignUp"
import MainPage from "./mainpage/MainPage"
import authContext from "./sharedComponents/authContext";
import GenerateExcercisePlanHome from "./generateExercisePlan/GenerateExcercisePlanHome"


function App() {
  const [authenticated, setAuthenticated] = useState("");

  return (
    <authContext.Provider value={{ authenticated, setAuthenticated }}>
    <Router>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/signUp" exact component={SignUp} />
        <Route path="/mainpage" exact component={MainPage} />
        <Route path="/generatehxcercisePlanhome" exact component={GenerateExcercisePlanHome} />
      </Switch>
    </Router>
    </authContext.Provider>
  );
}

export default App;
