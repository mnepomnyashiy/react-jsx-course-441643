import React from 'react';
import ReactDOM from 'react-dom';

import { CV_List } from './components/CV_List';

function App() {
    return (
        <div>
            <CV_List />
        </div>
    );
}

ReactDOM.render(React.createElement(App), document.getElementById('root'));
