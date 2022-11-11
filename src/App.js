import React from "react";

class App extends React.Component{
    state = {
        isLoading: true,
        movies: [],
    };

    /*
    LoadingRender(loading){
        return(
            <div>
                {loading? "HELLO" : "WORLD"}
            </div>
        )
    };
    */

    componentDidMount(){
        setTimeout(()=>{
            this.setState({isLoading: false});
        }, 5000); // 5sec
        /*
        영화 앱을 로딩하는 기능을 넣는다.
        */
    }
    
    render() {
        const {isLoading} = this.state;
        return (
            <div>
                {isLoading? "Loading... " : "We are ready."}
            </div>
        );
    }       
}

export default App;