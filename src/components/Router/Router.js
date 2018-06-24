import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import SplashScreen from "../../views/Splashsceen/Splashscreen";
import ProductList from "../../views/ProductList/ProductList";

export default class Router extends Component {
    render() {
        return (
            <Switch>
                <Route path="/products" component={ProductList} />
                <Route path="/" component={SplashScreen} />
            </Switch>
        );
    }
}