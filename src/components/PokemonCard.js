import React, {useState} from "react";

const cardStyle = {
    position: "absolute",
    top: "200px",
    left: "40px"
}

const imgStyle = {
    height: "135%",
    width: "135%"
}

function PokemonCard({pokemon, myPokemon, setMyPokemon}) {

const [front, setFront] = useState(true)
// const [addMyPokemon, setAddMyPokemon] = useState(false)

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
    
    // setAddMyPokemon(!addMyPokemon)
    // console.log(addMyPokemon)
    // if(addMyPokemon === true) {
    //     setMyPokemon([...myPokemon, pokemon])
    // }
    
}

// console.log(pokemon.sprites)

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