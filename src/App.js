import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Restaurants from './Restaurants';
import EditRestaurants from './EditRestaurants.js';
import AddRestaurants from './AddRestaurants';
import DisplayRestaurants from './DisplayRestaurants';
import data from './data/data.json';


class App extends React.Component{
  
  render(){
      return(
          <>
       <Route exact path="/" component={Restaurants} />
       <Route path="/Restaurants" component={Restaurants} />
       <Route path="/EditRestaurants/:id" component={EditRestaurants} />
       <Route path="/AddRestaurants" component={AddRestaurants} />
       <Route path="/DisplayRestaurants" component={DisplayRestaurants} />
        {/* <Link to="/Restaurants">check Restaurants </Link> */}
       
        </>
      )
  }
}
export default App;
