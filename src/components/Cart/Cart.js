import React, { Component } from 'react';
import { Consumer } from '../Context/Context';
import './Cart.css';
import { ShoppingCart } from "@material-ui/icons";

export default class Cart extends Component {
    render() {
        return (
            <div className="cart-wrapper">
                <div className="cart">
                    <ShoppingCart />
                    <Consumer>
                        {context => {
                            const items = [];
                            context.cart.forEach(cartItem => {
                                const index = items.findIndex(i => i.id == cartItem.id);
                                console.log("indox", index);
                                if (index == -1) {
                                    cartItem.amount = 1;
                                    items.push(cartItem);
                                }
                                else {
                                    items[index].amount++;
                                }
                            })
                            return items.map(cartItem =>
                                <div class="cart-item">
                                    <h4>{cartItem.amount}x</h4>
                                    <h3>{cartItem.title}</h3>
                                </div>)

                        }
                        }
                    </Consumer>
                </div>
            </div>
        );
    }
}