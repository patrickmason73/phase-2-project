import React from "react";

const headStyle = {
    display: "flex",
        alignItems: "center",
        justifyContent: "center",  
}



function MyPokemon({pokemon}) {

const displayPoke = pokemon.map((item) => {
    const cardStyle = {
        fontSize: "150%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",  
    }
    
    const imgStyle = {
        height: "30%",
        width: "30%"
    }

    const levelStyle ={
        padding:"1em"
    }

    return (
        <div key={item.id} style={cardStyle}>
            <h2 style={{textTransform: 'capitalize'}}>{item.name}</h2>
            <h3 style={levelStyle}>Level: {item.level}</h3>
            <h4 style={levelStyle}>Nickname: {item.nickname}</h4>
            <img src={item.sprites.front} alt={item.name} style={imgStyle}></img>
            <button onClick={() => {   fetch(`http://localhost:3000/pokemon/${item.id}`, {method: 'DELETE'})}}>REMOVE</button>
        </div>
    )
})

    return (
        <div className="MyPokemon">
            <h1 style={headStyle}>MY POKEMON</h1>
            {displayPoke}
        </div>
    )
}

export default MyPokemon