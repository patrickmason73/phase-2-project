import React, {useState} from "react";

const cardStyle = {
    display: "flex",
        alignItems: "center",
        justifyContent: "center",  
}

const imgStyle = {
    height: "20%",
    width: "20%"
}

function PokemonCard({pokemon, handleMyPokemon}) {

const [front, setFront] = useState(true)

function handleSprite() {
    setFront(!front)
}

function handleClick() {
    handleMyPokemon(pokemon)
}

const frontSprite = pokemon.sprites
const backSprite = pokemon.sprites


return (
    <div style={cardStyle}>
    <h1 style={{textTransform: 'capitalize'}}>{pokemon.name}</h1> 
    <img src={front ? frontSprite.front_default : backSprite.back_default} alt="sprite" onClick={handleSprite} style={imgStyle}></img>
    <h2>Level: {pokemon.level}</h2>        
    <button onClick={handleClick}>ADD TO MY POKEMON</button>
    </div>
)


}

export default PokemonCard