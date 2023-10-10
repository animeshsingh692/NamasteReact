import React from 'react';
import ReactDOM from 'react-dom/client';

const Hello = () => {
    return (
        <div>
            <h1>Hello,</h1>
            <p>from JSX</p>
        </div>
    )
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<Hello />);
