import React from 'react';

const CV = (props) => {
    return (
        <div>
            <h2>{props.name}</h2>
            <h4>{props.prof}</h4>
            <h4>{props.spec}</h4>
        </div>
    );
}

export {CV};