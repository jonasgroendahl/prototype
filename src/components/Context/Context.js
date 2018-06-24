import React from 'react';

const Context = React.createContext();

export const Consumer = Context.Consumer;

export class Provider {
    constructor(props) {
        super(props);
        state = {
            selectedProduct: null
        }
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.state.children}
            </Context.Provider>
        );
    }
}