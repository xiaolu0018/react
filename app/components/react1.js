import React from 'react'
import ReactDom from 'react-dom'
//不能摸得狗
function renderContent (content) {
    class IsLike extends React.Component{
        constructor(){
            super()
            this.state={
                myis:'一般般吧',
                myno:'超赞的啊'
            }
        }
        static defaultProps={
            isLike:true
        }
        render(){
            return(
                <span style={{float:'right',color:'red'}}>{this.props.isLike?this.state.myis:this.state.myno}</span>
            )
        }
    }
  class Myh extends React.Component{
      constructor(){
          super()
          this.state={
              isRun:false
          }
      }
      run(){
          console.log('run');
          this.setState({
              isRun:true
          })

          setTimeout(()=>{this.setState({isRun:false});console.log(this.state.isRun)},2000)
      }
      handleClick(){
          console.log(this);
          this.run();
      }

    render(){
      return (
          <h1 onClick={this.handleClick.bind(this)}>
              {content}
              <IsLike isLike={this.state.isRun}/>
          </h1>)
    }
  }
  ReactDom.render(<Myh/>,document.getElementById('root'))
}

export default renderContent