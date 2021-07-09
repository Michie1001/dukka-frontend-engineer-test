import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css'; 

import Header from './components/Header';
import Create from './components/CreateEmployee';
import List from './components/ListEmployee';
import Details from './components/EmployeeDetails';

function App() {
  const {v4: uuidv4} = require('uuid'); //for unique ids

  const LOCAL_STORAGE_KEY = "employees";

  const [employees, setEmployees] = useState([]);
  const addEmployeeHandler = (employee) => {
    console.log(employee);
    setEmployees([...employees, {id: uuidv4(), ...employee}]);
  };

  const removeEmployee = (id) => { //this would delete each individual employee card
    const newEmployeeList = employees.filter((employee) => {
      return employee.id !== id;
    });
    setEmployees(newEmployeeList);
  }

    useEffect(() => { //this would get the locally stored data
    const retrieveEmployees = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retrieveEmployees) setEmployees(retrieveEmployees);
  }, []);

  useEffect(() => { //this would save the data locally
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(employees));
  }, [employees]);
  return(
    <div className="main">

      <Router>
        <Header />
        <div className="main-content">
          <Switch>
            <Route
              path="/"
              exact
              render={(props) => (
                <Create
                  {...props} //destructure the props
                  addEmployeeHandler={addEmployeeHandler}
                />
              )}
            />
            <Route
              path="/list"
              render={(props) => (
                <List
                  {...props} //destructure the props
                  employees={employees}
                  getEmployeeId={removeEmployee}
                />
              )}
            />
            <Route
              path="/details"
              render={(props) => (
                <Details
                  {...props} //destructure the props
                  employees={employees}
                />
              )}
            />
          </Switch>
        </div>
      </Router>

    </div>
  );
}

export default App;
