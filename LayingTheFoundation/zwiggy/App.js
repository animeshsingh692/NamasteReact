import React from 'react';
import ReactDOM from 'react-dom/client';
const element = React.createElement(
    'h1',
    {},
    "Hello World!"
)

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(element)

