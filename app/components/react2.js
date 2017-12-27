import React,{Component} from 'react';
import ReactDom from 'react-dom';
const lessons = [
    { title: 'Lesson 1: title', description: 'Lesson 1: description' },
    { title: 'Lesson 2: title', description: 'Lesson 2: description' },
    { title: 'Lesson 3: title', description: 'Lesson 3: description' },
    { title: 'Lesson 4: title', description: 'Lesson 4: description' }
];
function AppComponent(){
    class Lesson extends Component {
        /* TODO */
        handleClick() {
            console.log(this.props.ind)
            console.log(this.props.title)
        }
        render(){
            return(
                <div onClick={this.handleClick.bind(this)}>
                    <h1>{this.props.title}</h1>
                    <p>{this.props.description}</p>
                </div>
            )
        }

    }

    class LessonsList extends Component {
        /* TODO */
        render(){
            return(
                <div>
                    {lessons.map((user, i) => <Lesson key={i} ind={i} title={user.title} description={user.description}/>)}
                </div>
            )
        }
    }
    ReactDom.render(<LessonsList/>,document.getElementById('react2'))
}
export default AppComponent
