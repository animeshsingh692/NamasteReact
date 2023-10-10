import React from 'react';

class TestClass extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.name, "Constructor");

        this.state = ({
            naam: 'Dummy'
        })
    }

    componentDidMount() {
        this.setState({
            naam: this.props.name
        })
        console.log(this.props.name, "componentDidMount");
    }

    componentDidUpdate() {
        console.log(this.props.name, "componentDidUpdate");
    }

    render() {
        return (
            <>
                {console.log(this.props.name, 'render')}
            </>
        )
    };
}

export default TestClass