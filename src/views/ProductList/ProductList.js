import React, { Component } from 'react';
import './ProductList.css';
import Topbar from "../../components/Topbar/Topbar";
import topbarImg from "../../assets/dish.jpg";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import ProductCard from "../../components/ProductCard/ProductCard";
import IconArrowUp from "@material-ui/icons/ArrowUpward";
import IconArrowDown from "@material-ui/icons/ArrowDownward";
import BottomDrawer from "../../components/BottomDrawer/BottomDrawer";


export default class ProductList extends Component {
    state = {
        categories: [
            {
                img: 'https://www.sunset-boulevard.dk/sites/default/files/styles/product_large/public/products/hf_bearnaise.png?itok=A--RNXL7&c=2a4ca7819021d69da8a62797d6ca8256', title: 'Burgers', offset: 0
            }
        ],
        products: [
            {
                img: 'https://images.pexels.com/photos/80597/burger-hamburger-onion-tomatoe-80597.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                title: 'Crazy Burger',
                price: 44,
                selected: false
            },

        ],
        offset: 0,
        showBottomDrawer: false
    };

    sliderRef = React.createRef().current;

    componentDidMount() {
        const { categories, products } = this.state;
        for (let i = 0; i < 12; i++) {
            categories.push({ ...categories[0] });
            products.push({ ...products[0] });
        }
        this.setState({ categories });
    }

    categoryPreviousHandler = () => {
        let { offset, categories } = this.state;
        if (offset > -((125 * categories.length) - 4 * 125)) {
            offset -= 125;
            this.setState({ offset });
        }
    }

    categoryNextHandler = () => {
        let { offset } = this.state;
        if (offset !== 0) {
            offset += 125;
            this.setState({ offset });
        }
    }

    productClickHandler = () => {
        this.setState({ showBottomDrawer: true });
    }

    toggleBottomDrawer = () => {
        const { showBottomDrawer } = this.state;
        this.setState({ showBottomDrawer: !showBottomDrawer });
    }

    render() {

        const { categories, products } = this.state;

        const categoryList = categories.map((category, index) =>
            <CategoryCard
                img={category.img}
                title={category.title}
                key={`category${index}`}
            />
        );

        const productList = products.map((product, index) =>
            <ProductCard
                img={product.img}
                title={product.title}
                offset={product.offset}
                price={product.price}
                key={`product${index}`}
                clicked={this.productClickHandler}
            />
        );


        // dragscroll https://github.com/asvd/dragscroll/blob/master/dragscroll.js
        return (
            <div>
                <Topbar img={topbarImg} title="Main menu" />
                <div>
                    <IconArrowDown onClick={this.categoryPreviousHandler}></IconArrowDown>
                    <IconArrowUp onClick={this.categoryNextHandler}></IconArrowUp>
                </div>
                <div className="product-list-grid">
                    <div className="product-list-categories">
                        <div className="scroll-panel" ref={this.sliderRef} style={{ transform: `translateY(${this.state.offset}px)` }}>
                            {categoryList}
                        </div>
                    </div>
                    <div className="product-list">
                        {productList}
                    </div>
                </div>
                <BottomDrawer show={this.state.showBottomDrawer} toggle={this.toggleBottomDrawer} />
            </div>
        );
    }
}