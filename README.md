# Pat's Pokemon 2.0

Pat's Pokemon 2.0 is a React app that allows users to search for any pokemon and add them to a local db.json server. This app is serving as an upgrade upon my phase 1 javaScript project but with more advanced features as well as similar functionality coded with JSX.

## Usage

Under the Search tab, the user can search for any existing pokemon and as long as the name is spelled correctly, the pokemon's sprite image will be displayed as well as their name. Next to the sprite is a button that says "ADD TO MY POKEMON," clicking this will add the pokemon to the user's collection of pokemon which resides within the My Pokemon tab. Under this tab the user will see their pokemon that they have added and also have the option to remove them which does so by making a fetch 'DELETE' request to the local server.

Below is a gif showing the functionalities

![Alt Text](https://raw.githubusercontent.com/patrickmason73/phase-2-project/main/pats%20pokemon.gif)

Clicking the sprite also allows the user to see the backside of the pokemon.

## Code

The Search bar is set up as a form in which the search bar's text has it's own state, updating this state by typing in the box then submitting it causes a fetch 'GET' request to the pokemon API to occur. The promises returned give us the pokemon data we searched for in an array.

![Alt Text](https://raw.githubusercontent.com/patrickmason73/phase-2-project/main/phase%202%20proj%20cap.PNG)  

![Alt Text](https://raw.githubusercontent.com/patrickmason73/phase-2-project/main/phase%202%20proj%20cap%202.PNG)

Here is the code for displaying the pokemon as well as the fetch 'POST' request to the local server upon clicking the "ADD TO MY POKEMON" button:

![Alt Text](https://raw.githubusercontent.com/patrickmason73/phase-2-project/main/phase%202%20proj%20cap%203.PNG)



## Credits

[pokemonAPI](https://pokeapi.co/)
