import React , { Component } from 'react';
import axios from 'axios';

export default class VoteTodo extends Component {

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
                <h3>PROFILE PAGE</h3>
                <form onSubmit = {this.onSubmit}>
                    <div>
                    <img className="rounded-circle account-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDGQO5-8CPA9Hzl5_wLkAf6VtlMw52q7IwRw&usqp=CAU" width="100" height="100"/>
                    </div>
                    <div className="form-group">
                        <label>Name   : XYZ</label>
                    </div>
                    <div className="form-group">
                        <label>Address: ABC House,XYZ street, Delhi</label>
                    </div>
                    <div className="form-group">
                        <label>Aadhar Number: 999988887777</label>
                    </div>
                    <div className="form-group">
                        <label>Phone Number: 9876543210 </label>        
                    </div>
                    <div className="form-group">
                        <label>Local Body type :    Muncipality </label>
                    </div>
                    <div className="form-group">
                        <label>District: </label>
                        <label> Palakkad </label>
                    </div>
                    <div className="form-group">
                        <label>State:  Kerala  </label>
                        
                    </div>
                    <div className="form-group">  
                    </div>
                    <div className="form-group">
                        <input type="submit" value="People's App" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}