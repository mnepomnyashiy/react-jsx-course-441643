import React from 'react';
import ReactDOM from 'react-dom';

function CV(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <h4>{props.prof}</h4>
            <h4>{props.spec}</h4>
        </div>
    );
}

function App() {
    return (
        <div>
            <h1>Hello from React</h1>
            <CV name="John Doe" prof="Web-developer" spec="React" />
            <CV name="Sara Smith" prof="Web-developer" spec="Vue" />
            <CV name="Brad Pete" prof="Web-developer" spec="Angular" />
        </div>
    );
}

ReactDOM.render(React.createElement(App), document.getElementById('root'));
