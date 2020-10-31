import React  from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    increment() {
        this.setState({
            count:this.state.count + 1
        });
    };

    render(){
        return (
            <div>
                <h1>This is a counter using Class Component</h1>               
                <h1>Current Count: {this.state.count}</h1>
                <button className="increment" onClick={(e) => this.increment(e)}>Increment!</button>
            </div>
        )
    }
};

export default Counter;