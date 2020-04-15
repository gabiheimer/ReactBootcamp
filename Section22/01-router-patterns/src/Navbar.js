import React, { Component } from "react";
import {withRouter} from 'react-router-dom';

class Navbar extends Component{
    constructor(props){
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleBack = this.handleBack.bind(this);
    }

    handleLogin(){
        alert('Loged in!');
        this.props.history.push('/food/salmon');
    }

    handleBack(){
        this.props.history.goBack();
    }

    render(){
        return(
            <div>
                <button onClick={this.handleBack}>Go back</button>
                <button onClick={this.handleLogin}>Log in</button>
            </div>
        )
    }
}

export default withRouter(Navbar);