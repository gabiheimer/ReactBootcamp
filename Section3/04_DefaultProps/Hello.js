class Hello extends React.Component{
    static defaultProps = {
        from: 'Anonymous',
        energy: 10
    }

    render(){
        let energy = "!".repeat(this.props.energy); 
        return(
            <div>
                <p>Hi {this.props.to} from {this.props.from}{energy} </p>
            </div>
        );
    }
}