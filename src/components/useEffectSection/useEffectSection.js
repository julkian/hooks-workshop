import React, { useState, useEffect } from "react";
import HookSection from "../hookSection/hookSection";

function UseEffectSection() {
  const [myChoice, setMyChoice] = useState("...");
  const [garysChoice, setGarysChoice] = useState("...");
  useEffect(() => {
    if (myChoice === "Squirtle") {
      setGarysChoice("Bulbasaur");
    } else if (myChoice === "Charmander") {
      setGarysChoice("Squirtle");
    } else if (myChoice === "Bulbasaur") {
      setGarysChoice("Charmander");
    }
  }, [myChoice]);

  return (
    <HookSection
      title="The Gary effect"
      url="https://reactjs.org/docs/hooks-reference.html#usestate"
    >
      <p>If I choose {myChoice}</p>
      <p>Gary chooses {garysChoice}</p>
      <div>
        <button onClick={() => setMyChoice("Squirtle")}>Squirtle</button>
        <button onClick={() => setMyChoice("Charmander")}>Charmander</button>
        <button onClick={() => setMyChoice("Bulbasaur")}>Bulbasaur</button>
      </div>
    </HookSection>
  );
}

export default UseEffectSection;
