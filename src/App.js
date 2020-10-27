import React, { useState } from 'react';
import { createContext } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import './App.css';
import Appointment from './components/Appointment/Appointment/Appointment';
import AddDoctor from './components/Dashboard/AddDoctor/AddDoctor';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Home from "./components/Home/Home/Home";
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';

export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/appointment'>
            <Appointment />
          </Route>
          <Route path='/dashboard/appointment'>
            <Dashboard />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <PrivateRoute path='/addDoctor'>
            <AddDoctor />
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
