class App extends React.Component{
    render(){
        return(
            <div>
                <Friend
                    name = "Elton"
                    hobbies = {["Piano", "Singing", "Dancing"]}
                />
    
                <Friend
                    name = "Marie"
                    hobbies = {["Eat", "Sleep", "Catch birds"]}
                />
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));