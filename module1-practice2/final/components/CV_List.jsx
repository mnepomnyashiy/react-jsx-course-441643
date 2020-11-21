import React from 'react';
import {CV} from './CV';

const CV_List = () => {
    return (
        <div>
            <h1>Hello from React</h1>
            <CV name="John Doe" prof="Web-developer" spec="React" />
            <CV name="Sara Smith" prof="Web-developer" spec="Vue" />
            <CV name="Brad Pete" prof="Web-developer" spec="Angular" />
        </div>
    );
}

export {CV_List};