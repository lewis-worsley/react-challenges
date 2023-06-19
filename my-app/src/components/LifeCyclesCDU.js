import React, { Component } from 'react'
import LifeCyclesCDUChild from './LifeCyclesCDUChild'

export class LifeCyclesCDU extends Component {

    constructor(props) {
        console.log("Constructor called | First")
        super(props)

        this.state = {
            greeting: "Hello!"
        }
    }

    updateGreeting = () => {
        console.log("Update greeting called | Third")
        this.setState(prevState => {
            return {
                greeting: prevState.greeting === "Hello!" ? "Goodbye": "Hello!"
            }
        })
    }

    componentDidUpdate() {
        console.log("Component updated | Fifth")
    }
    
    render() {
        console.log("Render method called | Second & Fourth")
        return (
            <div>
                <h1>{this.state.greeting}</h1>
                <button onClick={this.updateGreeting}>Update greeting</button>
                <LifeCyclesCDUChild parentGreeting={this.state.greeting}/>
            </div>
        )
    }
}

export default LifeCyclesCDU