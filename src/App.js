import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


const App = ()=> {

  const apiKey = process.env.REACT_APP_NEWS_API;

  const pageSize = 4; 
  return (

    <div>
      <Router>
      <Navbar/>
        <Routes>
      
      <Route  path="/" element = {<News pageSize={pageSize} apiKey={apiKey} country="in"  category="general"/>}></Route>
      <Route  path="/business" element = {<News  pageSize={pageSize} apiKey={apiKey} country="in" key="business"category="business"/>}></Route> 
          <Route  path="/entertainment" element = {<News pageSize={pageSize} apiKey={apiKey} country="in" key= "entertainment" category="entertainment"/>}></Route>
          <Route  path="/general" element = {<News   pageSize={pageSize} apiKey={apiKey} country="in" key= "general" category="general"/>}></Route> 
          <Route path="/health" element = {<News   pageSize={pageSize} apiKey={apiKey} country="in" key = "health" category="health"/>}> </Route> 
          <Route  path="/science"element = {<News   pageSize={pageSize} apiKey={apiKey} country="in" key ="science" category="science"/>}></Route> 
          <Route  path="/sports"element = {<News   pageSize={pageSize} apiKey={apiKey} country="in" key = "sports" category="sports"/>}></Route> 
          <Route  path="/technology" element = {<News  pageSize={pageSize} apiKey={apiKey} country="in" key = "technology" category="technology"/>}></Route> 
      </Routes>
      </Router>
    </div>
  )
}


export default App;