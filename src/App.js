// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import Login from "./login/Login"
import SignUp from "./signup/SignUp"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/signUp" exact component={SignUp} />
      </Switch>
    </Router>

  );
}

export default App;
