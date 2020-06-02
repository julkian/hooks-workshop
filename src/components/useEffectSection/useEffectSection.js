import React from "react";
import HookSection from "../hookSection/hookSection";

function UseEffectSection() {
  const [myChoice, setMyChoice] = React.useState("...");
  const [garyChoice, setGaryChoice] = React.useState("...");
  React.useEffect(() => {
    if (myChoice === "Squirtle") {
      setGaryChoice("Bulbasaur");
    } else if (myChoice === "Charmander") {
      setGaryChoice("Squirtle");
    } else if (myChoice === "Bulbasaur") {
      setGaryChoice("Charmander");
    }
  }, [myChoice]);
  return (
    <HookSection
      title="The Gary of our lives"
      url="https://reactjs.org/docs/hooks-reference.html#usestate"
    >
      <p>If I choose {myChoice}</p>
      <p>Gary chooses {garyChoice}</p>
      <div>
        <button onClick={() => setMyChoice("Squirtle")}>Squirtle</button>
        <button onClick={() => setMyChoice("Charmander")}>Charmander</button>
        <button onClick={() => setMyChoice("Bulbasaur")}>Bulbasaur</button>
      </div>
    </HookSection>
  );
}

export default UseEffectSection;
