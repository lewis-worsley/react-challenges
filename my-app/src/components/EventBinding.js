import React from 'react';

class EventBinding extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            introduction: "Hello!",
            buttonText: "Exit",
        };
        // Part of 3
        this.handleClick = this.handleClick.bind() 
    }

    // handleClick() {
    //     this.setState({
    //         introduction: "Goodbye!",
    //         buttonText: "Enter",
    //     }, ()=>{
    //     console.log(this.state.introduction);
    //     console.log(this.state.buttonText);
    //     });
    //     console.log(this.state.introduction);
    // }

    // Part of 4
    handleClick() = () => {
        this.setState({
            introduction: "Goodbye!",
            buttonText: "Enter",
        }, ()=>{
        console.log(this.state.introduction);
        console.log(this.state.buttonText);
        });
        console.log(this.state.introduction);
    }

    render() {
        return (
            <div>
                <h1>{this.state.introduction} {this.props.greeting}. Nor do I, {this.props.name}</h1>

                {/* Ways to bind event handlers */}
                {/* 1 */}
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
                {/* 2 */}
                <button onClick={this.handleClick.bind(this)}>{this.state.buttonText}</button>
                {/* 3 */}
                <button onClick={this.handleClick}>{this.state.buttonText}</button>
                {/* 4 */}
                <button onClick={this.handleClick.bind(this)}>{this.state.buttonText}</button>
            </div>
        ) 
    }

}

export default EventBinding