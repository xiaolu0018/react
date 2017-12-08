import React from 'react'

class TodoHeader extends React.Component {
    // 绑定键盘回车事件，添加新任务
    handlerKeyUp(e) {
        if(e.keyCode == 13) { // enter键的 keyCode 为13
            let value = e.target.value;
            if(!value) return false;
            let newTodoItem = {
                text: value,
                isDone: false
            };
            e.target.value = '';
            this.props.addTodo(newTodoItem) // 通过 this.props 来调用父组件传递过来的addTodo方法
        }
    }
    render(){
        return (
            <div className="todo-header">
                <input onKeyUp={this.handlerKeyUp.bind(this)} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
            </div>
        )
    }
}
export default TodoHeader // 将TodoHeader导出，否则父组件无法导入