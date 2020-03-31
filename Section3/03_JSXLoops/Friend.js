class Friend extends React.Component{
    render(){
        let {name, hobbies} = this.props;
        // second way to do it:
        let lis = hobbies.map(hobbie => <li>{hobbie}</li>)
        return(
            <div>
                <h1>{name}</h1>
                {/* 1. Using map to loop inside the html part*/}
                <ul>
                    {hobbies.map(
                        hobbie => <li>{hobbie}</li>
                    )}
                </ul>

                {/* 2. Using map before the return and putting its result in a variable */}
                <h1>{name} 2</h1>
                <ul>
                    {lis}
                </ul>
            </div>
        )
    }
}