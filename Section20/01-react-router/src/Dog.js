import React, { Component } from "react";

class Dog extends Component{
    componentDidMount(){
        console.log('dog did mount')
    }

    componentWillUnmount(){
        console.log('dog will unmount')
    }

    render(){
        console.log('dog render')
        return(
            <div>
                <h1>Dog!!!</h1>
                <h3>This dog is named: {this.props.name}</h3>
                <img src='https://cdn.mos.cms.futurecdn.net/QjuZKXnkLQgsYsL98uhL9X.jpg' />
            </div>
        )
    }
}

export default Dog;

