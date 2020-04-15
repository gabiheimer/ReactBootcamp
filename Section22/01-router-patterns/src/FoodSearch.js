import React, { Component } from "react";
import {Link} from 'react-router-dom';

class FoodSearch extends Component{
    constructor(props){
        super(props);
        this.state = {
            query: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(evt){
        this.setState({query: evt.target.value})
    }

    handleClick(evt){
        evt.preventDefault();
        this.props.history.push(`/food/${this.state.query}`);
    }

    render(){
        return(
            <form>
                <input
                    type='text'
                    placeholder='search for food'
                    onChange={this.handleChange}
                    value={this.state.query}
                />
                {/* Simple method */}
                <Link to={`/food/${this.state.query}`}>Search</Link>
                {/* Using history */}
                <button onClick={this.handleClick}>Save new food</button>
            </form>
        )
    }
}

export default FoodSearch;