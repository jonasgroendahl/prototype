import React, { Component } from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import ProductCard from "../ProductCard/ProductCard";
import './BottomDrawer.css';

export default class BottomDrawer extends Component {
    render() {
        return (
            <SwipeableDrawer anchor="bottom" open={this.props.show} onClose={this.props.toggle}>
                <div class="bottom-drawer-content">
                    <ProductCard title="Product only" />
                    <ProductCard title="Menu (fries + drink)" />
                    <ProductCard title="Product + Drink" />
                </div>
            </SwipeableDrawer>
        );
    }
}