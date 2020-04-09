import React, { Component } from "react";
import axios from 'axios';

class GithubUserInfo extends Component{
    constructor(props){
        super(props);
        this.state = {imgUrl: '', name: ''}
    }

    async componentDidMount(){
        let response = await axios.get(`https://api.github.com/users/${this.props.username}`);
        console.log(response);
        let data = response.data;
        this.setState({imgUrl: data.avatar_url, name: data.name})
    }

    render(){
        return(
            <div>
                <h3>Github User: {this.state.name}</h3>
                <img src={this.state.imgUrl} />
            </div>
        )
    }
}

export default GithubUserInfo;