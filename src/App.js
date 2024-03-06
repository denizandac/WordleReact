import "./App.css";
import { StrictMode } from "react";
import Header from "./components/Header.js";
import Words from "./components/Words.js";

function App() {
  return (
    <StrictMode>
      <Header />
      <Words guessCount={6} letterCount={5} />
    </StrictMode>
  );
}

export default App;
