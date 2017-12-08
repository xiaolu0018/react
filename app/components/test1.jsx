import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            time: new Date(),
            myIN:"默认输入",
            list:[]//li列表
        }
        this.handleInput=this.handleInput.bind(this)
        this.handleKeyDown=this.handleKeyDown.bind(this)
    }
    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);

    }
    componentDidUpdate(){

    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    tick() {
        this.setState({
            time: new Date()
        });
    }
    handleKeyDown(e){
        if(e.which=='13'){//回车键添加
            this.state.list.push(e.target.value);
            this.setState({
                list:this.state.list
            })
            e.target.value=""
            $.get('http://localhost:8080/db',function(data){
                console.log(data)
            })
            $.ajax({
                type:'post',
                url:'http://localhost:8080/db',
                contentType:"application/json",
                data:JSON.stringify({
                    "id": 100,
                    "first_name": "lxl",
                    "last_name": "xl",
                    "phone": "34888-331-5610"
                },),
                success:function(data){
                    console.log(data)
                },
                error:function(xhr){
                    console.log(xhr)
                }

            })
        }
    }
    handleInput(e){
        // console.log(this)
        // console.log(e.target.value)
        this.setState({
            myIN:e.target.value
        })
    }
    handleDel(e){
      //  e.target.parentNode.parentNode.removeChild(e.target.parentNode)
        $(e.target).parents('li').remove();
    }
    render() {
        return (
            <div>
                <input type="text" tabIndex="1" onKeyDown={this.handleKeyDown} onChange={this.handleInput}/>
                <span style={{paddingLeft:'2em',color:'blue'}}>{this.state.myIN}</span>
                <ul>
                    {this.state.list.map((con,ind)=>{
                        {
                            return (<li key={ind} className="nolist" style={{listStyle:'none'}}>{(ind+1)+".  "+con}
                                    <span onClick={this.handleDel.bind(this)} style={{float:'right',color:'red',cursor:'pointer'}}>&times;</span>
                            </li>)
                        }
                    })}
                </ul>
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


