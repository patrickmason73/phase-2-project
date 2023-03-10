import React, {useEffect} from "react";

const cardStyle = {
    position: "absolute",
    top: "200px",
    left: "40px",
    fontSize: "150%"
}

const imgStyle = {
    height: "150%",
    width: "150%"
}

function MyPokemon({pokemon, setMyPokemon}) {



useEffect(() => {
    fetch("http://localhost:3000/pokemon")
    .then(res => res.json())
    .then(data => setMyPokemon(data))
}, [pokemon])    


// function handleClick(e) {
//     console.log(e)
//     handleRemove(e.target)
   
// }


const displayPoke = pokemon.map((item) => {
    return (
        <div key={item.id} style={cardStyle}>
            <h2 style={{textTransform: 'capitalize'}}>{item.name}</h2>
            <img src={item.sprites.front} alt={item.name} style={imgStyle}></img>
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