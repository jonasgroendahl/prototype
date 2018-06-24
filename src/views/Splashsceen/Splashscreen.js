import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './Splashscreen.css';

export default class Splashscreen extends Component {
    render() {
        return (
            <Link className="App-header" to="/products">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Click to start Demo App</h1>
            </Link>
        );
    }
}