class Hello extends React.Component{
    render(){
        console.log(this.props);
        let props = this.props;

        let energy = "!".repeat(this.props.energy)
        return(
            <div>
                <h1>Hello {props.to} from {props.from + " <3 "}{energy}</h1>
                <img src={this.props.img}></img>
            </div>
        );
    }
}