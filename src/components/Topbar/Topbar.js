import React, { Component } from 'react';
import './Topbar.css';

export default class Topbar extends Component {

    componentDidMount() {
        console.log(this.props);
    }

    render() {
        return (
            <nav className="topbar" style={{ backgroundImage: `url(${this.props.img})` }}>
                <h1>{this.props.title}</h1>
            </nav>
        );
    }
}