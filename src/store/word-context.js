import { createContext } from "react";

export const WordContext = createContext({
  setExpectedWord: () => {},
  showModal: () => {},
});

export const WordContextProvider = ({ children }) => {
  const setExpectedWord = () => {};
  const logEndState = () => {
    console.log("Game Over");
  };
  return (
    <WordContext.Provider value={{ setExpectedWord, showModal: logEndState }}>
      {children}
    </WordContext.Provider>
  );
};
