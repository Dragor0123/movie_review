import React from "react";


class ReactCompoApp extends React.Component{
    state = {
        count: 0,
    }
    
    add = ()=>{
        // 방법1) statement를 사용하는 방법
        this.setState({count: ++this.state.count})
    };

    minus = ()=>{
        // 방법2) 개선된 방법 : current에는 this.state가 넘어온다.
        this.setState(current=>({
            count: current.count - 1,
        }))
    };

    render(){
        return (
        <div>
            <h1>The number is: {this.state.count}</h1>
            <button onClick={this.add}> Add </button>
            <button onClick={this.minus}> Minus </button>
        </div>
        );
    }
}

export default ReactCompoApp;