export const skillTest = (chance) => Math.random() * 100 < chance;

export const minMaxNumber = (value) =>
  value < 10 ? 10 : value > 100 ? 100 : value;

export const calculateMessage = (state) => {
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
