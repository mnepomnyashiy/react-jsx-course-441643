import React, { Component } from 'react';

import GoodsList from './components/GoodsList/GoodsList';
import BasketList from './components/BasketList/BasketList';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            order: [],
        };
    }

    addToOrder = (goodsItem) => {
        const newOrder = this.state.order;
        const indexInOrder = newOrder.findIndex(
            (item) => item.id === goodsItem.id
        );

        if (indexInOrder > -1) {
            newOrder[indexInOrder].quantity++;
        } else {
            newOrder.push({
                id: goodsItem.id,
                name: goodsItem.name,
                price: goodsItem.price,
                quantity: 1,
            });
        }

        this.setState({ order: newOrder });
    };

    render() {
        return (
            <div className="App">
                <div className="container">
                    <GoodsList
                        goods={this.props.goods}
                        setOrder={this.addToOrder}
                    />

                    <BasketList order={this.state.order} />
                </div>
            </div>
        );
    }
}

export default App;
