import React, {useState} from "react";

const cardStyle = {
    display: "flex",
        alignItems: "center",
        justifyContent: "center",  
}

const levelStyle ={
    padding:"1em"
}

const imgStyle = {
    height: "20%",
    width: "20%"
}

// const nicknameStyle = {
//    padding: "10px 50px 30px 0"
// }

function PokemonCard({pokemon, handleMyPokemon, setNickname}) {

const [front, setFront] = useState(true)
const [nicknameText, setNicknameText] = useState("")

function handleSprite() {
    setFront(!front)
}

function handleChange(e) {
    setNicknameText(e.target.value)
    setNickname(nicknameText)
}

function handleClick(e) {
    e.preventDefault()
    handleMyPokemon(pokemon)
}

const frontSprite = pokemon.sprites
const backSprite = pokemon.sprites


return (
    <form style={cardStyle} onSubmit={handleClick}>
    <h1 style={{textTransform: 'capitalize'}}>{pokemon.name}</h1> 
    <img src={front ? frontSprite.front_default : backSprite.back_default} alt="sprite" onClick={handleSprite} style={imgStyle}></img>
    <h2 style={levelStyle}>Level: {pokemon.level}</h2>
    <h3>Give it a nickname: </h3>   
    <input  onChange={handleChange} value={nicknameText}></input>    
    <button type="submit">ADD TO MY POKEMON</button>
    </form>
)


}

export default PokemonCard