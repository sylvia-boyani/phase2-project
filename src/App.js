import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import {useEffect, useState} from "react"


function App() {
  const [data, setData] =useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://travel-videos.herokuapp.com/travelvideos')
    .then(response =>  {
      if (response.ok ){
        return response.json()
      }
      throw response;
    })
    .then(data => {
      setData (data);
    })
    .catch(error => {
      console.error("Error fetchin data: ", error);
      setError(error);
    })
    .finally(()=> {
      setLoading(false);
    })
  }, [])
    
  if (loading) return "Loading....";
  if (error) return "Error!";
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
    </>
    
  );
}


export default App;
