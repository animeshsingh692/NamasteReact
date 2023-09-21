const element = React.createElement(
    'h1',
    { class: 'heading1' },
    'This is third chapter in aqua blue'
);

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(element);
console.log("Element :", element);
console.log("Root: ", root);
