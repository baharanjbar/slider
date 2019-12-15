import React from 'react';
//import Home from './component/Home'
import Slider from './component/Slider'
import {BrowserRouter, Route,Switch  } from "react-router-dom"
import logo from './logo.svg';
import './App.css';
import './Font.css'
function App() {
    return (
        <BrowserRouter>
            <div >
                <Slider/>

            </div>
        </BrowserRouter>

    );
}

export default App;
