import React, {useState} from "react";

const searchStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",  
}

function SearchBar({setSearch, setLevel}) {

const [text, setText] = useState("")
const [levelText, setLevelText] = useState("")

function handleSubmit(e) {
    e.preventDefault()
    setSearch(text.toLowerCase())
    setLevel(levelText)
}

function updateLevel(e) {
    setLevelText(parseInt(e.target.value))
}

function updateText(e) {
    setText(e.target.value)
}

return (
<div style={searchStyle}>
    Search for a Pokemon!
    <form onSubmit={handleSubmit}>
    <input onChange={updateText}></input>
       Give it a level!
    <input onChange={updateLevel}></input>
    <button type="submit">Submit</button>
    
    </form>
</div>
)


}

export default SearchBar