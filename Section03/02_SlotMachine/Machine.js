class Machine extends React.Component{
    render(){
        // let {s1,s2,s3} = this.props
        let props = this.props;
        let msg;
        if(props.s1 === props.s2 && props.s2 === props.s3){
            msg = "You win!";
        } else {
            msg = "You lose!";
        }
        return(
            <div>
                <p>{props.s1} {props.s2} {props.s3}</p>
                <p>{msg}</p>
            </div>
        );
    }
}