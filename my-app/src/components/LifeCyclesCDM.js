import React, { Component } from 'react'
import LifeCyclesCDMChild from './LifeCyclesCDMChild'

export class LifeCyclesCDM extends Component {

    constructor(props) {
        console.log('Constructor called first')
        super(props)

        this.state = {
            data: 'Loading'
        }
    }

    getData() {
        console.log('getData() called')
        setTimeout(() => {
            console.log('Data fetched! fourth')
            this.setState({
                data: 'Loaded'
            })
        }, 3000)
    }

    componentDidMount() {
        console.log('Component mounted third')
        this.getData()
    }

    render() {
        console.log('Render method called second')
        return (
            <div>
                <h1>{this.state.data}</h1>
                <LifeCyclesCDMChild />
            </div>
        )
    }
}

export default LifeCyclesCDM