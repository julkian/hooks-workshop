import React from "react";
import HookSection from "../hookSection/hookSection";
import "./useStateSection.css";

function UseStateSection() {
  // Here we need a counter and a setter for it.
  const [pkmImage, setPkmImg] = React.useState(
    "https://sites.google.com/site/cc2016mhc/_/rsrc/1468869514581/home/who-s-that-pokemon-1/title.png?height=96"
  );
  return (
    <HookSection
      title="Hook's that Pokémon?!"
      url="https://reactjs.org/docs/hooks-reference.html#usestate"
    >
      <img src={pkmImage} alt="Hook's that pokemon?" />
      <div className="Use-state-buttons">
        <button
          onClick={() =>
            setPkmImg(
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
            )
          }
        >
          IT'S PIKACHU
        </button>
        <button
          onClick={() =>
            setPkmImg(
              "https://sites.google.com/site/cc2016mhc/_/rsrc/1468869514581/home/who-s-that-pokemon-1/title.png?height=96"
            )
          }
        >
          reset
        </button>
      </div>
    </HookSection>
  );
}

export default UseStateSection;
