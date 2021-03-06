import React, { Component } from 'react';
import './CategoryCard.css';

export default class extends Component {

    onMouseDown = (event) => {
        console.log(event);
    }

    render() {
        return (
            <div className="category-card"
                onMouseDown={this.onMouseDown}
                onClick={this.props.clicked}
                style={{
                    backgroundImage: `url(${this.props.img})`
                }} >
                <h5>{this.props.title}</h5>
            </ div>
        );
    }
}