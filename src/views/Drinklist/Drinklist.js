import React, { Component } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import './Drinklist.css';
import { withRouter } from 'react-router-dom';

class Drinklist extends Component {
    state = {
        products: [
            {
                id: 8,
                img: 'https://5.imimg.com/data5/PV/AU/MY-41081178/pepsi-twist-330ml-500x500.jpg',
                title: 'Crazy Drink',
                price: 12
            },
            {
                id: 9,
                img: 'https://www.calle.dk/SL/PI/705/128/9a906cc5-7c6a-4c0c-b63e-281577b35da3.jpg',
                title: 'Crazy Drink',
                price: 14
            },
            {
                id: 10,
                img: 'https://www.fleggaard.dk/Services/ImageHandler.ashx?imgId=457780&sizeId=0',
                title: 'Crazy Drink',
                price: 15
            }
        ]

    }

    handleClick = (id) => {
        const queryParams = new URLSearchParams(window.location.search);
        console.log("fries?", queryParams.get('fries'));
        if (queryParams.get('fries')) {
            console.log("yum!");
            this.props.history.push(`/frieslist?product=[${queryParams.get('product')},${id}]`);
        }
        else if (queryParams.get('product')) {
            this.props.history.push(`/products?product=[${queryParams.get('product')},${id}]`);
        }
    }

    render() {
        const drinks = this.state.products.map(drink =>
            <ProductCard
                img={drink.img}
                title={drink.title}
                price={drink.price}
                clicked={() => this.handleClick(drink.id)} />
        );

        return (
            <div>
                <div className="drink-list">
                    {drinks}
                </div>
            </div>
        );
    }
}

export default withRouter(Drinklist);