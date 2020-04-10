import React, { Component } from "react";
import axios from 'axios';
import Joke from "./Joke";
import './JokeList.css';
import smiley from './laugh.png';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

class JokeList extends Component{
    constructor(props){
        super(props);
        this.state = {
            jokes: [],
            isLoaded: false
        }
        this.changeScore = this.changeScore.bind(this);
        this.newJokes = this.newJokes.bind(this);
        this.seenJokes = new Set();
    }

    static defaultProps = {
        apiLink: 'https://icanhazdadjoke.com/'
    }

    async componentDidMount(){
        let storedJokes = JSON.parse(window.localStorage.getItem('dadJokes'));
        if(storedJokes && storedJokes.length > 0){
            this.setState({isLoaded: true, jokes: storedJokes}, () => {
                this.seenJokes = new Set(this.state.jokes.map(j => j.id));
            });
        } else {
            this.newJokes();
        }
    }

    componentDidUpdate(){
        window.localStorage.setItem('dadJokes', JSON.stringify(this.state.jokes));
    }

    changeScore(id, qty){
        let updatedJokes = this.state.jokes.map(j => {
            if(j.id === id){
                return {...j, score: j.score+qty};
            } else {
                return j;
            }
        });

        updatedJokes.sort(function(a,b){ return b.score-a.score});

        this.setState({jokes: updatedJokes});
    }

    async newJokes(){
        this.setState({isLoaded: false});
        let newJokeCount = 0;
        while(newJokeCount < 10){
            let response = await axios.get(this.props.apiLink, {
                headers: {Accept: 'application/json'}
            });
            let newJoke = {
                text: response.data.joke,
                id: response.data.id,
                score: 0
            };

            if(this.seenJokes.has(newJoke.id)){
                continue;
            }

            this.seenJokes.add(newJoke.id)
            newJokeCount++;
            this.setState(st => ({jokes: [...st.jokes, newJoke]}));
        }
        this.setState({isLoaded: true})
    }

    renderJokes(){
        return(
            <SimpleBar className={this.state.isLoaded ? 'JokeList-list' : 'JokeList-loader'}>
                {this.state.isLoaded
                    ? this.state.jokes.map((joke) => (
                        <Joke
                            key={joke.id}
                            text={joke.text}
                            id={joke.id}
                            score={joke.score}
                            changeScore={this.changeScore}
                        />
                    ))
                    : <div>
                        <div className='Loader'>
                            <i className="far fa-grin-squint"></i>
                        </div>
                        <p>Loading...</p>
                    </div> 
                }
            </SimpleBar>
        )
    }

    render(){
        return(
            <div className='JokeList'>
                <div className='JokeList-sidebar'>
                    <h1 className='JokeList-sidebar-title'><span>Dad</span>Jokes</h1>
                    <div className='JokeList-sidebar-smiley'>
                        <img src={smiley} />
                    </div>
                    <button disabled={!this.state.isLoaded} className='JokeList-sidebar-btn' onClick={this.newJokes}>New Jokes</button>
                </div>
                {this.renderJokes()}
            </div>
        )
    }
}

export default JokeList;