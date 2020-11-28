import React from 'react';

const OrderItem = (props) => {
    const { id, name, price, quantity, removeOrder } = props;
    return (
        <li className="list-group-item">
            {name} {price}руб x{quantity}{' '}
            <button
                className="btn btn-outline-danger btn-sm"
                onClick={() => removeOrder(id)}
            >
                &times;
            </button>
        </li>
    );
};

export default OrderItem;
