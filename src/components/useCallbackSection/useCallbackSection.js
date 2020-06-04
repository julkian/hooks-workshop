import React, { useCallback, useState } from "react";
import HookSection from "../hookSection/hookSection";

const searchInPokedex = (pkmNumber) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pkmNumber}.png`;

function UseCallbackSection() {
  const [pokedexIndex, setPokedexIndex] = useState(4);
  const getMyPokemonPicture = useCallback(
    () => searchInPokedex(pokedexIndex),
    []
  );

  return (
    <HookSection
      title="Pokédex callback"
      url="https://reactjs.org/docs/hooks-reference.html#usecallback"
    >
      <p>Pokedex index: {pokedexIndex}</p>
      <img alt="My pokédex" src={getMyPokemonPicture()} />
      <div className="Use-state-buttons">
        <button
          disabled={pokedexIndex === 1}
          onClick={() => setPokedexIndex(pokedexIndex - 1)}
        >
          prev
        </button>
        <button
          disabled={pokedexIndex === 151}
          onClick={() => setPokedexIndex(pokedexIndex + 1)}
        >
          next
        </button>
      </div>
    </HookSection>
  );
}

export default UseCallbackSection;
