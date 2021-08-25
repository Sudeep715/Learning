import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
        this.updateCounter = this.updateCounter.bind(this);
    }

    updateCounter() {
        this.setState((prevState, props) => ({
            count: prevState.count + props.updateBy
        }))
    }

    resetCounter() {
        this.setState({
            count: 0
        })
    }

    render() {
        return (
            <div>
                <h1>Counter is : {this.state.count}</h1>
                <button onClick={this.updateCounter}>Increment</button>       <button onClick={() => this.resetCounter()}>Reset</button>
            </div>
        )
    }
}

export default Counter
