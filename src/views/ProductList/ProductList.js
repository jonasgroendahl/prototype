import React, { Component } from 'react';
import './ProductList.css';
import Topbar from "../../components/Topbar/Topbar";
import topbarImg from "../../assets/dish.jpg";
import ProductCard from "../../components/ProductCard/ProductCard";
import BottomDrawer from "../../components/BottomDrawer/BottomDrawer";
import Leftdrawer from '../../components/Leftdrawer/Leftdrawer';
import { Consumer } from "../../components/Context/Context";
import Cart from "../../components/Cart/Cart";

class ProductList extends Component {
    state = {
        products: [
            {
                id: 0,
                img: 'https://images.pexels.com/photos/80597/burger-hamburger-onion-tomatoe-80597.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                title: 'Crazy Burger',
                price: 44,
                category: 'Burger'
            },
            {
                id: 0,
                img: 'https://5.imimg.com/data5/PV/AU/MY-41081178/pepsi-twist-330ml-500x500.jpg',
                title: 'Crazy Drink',
                price: 12,
                category: 'Drink'
            },
            {
                id: 1,
                img: 'https://onlysushi.es/wp-content/uploads/2017/08/pepsi-max.png',
                title: 'Crazy Drink',
                price: 14,
                category: 'Drink'
            },
            {
                id: 2,
                img: 'https://www.fleggaard.dk/Services/ImageHandler.ashx?imgId=457780&sizeId=0',
                title: 'Crazy Drink',
                price: 15,
                category: 'Drink'
            }

        ],
        offset: 0,
        showBottomDrawer: false,
        selectedProduct: {},
        filter: 'Burger'
    };

    sliderRef = React.createRef().current;

    componentDidMount() {
        console.log(this.props);
        const { products } = this.state;
        for (let i = 0; i < 12; i++) {
            products.push({ ...products[0], id: i + 1 });
        }
        this.setState({ products });
        const queryParams = new URLSearchParams(window.location.search);
        if (queryParams.get('product')) {
            const productsToAdd = JSON.parse(queryParams.get('product'));
            productsToAdd.forEach(productId => {
                const product = products.find(pro => pro.id === productId);
                console.log("product", product);
                this.props.context.addProduct(product);
            });
        }

    }

    productClickHandler = (product) => {
        if (product.category !== 'Drink') {
            this.setState({ showBottomDrawer: true, selectedProduct: product });
        }
        else {
            this.props.context.addProduct(product);
        }
    }

    toggleBottomDrawer = () => {
        const { showBottomDrawer } = this.state;
        this.setState({ showBottomDrawer: !showBottomDrawer });
    }

    filterProducts = (category) => {
        this.setState({ filter: category });
    }

    render() {

        const { products, filter } = this.state;

        const productList = products
            .filter(product => product.category === filter)
            .map((product, index) => (
                <ProductCard
                    img={product.img}
                    title={product.title}
                    offset={product.offset}
                    price={product.price}
                    key={`product${index}`}
                    clicked={() => this.productClickHandler(product)}
                />
            ));


        // dragscroll https://github.com/asvd/dragscroll/blob/master/dragscroll.js
        return (
            <div>
                <Topbar img={topbarImg} title="Main menu" />
                <Cart />
                <div className="product-list-grid">
                    <Leftdrawer filterProducts={this.filterProducts} />
                    <div className="product-list">
                        {productList}
                    </div>
                </div>
                <BottomDrawer show={this.state.showBottomDrawer} product={this.state.selectedProduct} toggle={this.toggleBottomDrawer} {...this.props} />
            </div>
        );
    }
}

export default props => <Consumer>{context => <ProductList {...props} context={context} />}</Consumer>