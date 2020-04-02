import React, {Component} from 'react';
import './LottoBall.css'

class LottoBall extends Component{
    render(){
        return(
            <div className='LottoBall'>
                <h1>{this.props.num}</h1>
            </div>
        )
    }
}

export default LottoBall;