import React, { Component } from 'react';
import {Media } from 'reactstrap';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: [
                {
                    id: 0,
                    name: 'Vege Pizza',
                    image: 'assets/images/uthappizza.png',
                    category: 'mains',
                    label: 'Hot',
                    price: '4.99',
                    description: 'A unique pombination of Vege and Pepperoni Pizza'
                },
                {
                    id: 1,
                    name: 'Pepperoni Pizza',
                    image: 'assets/images/zucchipakoda.png',
                    category: 'Appetizer',
                    label: 'Spicy',
                    price: '2.99',
                    description: 'A unique pombination of Vege and Pepperoni Pizza'
                },
                {
                    id: 2,
                    name: 'Vadonut',
                    image: 'assets/images/vadonut.png',
                    category: 'Appetizer',
                    label: 'Hot',
                    price: '4.99',
                    description: 'A unique pombination of Vege and Pepperoni Pizza'
                },
                {
                    id: 3,
                    name: 'ElaiCheese Cake',
                    image: 'assets/images/elaicheesecake.png',
                    category: 'dessert',
                    label: 'Relaxer',
                    price: '1.99',
                    description: 'A unique pombination of Vege and Pepperoni Pizza'
                },
            ],
        };
    }

    render() {
        const menu = this.state.dishes.map((dish) => {
            return(
                <div key={dish.id} className="col-12 mt-5">
                    <Media tag="li">
                        <Media left middle>
                            <Media object src={dish.image} alt={dish.name} />
                        </Media>
                        <Media body className="ml-5">
                            <Media heading>{dish.name}</Media>
                            <p>{dish.description}</p>
                        </Media>
                    </Media>
                </div>
            );
        });

        return(
            <div className='container'>
                <div className='row'>
                    <Media list>
                        {menu}
                    </Media>
                </div>
            </div>
        );
    }
}

export default Menu;