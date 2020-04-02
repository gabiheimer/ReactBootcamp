import React, {Component} from 'react';

class IconList extends Component{
    static defaultProps = {
        options: [
            'angry',
            'anchor',
            'archive',
            'at',
            'archway',
            'baby',
            'bell',
            'car',
            'city',
            'cloud',
            'couch'
        ]
    };

    constructor(props){
        super(props);
        this.state = {icons: []};
        this.addIcon = this.addIcon.bind(this);
    }

    addIcon(){
        let idx = Math.floor(Math.random() * this.props.options.length);
        let newIcon = this.props.options[idx];
        let newList = [...this.state.icons, newIcon];

        this.setState((curState) => {
            return {icons: newList}
        });
    }

    render(){
        const icons = this.state.icons.map(i => <i className={`fas fa-${i}`}></i>)
        return(
            <div>
                <h1>Icons: {icons}</h1>
                <button onClick={this.addIcon}>Add new icon</button>
            </div>
        )
    }
}

export default IconList;