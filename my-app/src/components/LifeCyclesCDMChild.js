import React, { Component } from 'react'

export class LifeCyclesCDMChild extends Component {

    constructor(props) {
        console.log("Child Constructor Called")
        super(props)

        this.state = {
            data: 'Child Loading...',
        }
    }

    getData() {
        console.log('Child getData() called')
        setTimeout(() => {
            console.log('Child Data fetched!')
            this.setState({
                data: 'Child Loaded!'
            })
        }, 3000)
    }

    componentDidMount() {
        console.log('Child component mounted')
        this.getData();
    }

    render() {
        console.log('Child render method called')
        return (
            <h1>{this.state.data}</h1>
        )
    }
}

export default LifeCyclesCDMChild