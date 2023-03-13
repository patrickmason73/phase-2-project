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

function PokemonCard({pokemon, myPokemon, setMyPokemon}) {

const [front, setFront] = useState(true)


function handleMyPokemon() {
    fetch("http://localhost:3000/pokemon", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
    "id": pokemon.id,
    "name": pokemon.name,
    "sprites": {
      "front": pokemon.sprites.front_default,
      "back": pokemon.sprites.back_default
         }})
    })
    .then(res => res.json())
    .then(data => setMyPokemon([...myPokemon, data]))   
        
}


function handleSprite() {
    setFront(!front)
}

const frontSprite = pokemon.sprites
const backSprite = pokemon.sprites


return (
    <div style={cardStyle}>
    <h1 style={{textTransform: 'capitalize'}}>{pokemon.name}</h1>
<img src={front ? frontSprite.front_default : backSprite.back_default} alt="sprite" onClick={handleSprite} style={imgStyle}></img>
    <button onClick={handleMyPokemon}>ADD TO MY POKEMON</button>
    </div>
)


}

export default PokemonCard