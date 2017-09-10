import React, { Component } from 'react';
import logo from './logo.png';
import me from './me.jpg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <div className="name">
                        <img src={logo} />
            <h1>GIAN FELIPE</h1> 
        </div>  
        <div className="menu">
            <ul>
                <li><a href="#">Home</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Resume</a></li>
            <li><a href="#">Contact</a></li>
            </ul>
            </div>
            </div>
            <div  className="main">
                <div className="main-header">
                    <div className="my-picture">
                        <img src={me} className="me"/>
            </div>
            </div>
            </div>
            </div>
        );
    }
}

export default App;
