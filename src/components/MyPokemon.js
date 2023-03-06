import React from "react";

function MyPokemon({pokemon, handleRemove}) {

function handleClick(e) {
    handleRemove(e.target.value)
}


const displayPoke = pokemon.map((item) => {
    return (
        <div key={item.id}>
            <h2>{item.name}</h2>
            <img src={item.sprites.front_default}></img>
            <button onClick={handleClick}>REMOVE</button>
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