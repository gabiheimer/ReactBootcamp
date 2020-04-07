import React, { Component } from "react";

class MultipleForm extends Component{
    constructor(props){
        super(props);
        this.state = {username: '', email: '', password: ''}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(evt){
        this.setState({[evt.target.name]: evt.target.value})
    }

    handleSubmit(evt){
        evt.preventDefault();
        this.setState({username: "", email: "", password: ""})
    }

    render(){
        return (
            <div className="App">
            <h1>Form Demo</h1>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='username'>Username:</label>
                <input
                    name='username'
                    id='username'
                    type='text' 
                    value={this.state.username} 
                    onChange={this.handleChange}
                    placeholder='username'
                />
                <input 
                    name='email'
                    type='email'
                    value={this.state.email}
                    onChange={this.handleChange}
                    placeholder='password'
                />
                <input 
                    name='password'
                    type='password'
                    value={this.state.password}
                    onChange={this.handleChange}
                    placeholder='password'
                />
                <button>Submit!</button>
            </form>
            </div>
        );
    }
}

export default MultipleForm;