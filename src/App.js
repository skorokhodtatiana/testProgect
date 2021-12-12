import "./App.scss";
import Data from "./components/Data.jsx";
import ListImg from "./components/ListImg";
import { useState, useEffect } from "react";
import ModalWindow from "./components/modalWindow/ModalWindow";

function App() {
  const [modalActive, setmodalActive] = useState(true);
  const openModal = () => {
    setmodalActive(true);
  };
  return (
    <div className="App">
      <Data handleClick={() => openModal()}></Data>
      <ModalWindow
        active={modalActive}
        setActive={setmodalActive}
      ></ModalWindow>
    </div>
  );
}

export default App;
