import React, { Component } from 'react';
import './ProductCard.css';

export default class ProductCard extends Component {
    render() {
        return (
            <div className="product-card" onClick={this.props.clicked}>
                <h3>{this.props.title}</h3>
                <img src={this.props.img} />
                <h4>{this.props.price}$</h4>
            </div>
        );
    }
}