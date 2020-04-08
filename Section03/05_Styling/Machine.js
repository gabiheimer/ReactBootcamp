class Machine extends React.Component{
    render(){
        // let {s1,s2,s3} = this.props
        let props = this.props;
        let msg, classname;
        let colors = {fontSize:'50px', backgroundColor: 'purple'}
        if(props.s1 === props.s2 && props.s2 === props.s3){
            msg = "You win!";
            classname = 'Machine-winner'
        } else {
            msg = "You lose!";
            classname = 'Machine-loser'
        }
        return(
            <div className="Machine">
                <p style={colors}>{props.s1} {props.s2} {props.s3}</p>
                <p className={classname} style={{fontSize: '10px', fontWeight: 'bold'}}>{msg}</p>
            </div>
        );
    }
}