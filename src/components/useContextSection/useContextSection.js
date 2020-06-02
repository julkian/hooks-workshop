import React from "react";
import HookSection from "../hookSection/hookSection";
import { BagContext } from "../../App";

function UseContextSection() {
  const pokeball = React.useContext(BagContext).pokeball;
  return (
    <HookSection
      title="Where did I put my pokeball?"
      url="https://reactjs.org/docs/hooks-reference.html#usestate"
    >
      <img
        style={{ height: "85px", width: "85px" }}
        src={pokeball}
        alt="Pokeball from my bag"
      />
    </HookSection>
  );
}

export default UseContextSection;
