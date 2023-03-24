import React, {useState} from "react";

const searchStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",  
}

const levelStyle ={
    padding:"1em"
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
   <strong>Search for a Pokemon!</strong>
    <form onSubmit={handleSubmit}>
    <input onChange={updateText} value={text}></input>
     <strong style={levelStyle}>Give it a level!</strong>
    <input onChange={updateLevel} value={levelText}></input>
    <button type="submit">Submit</button>
    </form>
</div>
)


}

export default SearchBar