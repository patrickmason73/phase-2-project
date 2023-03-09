import React, {useEffect, useState} from "react";
import PokemonCard from "./PokemonCard";
import SearchBar from "./SearchBar";
import MyPokemon from "./MyPokemon";
import MyPokemonForm from "./MyPokemonForm";

function PokemonContainer() {
    const [search, setSearch] = useState("charizard")
    const [myPokemon, setMyPokemon] = useState([])
    const [pokemon, setPokemon] = useState({
        "name" : "charizard",
        "id" : 6,
        "sprites": {
            "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/6.png",
            "back_female": null,
            "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/6.png",
            "back_shiny_female": null,
            "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
            "front_female": null,
            "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/6.png",
            "front_shiny_female": null,
    }})
   
  
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${search}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setPokemon(data)}
          )
    }, [search])

    // function handleRemove(removedPokemon) {
    //    // const filterPoke = myPokemon.filter((pokemon) => pokemon.id === removedPokemon.id)
        
     
    //    // setMyPokemon(filterPoke)
    // }




    return (
        <div>
            <SearchBar setSearch={setSearch}/>
            <PokemonCard pokemon={pokemon} myPokemon={myPokemon} setMyPokemon={setMyPokemon}/>
            <MyPokemon pokemon={myPokemon} handleRemove={handleRemove} setMyPokemon={setMyPokemon}/>
            <MyPokemonForm pokemon={myPokemon}/>
        </div>
    )
}

export default PokemonContainer