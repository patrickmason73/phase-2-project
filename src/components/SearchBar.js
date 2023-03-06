import React, {useState} from "react";

function SearchBar({setSearch}) {

const [text, setText] = useState("")

function onSearch() {
   
    
    setSearch(text)
}

function handleSubmit(e) {
    e.preventDefault()
    setSearch(text)
}

function updateText(e) {
    setText(e.target.value)
}

return (
<div>
    Search for a Pokemon!
    <form onSubmit={handleSubmit}>
    <input onChange={updateText}></input>
    <button onSubmit={onSearch}>Submit</button>
    </form>
</div>
)


}

export default SearchBar