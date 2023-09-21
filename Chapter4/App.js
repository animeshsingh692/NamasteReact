/* Creating complex structure
<div className="parent">
    <div className="child1">
    <h1 className="heading1">I'm heading1 of parent "child1" of grandparent "parent"</h1>
    <h3 className="sibling">I'm sibling of heading1</h3>
    </div>
    <div className="child2">
    <h2 className="heading2">I'm heading2 of parent "child2" of grandparent "parent"</h2>
    <h4 className="sibling">I'm sibling of heading2</h4>
    </div>
</div>
*/

const parent = React.createElement(
    'div',
    { className: 'parent' },
    [
        React.createElement(
            'div',
            { className: 'child1' },
            [React.createElement(
                'h1',
                { className: 'heading1' },
                "I'm heading1 of parent 'child1' of grandparent 'parent'."
            ), React.createElement(
                'h3',
                { className: 'sibling' },
                "I'm sibling of heading1"
            )]
        ),
        React.createElement(
            'div',
            { className: 'child2' },
            [React.createElement(
                'h2',
                { className: 'heading2' },
                "I'm heading2 of parent 'child2' of grandparent 'parent'."
            ),
            React.createElement(
                'h4',
                { className: 'sibling' },
                "I'm sibling of heading2"
            )]
        )
    ]
)

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(parent);
