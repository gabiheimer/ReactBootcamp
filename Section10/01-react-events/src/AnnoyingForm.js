import React, {Component} from 'react';

class AnnoyingForm extends Component{
    handleKeyUp(evt){
        console.log(evt);
        if(evt.keyCode === 56 || evt.keyCode === 106){
            alert('*********************** I LOVE THIS CHARACTER *************************');
        } else {
            alert('BOO');
        }
    }

    render(){
        return (
            <div>
                <h3>Try Typing In Here!</h3>
                <textarea onKeyUp={this.handleKeyUp}/>
            </div>
        )
    }
}

export default AnnoyingForm;