import React, { Component } from "react";
import './Joke.css'

class Joke extends Component{
    static defaultProps = {
        emojis: ['😠️','😕️','🙂️','😃️','😆️','🤣️'],
        colors: ['rgb(201, 29, 29)', 'rgb(201, 83, 29)', 'rgb(219, 138, 32)', 'rgb(250, 200, 38)', 'rgb(186, 250, 38)', 'rgb(95, 212, 41)']
    }

    constructor(props){
        super(props);
        this.upvote = this.upvote.bind(this);
        this.downvote = this.downvote.bind(this);
        this.getBorderColor = this.getBorderColor.bind(this);
    }

    upvote(){
        this.props.changeScore(this.props.id, 1);
    }

    downvote(){
        this.props.changeScore(this.props.id, -1);
    }

    getBorderColor(){
        if(this.props.score < 0){
            return this.props.colors[0];
        } else if(this.props.score > 11){
            return this.props.colors[5];
        } else {
            return this.props.colors[Math.floor(this.props.score/3)+1];
        }
    }

    renderEmoji(){
        if(this.props.score < 0){
            return this.props.emojis[0];
        } else if(this.props.score > 11){
            return this.props.emojis[5];
        } else {
            return this.props.emojis[Math.floor(this.props.score/3)+1];
        }
    }

    render(){
        let borderColor = this.getBorderColor();
        return (
            <div className='Joke'>
                <div className='Joke-scoreArea'>
                    <button className='up' onClick={this.upvote}><i className="fas fa-arrow-up"></i></button>
                    <div style={{border: `3px solid ${borderColor}`}} className='score'>{this.props.score}</div>
                    <button className='down' onClick={this.downvote}><i className="fas fa-arrow-down"></i></button>
                </div>
                <p className='Joke-text'>{this.props.text}</p>
                <div className='Joke-emoji'>{this.renderEmoji()}</div>
            </div>
        )
    }
}

export default Joke;