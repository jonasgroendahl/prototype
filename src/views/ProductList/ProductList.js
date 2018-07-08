import React, { Component } from 'react';
import './ProductList.css';
import ProductCard from "../../components/ProductCard/ProductCard";
import BottomDrawer from "../../components/BottomDrawer/BottomDrawer";
import Leftdrawer from '../../components/Leftdrawer/Leftdrawer';
import { Consumer } from "../../components/Context/Context";
import Cart from "../../components/Cart/Cart";
import FeaturedGridCard from '../../components/FeaturedGridCard/FeaturedGridCard';
import { Scrollbars } from "react-custom-scrollbars";

class ProductList extends Component {
    state = {
        products: [
            {
                id: 1,
                img: 'https://images.pexels.com/photos/80597/burger-hamburger-onion-tomatoe-80597.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                title: 'Crazy Burger',
                price: 44,
                category: 'Burgers'
            },
            {
                id: 8,
                img: 'https://5.imimg.com/data5/PV/AU/MY-41081178/pepsi-twist-330ml-500x500.jpg',
                title: 'Crazy Drink',
                price: 12,
                category: 'Drinks'
            },
            {
                id: 9,
                img: 'https://www.calle.dk/SL/PI/705/128/9a906cc5-7c6a-4c0c-b63e-281577b35da3.jpg',
                title: 'Crazy Drink',
                price: 14,
                category: 'Drinks'
            },
            {
                id: 10,
                img: 'https://www.fleggaard.dk/Services/ImageHandler.ashx?imgId=457780&sizeId=0',
                title: 'Crazy Drink',
                price: 15,
                category: 'Drinks'
            },
            {
                id: 11,
                img: 'https://www.lordofthefries.com.au/wp-content/uploads/2016/03/fries_shoestring_logo.png',
                title: 'Fries',
                price: 12,
                category: 'Fries'
            },
            {
                id: 12,
                img: 'http://cdn8.bigcommerce.com/s-in5je/images/stencil/500x659/products/3418/8878/hurley-curly-fries-3__33188.1508990317.jpg?c=2',
                title: 'Curly fries',
                price: 14,
                category: 'Fries'
            }

        ],
        offset: 0,
        showBottomDrawer: false,
        selectedProduct: {},
        filter: 'Burgers'
    };

    sliderRef = React.createRef().current;

    componentDidMount() {
        console.log(this.props);
        const { products } = this.state;
        for (let i = 0; i < 12; i++) {
            products.push({ ...products[0], id: 1 });
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
        if (product.category === 'Burgers') {
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
            <Scrollbars style={{ height: '100vh' }}>
                <div className="container">
                    <header>
                        <img src="https://s3-media4.fl.yelpcdn.com/bphoto/nXIQS2Pl3NoI_u-kwsfhIQ/ls.jpg" height="100" />
                    </header>
                    <div className="featured-grid">
                        <FeaturedGridCard image={products[0].img} height={405} clicked={() => this.productClickHandler(products[0])} />
                        <FeaturedGridCard image={products[1].img} height={200} clicked={() => this.productClickHandler(products[1])} />
                        <FeaturedGridCard image={products[2].img} height={405} clicked={() => this.productClickHandler(products[0])} />
                        <FeaturedGridCard image={products[5].img} height={200} clicked={() => this.productClickHandler(products[0])} />
                    </div>
                    <div className="main-grid">
                        <Leftdrawer filterProducts={this.filterProducts} />
                        <div className="product-list">
                            {productList}
                        </div>
                        <Cart />
                    </div>
                    <BottomDrawer show={this.state.showBottomDrawer} product={this.state.selectedProduct} toggle={this.toggleBottomDrawer} {...this.props} />
                </div>
            </Scrollbars>
        );
    }
}

export default props => <Consumer>{context => <ProductList {...props} context={context} />}</Consumer>