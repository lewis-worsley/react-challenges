import React, { Component } from "react";
import css from "./css/NavBarSimple.module.css";

class NavBarSimple extends Component {

    constructor(props) {
        super(props);

        this.state = {
            message: "Hello, guest!",
            logStatus: "Log in",
        }
    }

    
    handleClick() {
        this.setState((prevState) => {
            console.log('Previous state:', this.state.message)
            return {
                message: prevState.message === "Hello, guest!" ? "Welcome back, user!" : "Hello, guest!",
                logStatus: prevState.logStatus === "Log in" ? "Log out" : "Log in",
            }
        })
    }

    // ES6 Arrow function
    // handleClick = () => {
    //     this.setState((prevState) => ({
    //         message: prevState.message === "Hello, guest!" ? "Welcome back, user!" : "Hello, guest!",
    //         logStatus: prevState.logStatus === "Log in" ? "Log out" : "Log in",
    //     }), () => console.log(this.state.message))
    // }

    render() {
        return (
            <div className={css.NavBar}>
                <h1>My Gallery</h1>
                <span>{this.state.message}</span>
                <button onClick={() => this.handleClick()}>{this.state.logStatus}</button>
            </div>
        )
    }
}


export default NavBarSimple