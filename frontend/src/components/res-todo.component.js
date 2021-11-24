import React , { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Todo = props => (
    <tr>
        <td className = { props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_description}</td>
        <td className = { props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_responsible}</td>
        <td className = { props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_priority}</td>
        <td>
            <Link to={"/edit/" + props.todo._id}>Show Voting graph</Link>
        </td>
    </tr>
)


export default class TodosRes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:4000/todos')
            .then( res => {
                this.setState({
                    todos: res.data
                })
            })
            .catch( err => console.log(err));
    }

    componentDidUpdate() {
        axios.get('http://localhost:4000/todos')
            .then( res => {
                this.setState({
                    todos: res.data
                })
            })
            .catch( err => console.log(err));
    }

    todoList = () => this.state.todos.map(
        (todo, index) => <Todo todo={todo} key={index} />
    )
    

    render() {
        return (
            <div>
                <h3>Topic List</h3>
                <table className="table table-striped" style={{ marginTop: 20}}>
                    <thead>
                        <tr>
                            <th>Topic</th>
                            <th>Description</th>
                            <th>Your Vote</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.todoList() }
                    </tbody>
                </table>
            </div>
        )
    }
}