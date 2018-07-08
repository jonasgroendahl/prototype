import React, { Component } from 'react';

const Context = React.createContext();

export const Consumer = Context.Consumer;

export class Provider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedProduct: null,
            cart: [],
            addProduct: this.addProduct
        }
    }

    addProduct = (product) => {
        const { cart } = this.state;
        cart.push(product);
        this.setState({ cart });
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}