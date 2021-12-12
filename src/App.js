import "./App.scss";
import Data from "./components/Data.jsx";

import { useState } from "react";
import ModalWindow from "./components/modalWindow/ModalWindow";

function App() {
  const [modalActive, setmodalActive] = useState(false);
  const [newData, setNewData] = useState();
  const [chosenImgId, setchosenImgId] = useState(-1);
  const [selectedAuthor, setSelectedAuthor] = useState();

  const openModal = (val, id) => {
    setmodalActive(true);
    setNewData(val);
    setchosenImgId(id);
    let findAuthor = val.filter((el) => el.id === id);
    // console.log(findAuthor);
    // console.log(typeof findAuthor);
    setSelectedAuthor(findAuthor[0].author);
    // console.log(findAuthor[0].author);
  };

  const [arrAfterDelete, setarrAfterDelete] = useState();
  const updataAfterDelete = (newArr) => {
    setarrAfterDelete(newArr);
  };
  return (
    <div className="App">
      <Data
        handleClick={(val, id) => openModal(val, id)}
        updataAfterDelete={updataAfterDelete}
      ></Data>
      <ModalWindow
        author={selectedAuthor}
        arrData={newData}
        choseId={chosenImgId}
        active={modalActive}
        setActive={setmodalActive}
      ></ModalWindow>
    </div>
  );
}

export default App;
