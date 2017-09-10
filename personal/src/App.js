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
            <div className="main-text">
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id turpis vitae massa efficitur sodales.</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id turpis vitae massa efficitur sodales. Donec faucibus sapien tortor, et imperdiet risus iaculis eget. Proin volutpat ex in enim dictum, at molestie est finibus. Phasellus eu luctus justo, vel facilisis lectus. Sed in tortor et urna pulvinar tincidunt. Curabitur aliquet ac purus sit amet convallis. Aenean feugiat diam odio, quis egestas velit accumsan ut. Quisque non pulvinar turpis. In a eleifend ante.
                </p>
            <p>
                Suspendisse convallis, nulla ut sodales interdum, elit tellus bibendum tellus, sollicitudin efficitur metus dui a dui. Pellentesque consectetur accumsan est, fermentum consequat turpis condimentum tempus. Fusce tempus vestibulum dui ac vehicula. Curabitur porttitor blandit ipsum sit amet porttitor. Sed pellentesque ornare purus sed ornare. In non volutpat orci. Quisque at urna sed elit dignissim interdum. Morbi volutpat purus a diam faucibus, a lobortis nisl accumsan. Aliquam at dapibus est. Duis quis tortor sed arcu fringilla ultrices at eu tellus. Vivamus pulvinar ullamcorper tincidunt. Cras aliquam eleifend quam eu facilisis. 
            </p>
            <p>
                Suspendisse convallis, nulla ut sodales interdum, elit tellus bibendum tellus, sollicitudin efficitur metus dui a dui. Pellentesque consectetur accumsan est, fermentum consequat turpis condimentum tempus. Fusce tempus vestibulum dui ac vehicula. Curabitur porttitor blandit ipsum sit amet porttitor. Sed pellentesque ornare purus sed ornare. In non volutpat orci. Quisque at urna sed elit dignissim interdum. Morbi volutpat purus a diam faucibus, a lobortis nisl accumsan. Aliquam at dapibus est. Duis quis tortor sed arcu fringilla ultrices at eu tellus. Vivamus pulvinar ullamcorper tincidunt. Cras aliquam eleifend quam eu facilisis. 
            </p>
            <p>
                Suspendisse convallis, nulla ut sodales interdum, elit tellus bibendum tellus, sollicitudin efficitur metus dui a dui. Pellentesque consectetur accumsan est, fermentum consequat turpis condimentum tempus. Fusce tempus vestibulum dui ac vehicula. Curabitur porttitor blandit ipsum sit amet porttitor. Sed pellentesque ornare purus sed ornare. In non volutpat orci. Quisque at urna sed elit dignissim interdum. Morbi volutpat purus a diam faucibus, a lobortis nisl accumsan. Aliquam at dapibus est. Duis quis tortor sed arcu fringilla ultrices at eu tellus. Vivamus pulvinar ullamcorper tincidunt. Cras aliquam eleifend quam eu facilisis. 
            </p>
            </div>
            </div>
            </div>
            </div>
        );
    }
}

export default App;
