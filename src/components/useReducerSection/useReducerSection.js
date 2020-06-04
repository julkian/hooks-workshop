import React, { useReducer } from "react";
import HookSection from "../hookSection/hookSection";
import { calculateMessage, minMaxNumber, skillTest } from "./utility";

const initialState = {
  escapeChance: 10,
  captureChance: 10,
  didEscape: false,
  wasCaptured: false,
  lastAction: "",
};

const pokemonTrainerReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

function UseReducerSection() {
  // useReudcer!
  const state = initialState;
  const dispatch = ({ type }) => alert(`Do something when ${type}`);
  return (
    <HookSection
      title="Reduced Safari Zone"
      url="https://reactjs.org/docs/hooks-reference.html#usereducer"
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
