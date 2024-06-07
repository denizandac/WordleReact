import "./App.css";
import { StrictMode } from "react";
import Header from "./components/Header.js";
import Words from "./components/Words.js";
import { WordContextProvider } from "./store/word-context";

function App() {
  return (
    <StrictMode>
      <WordContextProvider>
        <Header />
        <Words guessCount={6} letterCount={5} />
      </WordContextProvider>
    </StrictMode>
  );
}

export default App;
