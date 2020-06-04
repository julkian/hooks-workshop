import React, { useCallback, useState } from "react";
import HookSection from "../hookSection/hookSection";

const getMyPokemon = (pkmNumber) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pkmNumber}.png`;

function UseCallbackSection() {
  const [pokemonNumber, setPokemonNumber] = useState(4);
  const getMyPokemonPicture = useCallback(() => getMyPokemon(pokemonNumber), [
    pokemonNumber,
  ]);

  return (
    <HookSection
      title="Pokedex"
      url="https://reactjs.org/docs/hooks-reference.html#usestate"
    >
      <p>Pokedex index: {pokemonNumber}</p>
      <img alt="Charmander evolving" src={getMyPokemonPicture()} />
      <div className="Use-state-buttons">
        <button
          disabled={pokemonNumber === 1}
          onClick={() => setPokemonNumber(pokemonNumber - 1)}
        >
          prev
        </button>
        <button
          disabled={pokemonNumber === 151}
          onClick={() => setPokemonNumber(pokemonNumber + 1)}
        >
          next
        </button>
      </div>
    </HookSection>
  );
}

export default UseCallbackSection;
