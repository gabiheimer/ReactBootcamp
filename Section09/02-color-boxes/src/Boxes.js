import React, {Component} from 'react';
import ColorBox from './ColorBox';
import './Boxes.css';

class Boxes extends Component{
    static defaultProps = {
        numBoxes: 15
    }

    render(){
        let boxes = [];
        for(var i = 0; i < this.props.numBoxes; i++){
            boxes.push(<ColorBox/>)
        }

        return(
            <div className='Boxes'>
                {boxes}
            </div>
        )
    }
}

export default Boxes;