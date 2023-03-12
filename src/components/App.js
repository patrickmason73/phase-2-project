import React, {useEffect, useState} from "react";
import {Route, Switch} from "react-router-dom";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import MyPokemon from "./MyPokemon";
import PokemonCard from "./PokemonCard";
import Home from "./Home";





function App() {

  const [search, setSearch] = useState("charizard")
  const [myPokemon, setMyPokemon] = useState([])
  const [pokemon, setPokemon] = useState({
      "name" : "charizard",
      "id" : 6,
      "sprites": {
          "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/6.png",
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
          
  }})
 

  useEffect(() => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${search}`)
      .then(res => res.json())
      .then(data => {
          console.log(data)
          setPokemon(data)}
        )
  }, [search])
 

  return (
    <div>
<Navbar />
<Switch>
  <Route exact path="/search">
 <SearchBar setSearch={setSearch} />
 <PokemonCard pokemon={pokemon} myPokemon={myPokemon} setMyPokemon={setMyPokemon}/>
 </Route>
 <Route exact path="/mypokemon">
<MyPokemon pokemon={myPokemon} setMyPokemon={setMyPokemon}/>
 </Route>
 <Route exact path="/">
<Home />
 </Route>
</Switch>
    </div>
  );
}

export default App;
