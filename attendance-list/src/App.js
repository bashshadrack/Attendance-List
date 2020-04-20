import React from "react";
import "./App.css";
import LandingPage from "./component/LandingPage";
import EmployeeSignUp from "./component/EmployeeSignUp";
import CompanyLogin from "./component/CompanyLogin";
import SignUp from "./component/SignUp";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/employeesignup" component={EmployeeSignUp} />
          <Route path="/login" component={CompanyLogin} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
