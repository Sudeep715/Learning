import React, { Component } from 'react'

class WelcomeState extends Component {

    constructor() {
        super();
        this.state = {
            message: "Welcome Samaira Vashisth"
        }
    }

    changeMessage() {
        this.setState({
            message: "Thank you Samaira Vashisth for subscribing !!!"
        })
    }

    render() {
        return (
            <div>
                <h1> {this.state.message} </h1>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

export default WelcomeState