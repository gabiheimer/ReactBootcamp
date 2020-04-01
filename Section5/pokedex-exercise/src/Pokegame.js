import React, {Component} from 'react';
import Pokedex from './Pokedex';
import {makeHands} from './helpers';

class Pokegame extends Component{
    static defaultProps = {
        pokemon: [
            {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
            {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
            {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
            {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
            {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
            {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
            {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
          ]
    }

    render(){
        let winner = [false, false];
        let hands = makeHands(this.props.pokemon);
        if(hands[0].exp > hands[1].exp) winner[0] = true;
        else winner[1] = true;

        return(
            <div>
                <Pokedex pokemon={hands[0].cards} totalExp={hands[0].exp} isWinner={winner[0]}/>
                <Pokedex pokemon={hands[1].cards} totalExp={hands[1].exp} isWinner={winner[1]}/>
            </div>
        );
    }
}

export default Pokegame;