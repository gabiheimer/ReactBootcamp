import React, {Component} from 'react';

class Button extends Component{
    render(){
        return(
            <button onClick={function() {
                alert('Clicked!');
            }}>
                Clicke me!
            </button>
        );
    }
}

export default Button;