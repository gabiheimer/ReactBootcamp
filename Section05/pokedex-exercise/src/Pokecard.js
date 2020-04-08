import React, {Component} from 'react';
import './Pokecard.css';

class Pokecard extends Component{
    render(){
        let {name, id, type, exp} = this.props;
        let zeros = '0'.repeat(2-Math.floor(Math.log10(id)));
        let image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${zeros}${id}.png`
        return(
            <div className='Pokecard'>
                <div className='Pokecard-image'>
                    <img alt={name} src={image} />
                </div>
                <h1 className='Pokecard-name'>{name}</h1>
                <p>Type: {type}</p>
                <p>EXP: {exp}</p>
            </div>
        );
    }
}

export default Pokecard;