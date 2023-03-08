import React, {useState, useEffect} from "react";

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
    <>
    <h1>{pokemon.name}</h1>
<img src={front ? frontSprite.front_default : backSprite.back_default} alt="sprite" onClick={handleSprite}></img>
    <button onClick={handleMyPokemon}>ADD TO MY POKEMON</button>
    </>
)


}

export default PokemonCard