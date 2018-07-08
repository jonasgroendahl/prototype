import React, { Component, Fragment } from 'react';
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import IconArrowUp from "@material-ui/icons/ArrowUpward";
import IconArrowDown from "@material-ui/icons/ArrowDownward";

export default class Leftdrawer extends Component {
    state = {
        categories: [
            {
                img: 'https://www.sunset-boulevard.dk/sites/default/files/styles/product_large/public/products/hf_bearnaise.png?itok=A--RNXL7&c=2a4ca7819021d69da8a62797d6ca8256', title: 'Burgers', offset: 0
            },
            {
                img: 'https://www.sunset-boulevard.dk/sites/default/files/styles/product_large/public/products/hf_bearnaise.png?itok=A--RNXL7&c=2a4ca7819021d69da8a62797d6ca8256', title: 'Drinks', offset: 0
            },
            {
                img: 'https://www.sunset-boulevard.dk/sites/default/files/styles/product_large/public/products/hf_bearnaise.png?itok=A--RNXL7&c=2a4ca7819021d69da8a62797d6ca8256', title: 'Fries', offset: 0
            }
        ]
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


    render() {
        const categoryList = this.state.categories.map((category, index) =>
            <CategoryCard
                img={category.img}
                title={category.title}
                key={`category${index}`}
                clicked={() => this.props.filterProducts(category.title)}
            />
        );

        return (
            <Fragment>
                <div className="product-list-categories">
                    <div className="scroll-panel" ref={this.sliderRef} style={{ transform: `translateY(${this.state.offset}px)` }}>
                        {categoryList}
                    </div>
                </div>
                <div style={{ position: 'absolute', display: 'none' }}>
                    <IconArrowDown onClick={this.categoryPreviousHandler}></IconArrowDown>
                    <IconArrowUp onClick={this.categoryNextHandler}></IconArrowUp>
                </div>
            </Fragment>
        );
    }
}