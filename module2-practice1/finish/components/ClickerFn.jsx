import React, { useState } from 'react';

const ClickerFn = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <button
                onClick={() => {
                    setCount(count - 1);
                }}
            >
                -
            </button>
            <span style={{ padding: '0 1rem' }}>{count}</span>
            <button
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                +
            </button>
        </div>
    );
};

export default ClickerFn;
