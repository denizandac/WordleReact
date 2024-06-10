import "./App.css";
import { StrictMode } from "react";
import Header from "./components/Header.js";
import Words from "./components/Words.js";
import { WordProvider } from "./store/word-context.js";
import { YourWordModal } from "./components/YourWordModal.js";
import { EndGameModal } from "./components/EndGameModal.js";

function App() {
  return (
    <StrictMode>
      <WordProvider>
        <Header />
        <Words guessCount={6} letterCount={5} />
        <YourWordModal />
        <EndGameModal />
      </WordProvider>
    </StrictMode>
  );
}

export default App;
