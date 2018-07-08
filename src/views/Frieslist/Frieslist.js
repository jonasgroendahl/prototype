import React, { Component } from 'react';
import ProductCard from "../../components/ProductCard/ProductCard";
import { withRouter } from 'react-router-dom';
import './Frieslist.css';

class Frieslist extends Component {

    state = {
        products: [
            {
                id: 11,
                img: 'https://www.lordofthefries.com.au/wp-content/uploads/2016/03/fries_shoestring_logo.png',
                title: 'Fries',
                price: 12
            },
            {
                id: 12,
                img: 'http://cdn8.bigcommerce.com/s-in5je/images/stencil/500x659/products/3418/8878/hurley-curly-fries-3__33188.1508990317.jpg?c=2',
                title: 'Curly fries',
                price: 14
            }
        ]

    }

    handleClick = (id) => {
        const queryParams = new URLSearchParams(window.location.search);
        console.log("stuff", queryParams.get('product'), queryParams.get('product').substr(1, queryParams.get('product').length - 2));
        this.props.history.push(`/products?product=[${queryParams.get('product').substr(1, queryParams.get('product').length - 2)},${id}]`);

    }


    componentDidMount() {
        console.log("fries!!");
    }

    render() {
        const fries = this.state.products.map(fries =>
            <ProductCard
                img={fries.img}
                title={fries.title}
                price={fries.price}
                clicked={() => this.handleClick(fries.id)} />
        );

        return (
            <div>
                <div className="frieslist">
                    {fries}
                </div>
            </div>
        );
    }
}

export default withRouter(Frieslist);