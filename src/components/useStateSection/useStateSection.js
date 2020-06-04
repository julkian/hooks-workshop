import React, { useState } from "react";
import HookSection from "../hookSection/hookSection";
import "./useStateSection.css";

const WHO_IS_THAT_POKIMON_IMAGE =
  "https://sites.google.com/site/cc2016mhc/_/rsrc/1468869514581/home/who-s-that-pokemon-1/title.png?height=96";

const PKMN_IMAGE =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png";

function UseStateSection() {
  // Something must be done here
  return (
    <HookSection
      title="Hook's that Pokémon?!"
      url="https://reactjs.org/docs/hooks-reference.html#usestate"
    >
      <img src={WHO_IS_THAT_POKIMON_IMAGE} alt="Hook's that pokemon?" />
      <div className="Use-state-buttons">
        <button onClick={() => alert("Do something so I can see PKMN_IMAGE")}>
          IT'S PIKACHU
        </button>
        <button
          onClick={() =>
            alert("do something so I can see WHO_IS_THAT_POKIMON_IMAGE")
          }
        >
          reset
        </button>
      </div>
    </HookSection>
  );
}

export default UseStateSection;
