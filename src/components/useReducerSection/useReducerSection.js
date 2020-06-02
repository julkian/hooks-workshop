import React from "react";
import HookSection from "../hookSection/hookSection";

const initialState = {
  escapeChance: 10,
  captureChance: 10,
  didEscape: false,
  wasCaptured: false,
  lastAction: "",
};

const skillTest = (chance) => Math.random() * 100 < chance;

const minMaxNumber = (value) => (value < 10 ? 10 : value > 100 ? 100 : value);

const calculateMessage = (state) => {
  if (state.wasCaptured) {
    return "Gotcha! Pokémon has been captured!!! Good job!";
  } else if (state.didEscape) {
    return (
      (state.lastAction === "THROW_BALL" ? "Daaam! It was close! " : "") +
      "Wild Pokémon escaped :("
    );
  } else if (state.lastAction === "THROW_ROCK") {
    return "You threw a rock. The pokémon looks angry!";
  } else if (state.lastAction === "THROW_BAIT") {
    return "You threw a bait. The pokémon is eating!";
  } else if (state.lastAction === "THROW_BALL") {
    return "Daaam! It was close!";
  } else {
    return "Wild Pokémon appeared!!!";
  }
};

const pokemonTrainerReducer = (state, action) => {
  let newEscapeChance;
  state = {
    ...state,
    lastAction: action.type,
  };
  switch (action.type) {
    case "THROW_ROCK":
      newEscapeChance = minMaxNumber(state.escapeChance + 15);
      return {
        ...state,
        escapeChance: newEscapeChance,
        captureChance: minMaxNumber(state.captureChance + 20),
        didEscape: skillTest(newEscapeChance),
      };
    case "THROW_BAIT":
      newEscapeChance = minMaxNumber(state.escapeChance - 5);
      return {
        ...state,
        escapeChance: newEscapeChance,
        captureChance: minMaxNumber(state.captureChance + 5),
        didEscape: skillTest(newEscapeChance),
      };
    case "THROW_BALL":
      newEscapeChance = minMaxNumber(state.escapeChance + 10);
      return {
        ...state,
        escapeChance: newEscapeChance,
        didEscape: skillTest(newEscapeChance),
        wasCaptured: skillTest(state.captureChance),
      };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

function UseReducerSection() {
  const [state, dispatch] = React.useReducer(
    pokemonTrainerReducer,
    initialState
  );
  return (
    <HookSection
      title="Safari Zone!"
      url="https://reactjs.org/docs/hooks-reference.html#usestate"
    >
      <p>{calculateMessage(state)}</p>
      <div className="Use-state-buttons">
        <button
          disabled={state.didEscape || state.wasCaptured}
          onClick={() => dispatch({ type: "THROW_ROCK" })}
        >
          Rock
        </button>
        <button
          disabled={state.didEscape || state.wasCaptured}
          onClick={() => dispatch({ type: "THROW_BAIT" })}
        >
          Bait
        </button>
        <button
          disabled={state.didEscape || state.wasCaptured}
          onClick={() => dispatch({ type: "THROW_BALL" })}
        >
          Ball
        </button>
        <button
          disabled={!state.didEscape && !state.wasCaptured}
          onClick={() => dispatch({ type: "RESET" })}
        >
          Reset
        </button>
      </div>
    </HookSection>
  );
}

export default UseReducerSection;
