import React, { useContext } from "react";
import HookSection from "../hookSection/hookSection";

function UseContextSection() {
  // We need to use the context here!
  const pokeball = "???";
  return (
    <HookSection
      title="Pokéball out of context"
      url="https://reactjs.org/docs/hooks-reference.html#usecontext"
    >
      <img
        style={{ height: "85px", width: "85px" }}
        src={pokeball}
        alt="Pokeball from my context"
      />
    </HookSection>
  );
}

export default UseContextSection;
