import React from "react";

function MyPokemonForm({pokemon}) {
  

function onSubmit(e) {
    e.preventDefault()
}

  function handleClick() {
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
        .then(data => console.log(data))
}}


export default MyPokemonForm