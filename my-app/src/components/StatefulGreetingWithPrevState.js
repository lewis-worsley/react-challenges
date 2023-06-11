import React from 'react';

class StatefulGreetingWithPrevState extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            introduction: "Hello!",
            buttonText: "Exit",
            counter: 0,
        };
    }

    // handleClick() {
    //     this.setState({
    //         introduction: this.state.introduction === "Hello!" ? "Goodbye" : "Hello!",
    //         buttonText: this.state.buttonText === "Exit" ? "Enter" : "Exit",
    //     }, ()=>{
    //     console.log(this.state.introduction);
    //     console.log(this.state.buttonText);
    //     });
    // }

    handleClick() {
        this.setState((prevState, prevProps) => {
            console.log('Previous State:', prevState)
            console.log('Previous Props:', prevProps)
            return {
                introduction: prevState.introduction === "Hello" ? "Goodbye" : "Hello",
                buttonText: prevState.buttonText === "Exit" ? "Enter" : "Exit",
            }
        });
    }

    // increment() {
    //     this.setState({
    //         counter: this.state.counter + 1
    //     }, ()=>{
    //         console.log('Count:', this.state.counter);
    //     });
    // }

    increment() {
        this.setState((prevState, prevProps) => {
            console.log('Previous State:', prevState)
            console.log('Previous Props:', prevProps)
            return {
                counter: prevState.counter + 1
            }
        });
    }

    render() {
        return (
            <div>
                <h1>{this.state.introduction} {this.props.greeting}. Nor do I, {this.props.name}</h1>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
                <p><button onClick={() => this.increment()}>Increment</button></p>
                <p>You've clicked {this.state.counter} times</p>
            </div>
        );
    }

}

export default StatefulGreetingWithPrevState