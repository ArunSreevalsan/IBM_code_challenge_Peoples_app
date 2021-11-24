import React , { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Register extends Component {

    constructor(props) {
        super(props);

        this.state = {
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        }
    }

    onChangeTodoDescription = e => {
        this.setState({ todo_description: e.target.value });
    }

    onChangeTodoResponsible = e => {
        this.setState({ todo_responsible: e.target.value });
    }

    onChangeTodoPriority = e => {
        this.setState({ todo_priority: e.target.value });
    }

    onSubmit = e => {
        e.preventDefault();

        // SUBMIT LOGIC NEED TO BE IMPLEMENTED HERE
        console.log('Form submitteed:');
        console.log(`Todo Description: ${this.state.todo_description}`);
        console.log(`Todo Responsible: ${this.state.todo_responsible}`);
        console.log(`Todo Priority: ${this.state.todo_priority}`);
        console.log(`Todo Completed: ${this.state.todo_completed}`);

        const newTodo = {
            todo_description: this.state.todo_description,
            todo_responsible: this.state.todo_responsible,
            todo_priority: this.state.todo_priority,
            todo_completed: this.state.todo_completed
        }

        axios.post('http://localhost:4000/todos/add', newTodo)
            .then( res => console.log(res.data));
        
        this.setState({
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        })
    }

    render() {
        return (
            <div style={{marginTop: 20}}>
                <h3>REGISTER</h3>
                <form onSubmit = {this.onSubmit}>
                    <div className="form-group">
                        <label>Name: </label>
                        <input type="text"
                                className="form-control"
                                value={this.state.todo_description}
                                onChange={this.onChangeTodoDescription}
                                />

                    </div>
                    <div className="form-group">
                        <label>Address: </label>
                        <input type="text"
                                className="form-control"
                                value={this.state.todo_responsible}
                                onChange={this.onChangeTodoResponsible}
                                />
                                
                    </div>
                    <div className="form-group">
                        <label>Aadhar Number: </label>
                        <input type="text"
                                className="form-control"
                                value={this.state.todo_responsible}
                                onChange={this.onChangeTodoResponsible}
                                />
                                
                    </div>
                    <div className="form-group">
                        <label>Phone Number: </label>
                        <input type="text"
                                className="form-control"
                                value={this.state.todo_responsible}
                                onChange={this.onChangeTodoResponsible}
                                />
                                
                    </div>
                    <div className="form-group">
                        <label>Local Body: </label>
                        <input type="text"
                                className="form-control"
                                value={this.state.todo_responsible}
                                onChange={this.onChangeTodoResponsible}
                                />
                                
                    </div>
                    <div className="form-group">
                        <label>District: </label>
                        <input type="text"
                                className="form-control"
                                value={this.state.todo_responsible}
                                onChange={this.onChangeTodoResponsible}
                                />
                                
                    </div>
                    <div className="form-group">
                        <label>State: </label>
                        <input type="text"
                                className="form-control"
                                value={this.state.todo_responsible}
                                onChange={this.onChangeTodoResponsible}
                                />
                                
                    </div>
                    <div className="form-group">
                       
                        
                    </div>
                    <div className="form-group">
                    <Link to="/">
                    
                    <button type="button"  className="btn btn-success">
                   Submit
                   </button>
                   </Link>     
                    </div>
                </form>
            </div>
        )
    }
}