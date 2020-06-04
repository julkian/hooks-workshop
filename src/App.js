import React, { createContext } from "react";
import "./App.css";
import UseStateSection from "./components/useStateSection/useStateSection";
import UseEffectSection from "./components/useEffectSection/useEffectSection";
import UseContextSection from "./components/useContextSection/useContextSection";
import UseReducerSection from "./components/useReducerSection/useReducerSection";
import UseCallbackSection from "./components/useCallbackSection/useCallbackSection";
import UseMemoSection from "./components/useMemoSection/useMemoSection";

export const BagContext = createContext();

function App() {
  return (
    <BagContext.Provider
      value={{
        pokeball:
          "http://www.pngall.com/wp-content/uploads/4/Pokeball-PNG-HD-Image.png",
      }}
    >
      <div className="App">
        <header className="App-header">HOOKS WORKSHOP</header>
        <UseStateSection />
        <UseEffectSection />
        <UseContextSection />
        <UseReducerSection />
        <UseCallbackSection />
        <UseMemoSection />
      </div>
    </BagContext.Provider>
  );
}

export default App;
