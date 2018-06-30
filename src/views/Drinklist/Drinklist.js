import React, { Component } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import './Drinklist.css';
import { withRouter } from 'react-router-dom';

class Drinklist extends Component {
    state = {
        products: [
            {
                id: 0,
                img: 'https://5.imimg.com/data5/PV/AU/MY-41081178/pepsi-twist-330ml-500x500.jpg',
                title: 'Crazy Drink',
                price: 12
            },
            {
                id: 1,
                img: 'https://onlysushi.es/wp-content/uploads/2017/08/pepsi-max.png',
                title: 'Crazy Drink',
                price: 14
            },
            {
                id: 2,
                img: 'https://www.fleggaard.dk/Services/ImageHandler.ashx?imgId=457780&sizeId=0',
                title: 'Crazy Drink',
                price: 15
            }
        ]

    }

    handleClick = (id) => {
        const queryParams = new URLSearchParams(window.location.search);
        if (queryParams.get('fries')) {
            this.props.history.push("/frieslist");
        }
        if (queryParams.get('product')) {
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