import "./App.scss";
import ListImg from "./components/listImg/ListImg.jsx";

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

	const [isChangeArr, setisChangeArr] = useState(false);
	const [isSelectImg, setisSelectImg] = useState(-1);
	const updataAfterDelete = (choseId) => {
		setisChangeArr(true);
		setmodalActive(false);
		setisSelectImg(choseId);
	};

	return (
		<div className="App">
			<ListImg
				handleClick={(val, id) => openModal(val, id)}
				isChangeArr={isChangeArr}
				isSelectImg={isSelectImg}
			></ListImg>
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
