import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './props.css';
import SimplePopover from './components/Popover';
import {BrowserRouter, Route, Link, Redirect} from "react-router-dom";

//Pages
import Header from './components/Header';
import IndexPage from './components/index';
import CarComp from './components/carComp';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Route exact path="/" component={IndexPage}/>
      <Route exact path="/Car" component={CarComp}/>
    <Footer />
    </BrowserRouter>
  );
}

// Old Method Class Components
// class App extends React.Component{
//   render() {
//     let firstName="Shahbaz";
//     let lastName = "Khan";
//     let arr = [1,2,3,4,5]
//     return(
//       <div>
//         <h1>{`${firstName} ${lastName}`}</h1>
//         <h1>{arr}</h1>
//       </div>
//     )
//   }
// }


export default App;
