import React, {Component} from 'react';

class ButtonList extends Component {
    static defaultProps = {
        colors: ['pink', 'red', 'lime', 'orange']
    };

    constructor(props){
        super(props);
        this.state = {color: 'cyan'}
        //this.changeColor = this.changeColor.bind(this);
    }

    changeColor(newColor){
        this.setState({color: newColor});
    }

    render(){
        return(
            <div style = {{height: '300px', lineHeight: '300px', background: this.state.color}}>
                {this.props.colors.map( c => {
                    const colorObj = {background: c, margin: '30px'};
                    return <button onClick={this.changeColor.bind(this,c)} style={colorObj}>Click on me!</button>
                })}
            </div>
        );
    }
}

export default ButtonList;