import { useState, createContext } from "react";

export const WordContext = createContext({
  winCondition: false,
  expectedWord: "BEYZA",
  setExpectedWord: () => {},
  modalRef: null,
  setModalRef: () => {},
  showEndModal: () => {},
});

export const WordProvider = (props) => {
  const [expectedWord, setExpectedWord] = useState("BEYZA");
  const [modalRef, setModalRef] = useState(null);
  const showEndModal = () => {
    modalRef.showModal();
  };

  return (
    <WordContext.Provider
      value={{
        winCondition: false,
        expectedWord,
        setExpectedWord,
        modalRef,
        setModalRef,
        showEndModal,
      }}
    >
      {props.children}
    </WordContext.Provider>
  );
};
