import React, {Component} from 'react';
import NumberItem from './NumberItem';

class NumberList extends Component {
    constructor(props){
        super(props);
        this.state = {nums: [1,2,3,4,5]};
        this.remove = this.remove.bind(this);
    }

    remove(num){
        this.setState(st => {
            return {nums: st.nums.filter(n => n !== num)}
        });
    }

    render(){
        // method 1
        //let nums = this.state.nums.map(n => <NumberItem remove={this.remove.bind(this, n)} value={n} />);

        // method 2
        let nums = this.state.nums.map(n => <NumberItem remove={this.remove} value={n} />);
        return(
            <div>
                <h2>First Number List</h2>
                <ul>{nums}</ul>
            </div>
        );
    }
}

export default NumberList;