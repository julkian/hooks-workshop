import React, { useState, useEffect } from "react";
import HookSection from "../hookSection/hookSection";

function UseEffectSection() {
  const [myChoice, setMyChoice] = useState("...");
  const [garysChoice, setGarysChoice] = useState("...");
  // Use some effect!
  return (
    <HookSection
      title="The Gary effect"
      url="https://reactjs.org/docs/hooks-reference.html#useeffect"
    >
      <p>If I choose {myChoice}</p>
      <p>Gary chooses {garysChoice}</p>
      <div>
        <button onClick={() => setMyChoice("Bulbasaur")}>Bulbasaur</button>
        <button onClick={() => setMyChoice("Charmander")}>Charmander</button>
        <button onClick={() => setMyChoice("Squirtle")}>Squirtle</button>
      </div>
    </HookSection>
  );
}

export default UseEffectSection;
