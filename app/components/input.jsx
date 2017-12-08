import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            time: new Date(),
            myIN:"默认输入"
        }
    }
    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    tick() {
        this.setState({
            time: new Date()
        });
    }
    handleInput(e){
        console.log(this)
        this.setState({
            myIN:e.target.value
        })
    }
    render() {
        return (
            <div>
                <input type="text" onInput={this.handleInput.bind(this)}/>
                <span>{this.state.myIN}</span>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.time.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

ReactDOM.render(
    <Clock />,
    document.getElementById('myTest')
);


