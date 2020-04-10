import React, { Component } from "react";
import axios from 'axios';
import Card from "./Card";
import './Deck.css'

class Deck extends Component{
    constructor(props){
        super(props);
        this.state = {
            deckId: '',
            cards: [],
            lockBtn: false
        }
        this.getCard = this.getCard.bind(this);
    }

    async componentDidMount(){
        let response = await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle');
        this.setState({deckId: response.data.deck_id})
    }

    async getCard(){
        this.setState(st => ({lockBtn: true}));
        let {deckId, cards} = this.state;
        let response = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/`)
        if(response.data.success === true){
            let newCard = {
                img: response.data.cards[0].image,
                id: response.data.cards[0].code,
                value: response.data.cards[0].value,
                suit: response.data.cards[0].suit,
                rotation: Math.ceil(Math.random()*90),
                translatex: Math.ceil(Math.random()*10),
                translatey: Math.ceil(Math.random()*10)
            }
            this.setState(st => ({cards: [...st.cards, newCard], lockBtn: false}));
        }
    }

    render(){
        return(
            <div className='Deck'>
                <h1>Card Dealer</h1>
                <button disabled={this.state.lockBtn} onClick={this.getCard}>Deal Me a Card</button>
                {this.state.cards.map(c => (
                    <Card
                        img={c.img}
                        value={c.value}
                        suit={c.suit}
                        key={c.id}
                        translatex={c.translatex}
                        translatey={c.translatey}
                        rotation={c.rotation}
                    />
                ))}
                {this.state.cards.length > 51 && <h2>NO CARDS LEFT</h2>}
            </div>
        )
    }
}

export default Deck;