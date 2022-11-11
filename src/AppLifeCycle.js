/*
import React from "react";


class App extends React.Component{
    constructor(props){
        super(props);
        console.log('My name is ctor');
    }

    state = {
        count : 0,
    }

    add = ()=>{
        this.setState(current=>({
            count : current.count + 1,
        }))
    };

    minus = ()=>{
        this.setState(current=>({
            count : current.count - 1,
        }))
    };


    componentDidMount(){
        console.log("I'm componentDidMount");
    };

    // SetState() -> Render() -> componentDidUpdate()
    componentDidUpdate(){
        console.log("I just updated!");
    };

    componentWillUnmount(){
        console.log("Goodbye, cruel world!");
    };

    render() {
        console.log('My name is render')
        return (
            <div>
                <h1>The number is: {this.state.count} </h1>
                <button onClick={this.add}> Add </button>
                <button onClick={this.minus}> Minus </button>
            </div>
        );
    }       
}

export default App2;
*/