import { useState } from "react";

const pokemon = [
    { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
    { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
    { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
    { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
    { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
    { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
    { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
    { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
];


const pokemonTypes = new Set();     // Hashtable
for(let  i = 0; i < pokemon.length; i++) {
  const pokemonType = pokemon[i].type;
  pokemonTypes.add(pokemonType);
}
const arrayOfTypes = ["All", ...pokemonTypes]; // Spread

// Select Dropdown to show all type (DONE)
// Show List of all pokemon by default (DONE)
// When some element element in dropdown is selected, show filtered results. (DONE)

function PokemonCard(props) {
    return <div style={{aspectRatio: 9 / 16, borderWidth: 1, padding: 20, width: 125, margin: 15, border: '1px solid black'}}>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`} alt={props.id} />
        <p>{props.name}</p>
        <p>{props.type}</p>
    </div>
}


// Add all functionality in the dropdown
function SelectPokemon(props) {
    const [ type, setType ]= useState(props.initialType || arrayOfTypes[0]); // [data, function to update data]

    const filteredList = [];
    for(let i = 0; i < pokemon.length; i++) {
        if(pokemon[i].type === type || type === "All") {
            filteredList.push(pokemon[i]);
        }
    }

    return <div>
        <select name="type" id="type" style={{width: 200, padding: 10}} value={type} 
        onChange={e => setType(e.target.value)}>
        {arrayOfTypes.map((currentType) => <option value={currentType} key={currentType} style={{padding: 5}}>{currentType}</option>
        )}
        </select>

        <div style={{display: "flex", flexWrap: "wrap"}}>
            {filteredList.map((currentPokemon) => <PokemonCard {...currentPokemon} key={currentPokemon.id} />)}
        </div>
    </div>
}

export default SelectPokemon

// 