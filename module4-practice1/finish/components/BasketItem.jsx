import React from 'react';

const OrderItem = (props) => {
    return (
        <li className="list-group-item">
            {props.name} {props.price}руб x{props.quantity}
        </li>
    );
};

export default OrderItem;
