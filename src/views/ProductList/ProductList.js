import React, { Component } from 'react';
import './ProductList.css';
import Topbar from "../../components/Topbar/Topbar";
import topbarImg from "../../assets/dish.jpg";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import DragScroll from "dragscroll";

export default class ProductList extends Component {
    state = {
        categories: [
            {
                img: 'https://www.sunset-boulevard.dk/sites/default/files/styles/product_large/public/products/hf_bearnaise.png?itok=A--RNXL7&c=2a4ca7819021d69da8a62797d6ca8256', title: 'Burgers', offset: 0
            }
        ],
        offset: 0
    };

    componentDidMount() {
        const { categories } = this.state;
        for (let i = 0; i < 12; i++) {
            categories.push({ ...categories[0] });
        }
        this.setState({ categories });
    }

    categoryPreviousHandler = () => {
        let { offset, categories } = this.state;
        if (offset < 50 * categories.length) {
            offset -= 50;
            this.setState({ offset });
        }
    }

    categoryNextHandler = () => {
        let { offset } = this.state;
        if (offset != 0) {
            offset += 50;
            this.setState({ offset });
        }
    }

    render() {

        const { categories } = this.state;

        const categoryList = categories.map(category => <CategoryCard img={category.img} title={category.title} offset={category.offset} />);
        // dragscroll https://github.com/asvd/dragscroll/blob/master/dragscroll.js
        return (
            <div>
                <Topbar img={topbarImg} title="Main menu" />
                <div className="product-list-grid">
                    <div className="product-list-categories">
                        <div className="scroll-panel" style={{ transform: `translateY(${this.state.offset}px)` }}>
                            {categoryList}
                        </div>
                    </div>
                    <div className="">
                        <button onClick={this.categoryPreviousHandler}>Down</button>
                        <button onClick={this.categoryNextHandler}>Up</button>
                    </div>
                </div>
            </div>
        );
    }
}