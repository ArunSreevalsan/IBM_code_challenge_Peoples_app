import React , { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class EditTodo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/todos/' + this.props.match.params.id)
            .then( res => {
                this.setState({
                    todo_description: res.data.todo_description,
                    todo_responsible: res.data.todo_responsible,
                    todo_priority: res.data.todo_priority,
                    todo_completed: res.data.todo_completed
                })
            })
            .catch( err => console.log(err));
    }

    onChangeTodoDescription = (e) => {
        this.setState({
            todo_description: e.target.value
        });
    }

    onChangeTodoResponsible = (e) => {
        this.setState({
            todo_responsible: e.target.value
        });
    }

    onChangeTodoPriority = (e) => {
        this.setState({
            todo_priority: e.target.value
        });
    }

    onChangeTodoCompleted = (e) => {
        this.setState({
            todo_completed: !this.state.todo_completed
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        const obj = {
            todo_description: this.state.todo_description,
            todo_responsible: this.state.todo_responsible,
            todo_priority: this.state.todo_priority,
            todo_completed: this.state.todo_completed
        };
        axios.post('http://localhost:4000/todos/update/' + this.props.match.params.id, obj)
            .then( res => console.log(res.data));

        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h3>Raise your opinion</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Topic: </label>
                        <input type="text" 
                                className="form-control"
                                value={this.state.todo_description}
                                onChange={this.onChangeTodoDescription}
                                />
                    </div>
                    <div className="form-group">
                        <label>Description: </label>
                        <input type="text" 
                                className="form-control"
                                value={this.state.todo_responsible}
                                onChange={this.onChangeTodoResponsible}
                                />
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityLow"
                                    value="Agree"
                                    checked={this.state.todo_priority === "Agree"}
                                    onChange={this.onChangeTodoPriority}
                                    />
                            <label className="form-check-label">Agree</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityMedium"
                                    value="Disagree"
                                    checked={this.state.todo_priority === "Disagree"}
                                    onChange={this.onChangeTodoPriority}
                                    />
                            <label className="form-check-label">Disagree</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityHigh"
                                    value="Neutral"
                                    checked={this.state.todo_priority === "Neutral"}
                                    onChange={this.onChangeTodoPriority}
                                    />
                            <label className="form-check-label">Neutral</label>
                        </div>
                    </div> 
                    
                        <br />
                        <div className="form-group">
                        
                            <input type="submit" value="Vote now" className="btn btn-primary" />
                         
                        </div>
                </form>
            </div>
        )
    }
}