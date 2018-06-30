import React, { Component } from 'react';
import { Consumer } from '../Context/Context';
import './Cart.css';

export default class Cart extends Component {
    render() {
        return (
            <div className="cart-wrapper">
                <h3>Items</h3>
                <div className="cart">
                    <Consumer>
                        {context =>
                            context.cart.map(cartItem =>
                                <img src={cartItem.img} alt="" />)
                        }
                    </Consumer>
                </div>
            </div>
        );
    }
}