import React, { Component } from "react";
import {randomWord} from './words';
import "./Hangman.css";
import img0 from "./images/0.jpg";
import img1 from "./images/1.jpg";
import img2 from "./images/2.jpg";
import img3 from "./images/3.jpg";
import img4 from "./images/4.jpg";
import img5 from "./images/5.jpg";
import img6 from "./images/6.jpg";
import AlphaButtons from "./AlphaButtons";

class Hangman extends Component {
  /** by default, allow 6 guesses and use provided gallows images. */
  static defaultProps = {
    maxWrong: 6,
    images: [img0, img1, img2, img3, img4, img5, img6]
  };

  constructor(props) {
    super(props);
    this.state = { nWrong: 0, guessed: new Set(), answer: randomWord()};

    this.generateButtons = this.generateButtons.bind(this);
    this.handleGuess = this.handleGuess.bind(this);
    this.restart = this.restart.bind(this);
  }

  restart(){
    this.setState({nWrong: 0, guessed: new Set(), answer: randomWord()});
  }

  /** generateButtons: return array of letter buttons to render */
  generateButtons(letters) {
    return letters.split("").map(ltr => (
      <button
        key={ltr}
        value={ltr}
        onClick={this.handleGuess}
        disabled={this.state.guessed.has(ltr)}
      >
        {ltr}
      </button>
    ));
  }

  /** guessedWord: show current-state of word:
    if guessed letters are {a,p,e}, show "app_e" for "apple"
  */
  guessedWord() {
    return this.state.answer
      .split("")
      .map(ltr => (this.state.guessed.has(ltr) ? ltr : "_"));
  }

  /** handleGuest: handle a guessed letter:
    - add to guessed letters
    - if not in answer, increase number-wrong guesses
  */
  handleGuess(evt) {
    let ltr = evt.target.value;
    this.setState(st => ({
      guessed: st.guessed.add(ltr),
      nWrong: st.nWrong + (st.answer.includes(ltr) ? 0 : 1)
    }));
  }

  /** render: render game */
  render() {
    let won = (this.guessedWord().join("") === this.state.answer);
    let lose;

    let message;
    if(this.state.nWrong === this.props.maxWrong){
        lose = true;
        message = 
        <div className='Hangman-lossMessage'>
          <p className='Hangman-word'>{this.state.answer}</p>
          <h2 className='Hangman-lose'>GAME OVER</h2>
        </div>
    } else if(won){
      message = <h2 className='Hangman-win'>YOU WIN!</h2>
    }

    return (
      <div className='Hangman'>
        <h1>Hangman</h1>
        <img alt={this.state.nWrong + " wrong guesses."} src={this.props.images[this.state.nWrong]} />
        {!won && !lose && <p className='Hangman-guesses'>Wrong Guesses: {this.state.nWrong}</p>}
        {!lose && <p className='Hangman-word'>{this.guessedWord()}</p>}
        {message}
        {!won && !lose && <AlphaButtons generateButtons={this.generateButtons}/>}
        <button className='Hangman-restart' onClick={this.restart}>New Game</button>
      </div>
    );
  }
}

export default Hangman;
