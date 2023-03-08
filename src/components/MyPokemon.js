import React, {useEffect, useState} from "react";

function MyPokemon({pokemon, handleRemove, setMyPokemon}) {



useEffect(() => {
    fetch("http://localhost:3000/pokemon")
    .then(res => res.json())
    .then(data => setMyPokemon(data))
}, [pokemon])    


function handleClick(e) {
    console.log(e)
    handleRemove(e.target)
   
}


const displayPoke = pokemon.map((item) => {
    return (
        <div key={item.id}>
            <h2>{item.name}</h2>
            <img src={item.sprites.front} alt={item.name}></img>
            <button onClick={() => {   fetch(`http://localhost:3000/pokemon/${item.id}`, {method: 'DELETE'})}}>REMOVE</button>
        </div>
    )
})

    return (
        <div className="MyPokemon">
            <h1>MY POKEMON</h1>
            {displayPoke}
        </div>
    )
}

export default MyPokemon