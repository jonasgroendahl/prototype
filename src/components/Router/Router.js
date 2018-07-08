import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import SplashScreen from "../../views/Splashsceen/Splashscreen";
import ProductList from "../../views/ProductList/ProductList";
import Drinklist from "../../views/Drinklist/Drinklist";
import Frieslist from "../../views/Frieslist/Frieslist";

export default class Router extends Component {
    render() {
        return (
            <Switch>
                <Route path="/drinks" component={Drinklist} />
                <Route path="/frieslist" component={Frieslist} />
                <Route path="/products" component={ProductList} />
                <Route path="/" component={SplashScreen} />
            </Switch>
        );
    }
}