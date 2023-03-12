import React from "react";

const navStyle = {
    fontSize: "160%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }

function Home() {

return (
    <div>
    <p style={navStyle}>Welcome to Pat's Pokemon 2.0</p>

    <p style={navStyle}>Search for a Pokemon under the Search tab</p>

    <p style={navStyle}>View your pokemon under the My Pokemon tab</p>
    </div>
)

}


export default Home