import React, {useEffect, useState} from "react";
import {Route, Switch} from "react-router-dom";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import MyPokemon from "./MyPokemon";
import PokemonCard from "./PokemonCard";
import Home from "./Home";





function App() {

  const [level, setLevel] = useState(1)
  const [search, setSearch] = useState("charizard")
  const [myPokemon, setMyPokemon] = useState([])
  const [pokemon, setPokemon] = useState({
      "name" : "charizard",
      "id" : 6,
      "level" : 1,
      "sprites": {
          "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/6.png",
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",          
  }})
 

  useEffect(() => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${search}`)
      .then(res => res.json())
      .then(data => {
          console.log(data)
          setPokemon({...data, level})}
        )
  }, [search])

  useEffect(() => {
    fetch("http://localhost:3000/pokemon")
    .then(res => res.json())
    .then(data => setMyPokemon(data))
}, [myPokemon]);   
 
function handleMyPokemon(pokemon) {
    fetch("http://localhost:3000/pokemon", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
    "id": pokemon.id,
    "name": pokemon.name,
    "level": pokemon.level,
    "sprites": {
      "front": pokemon.sprites.front_default,
      "back": pokemon.sprites.back_default
         }})
    })
    .then(res => res.json())
    .then(data => setMyPokemon([...myPokemon, data]))   
        
}



  return (
    <div>
<Navbar />
<Switch>
  <Route exact path="/search">
 <SearchBar setSearch={setSearch} setLevel={setLevel}/>
 <PokemonCard pokemon={pokemon} myPokemon={myPokemon} setMyPokemon={setMyPokemon} handleMyPokemon={handleMyPokemon}/>
 </Route>
 <Route exact path="/mypokemon">
<MyPokemon pokemon={myPokemon} />
 </Route>
 <Route exact path="/">
<Home />
 </Route>
</Switch>
    </div>
  );
}

export default App;
