import React, { useState } from 'react';

const Form = (props) => {
    const [value, setValue] = useState('');
    const [isUserOneOnly, setUserOneOnly] = useState(false);

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleKey = (e) => {
        if (e.key === 'Enter') {
            props.filterPosts(value, isUserOneOnly);
        }
    };

    const handleCheck = (e) => {
        setUserOneOnly(e.target.checked);
        props.filterPosts(value, e.target.checked);
    };

    return (
        <>
            <input
                type="search"
                value={value}
                onChange={handleChange}
                onKeyDown={handleKey}
            />
            <label>
                <input
                    type="checkbox"
                    checked={isUserOneOnly}
                    onChange={handleCheck}
                />{' '}
                Только посты от userId1
            </label>
        </>
    );
};

export { Form };
