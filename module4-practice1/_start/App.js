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

    addToOrder = (goodsItem) => {};

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
