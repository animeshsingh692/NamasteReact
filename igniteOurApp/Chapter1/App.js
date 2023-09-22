import React from 'react';
import ReactDOM from 'react-dom/client';

const element = React.createElement(
    'h1',
    {},
    "No need to use cdn links for react now. Use npm install react and npm install react-dom to install the react and react-dom packages from npm and import react and react dom packages in the js file. But while linking this js file in index.html file use type='module' attribute in source tag"
);

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(element);
