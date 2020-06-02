/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useMemo } from "react";
import HookSection from "../hookSection/hookSection";

/**
 * REMOVE STRICT MODE FORM INDEX TEMPORALLY
 */

const messages = [
  "mmmmmm :/",
  "let me seee...",
  "I know it has to be here",
  "Im searching, wait...",
  "Found it! Oh no, it is not this one",
];

const BAG = ["Pokeballs", "Potions", "Bike", "Map", "Berries"];

function UseMemoSection() {
  const [objectToFind, setObjectToFind] = useState("");
  const [countSearch, setCountSearch] = useState(0);
  function selectObject(value) {
    setObjectToFind(value);
    setCountSearch((count) => count + 1);
  }
  return (
    <HookSection
      title="Memo search"
      url="https://reactjs.org/docs/hooks-reference.html#usestate"
    >
      <SearchInBag objectToFind={objectToFind} countSearch={countSearch} />
      <div className="Use-state-buttons">
        {BAG.map((value, index) => (
          <button key={"object" + index} onClick={() => selectObject(value)}>
            {value}
          </button>
        ))}
      </div>
    </HookSection>
  );
}

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function searchInBag(objectToFind, bag) {
  bag = shuffle(bag);
  if (!objectToFind) {
    return "none";
  } else if (bag[0] !== objectToFind) {
    window.confirm(messages[Math.round(Math.random() * (messages.length - 1))]);
    return searchInBag(objectToFind, bag.slice(1, bag.length));
  }
  alert("Here it is!");
  return bag[0];
}

function SearchInBag({ objectToFind, countSearch }) {
  const memoizedLastObjectFound = useMemo(
    () => searchInBag(objectToFind, BAG),
    [objectToFind]
  );
  return (
    <>
      <p>What do you want to search?</p>
      <p>Last object found: {memoizedLastObjectFound}</p>
      <p>Search count {countSearch}</p>
    </>
  );
}

export default UseMemoSection;
