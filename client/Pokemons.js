import React from 'react';
import { useState, useEffect } from 'react';

export default function Pokemons() {
  const [pokemons, setPokemons]= useState([]);
  useEffect(()=>{
    async function fetchPokemons(){
     const { data } = await axios.get("/api/pokemons");
     console.log(data);
      setPokemons(data);
                       
    }
    fetchPokemons();
  })
  return (
    <div>
      <h1>PokemonList</h1>
      <ul>
        {pokemons.map((pokemon)=>{
          {console.log(pokemon)}
        })
          
          }
      </ul>
    </div>
  )
}
