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
    setSelectedAuthor(findAuthor[0].author);
  };

  // const [arrAfterDelete, setarrAfterDelete] = useState();
  const [isChangeArr, setisChangeArr] = useState(false);
  const [isSelectImg, setisSelectImg] = useState(-1);
  const updataAfterDelete = (newArr, choseId) => {
    // setarrAfterDelete(newArr);
    setisChangeArr(true);
    setmodalActive(false);
    setisSelectImg(choseId);
    console.log(newArr);
  };
  return (
    <div className="App">
      <Data
        handleClick={(val, id) => openModal(val, id)}
        // updataArr={arrAfterDelete}
        isChangeArr={isChangeArr}
        isSelectImg={isSelectImg}
      ></Data>
      <ModalWindow
        author={selectedAuthor}
        arrData={newData}
        choseId={chosenImgId}
        active={modalActive}
        setActive={setmodalActive}
        updataAfterDelete={updataAfterDelete}
      ></ModalWindow>
    </div>
  );
}

export default App;
