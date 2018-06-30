import React, { PureComponent } from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import ProductCard from "../ProductCard/ProductCard";
import './BottomDrawer.css';
import { Consumer } from "../Context/Context";

class BottomDrawer extends PureComponent {

    productHandler = () => {
        this.props.history.push(`/drinks?product=${this.props.product.id}`);
    }

    friesDrinkHandler = () => {
        this.props.history.push(`/drinks?fries=1&product=${this.props.product.id}`);
    }

    drinkHandler = () => {
        this.props.history.push(`/drinks?product=${this.props.product.id}`);
    }

    render() {
        return (
            <SwipeableDrawer anchor="bottom" open={this.props.show} onOpen={() => console.log("im open")} onClose={this.props.toggle} >
                <div className="bottom-drawer-content">
                    <ProductCard title="Product only" img={this.props.product.img} price={this.props.product.price} clicked={this.productHandler} />
                    <ProductCard title="Menu (fries + drink)" img={this.props.product.img} price={this.props.product.price + '+'} clicked={this.friesDrinkHandler}>
                        <img src="http://pngimg.com/uploads/fries/fries_PNG17.png" alt="" height="80" />
                        <img src="https://images.vexels.com/media/users/3/135691/isolated/preview/175702226dd92b9a70d23b87ebed4a5d-cocktail-drink-by-vexels.png" alt="" height="80" />
                    </ProductCard>
                    <ProductCard title="Product + Drink" img={this.props.product.img} price={this.props.product.price + '+'} clicked={this.drinkHandler}>
                        <img src="https://images.vexels.com/media/users/3/135691/isolated/preview/175702226dd92b9a70d23b87ebed4a5d-cocktail-drink-by-vexels.png" alt="" height="80" />
                    </ProductCard>
                </div>
            </SwipeableDrawer>
        );
    }
}

export default props => <Consumer>{context => <BottomDrawer {...props} context={context} />}</Consumer>