import React, {Component} from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css'

class Pokedex extends Component{
    render(){
        let {pokemon, totalExp, isWinner} = this.props;
        return(
            <div className='Pokedex'>
                {
                    isWinner
                    ? <h1 className='Pokedex-winner'>THIS HAND WINS!</h1>
                    : <h1 className='Pokedex-loser'>This hand loses :(</h1>
                }
                <p>Total experience: {totalExp}</p>
                <div className='Pokedex-cards'>
                    {pokemon.map(p => (
                        <Pokecard
                            id = {p.id} 
                            name = {p.name}
                            type = {p.type}
                            exp = {p.base_experience}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default Pokedex;