import { useState } from "react";
import "./_modalWindow.scss";

const ModalWindow = (props) => {
	const { active, setActive, choseId, author } = props;
	const [inputValue, setinputValue] = useState(" ");

	const sendInfo = async () => {
		let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
			method: "POST",
			headers: {
			"Content-Type": "application/json;charset=utf-8",
			},
			body: JSON.stringify({ body: inputValue }),
		});

		if (response.status === 201) {
			props.updataAfterDelete(choseId);
			setinputValue(" ");
		}
	};

	return (
		<div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
			<div className="modal__content" onClick={(e) => e.stopPropagation()}>
				<div className="modal__author">{author}</div>
				<input
					type="text"
					value={inputValue}
					onChange={(event) => setinputValue(event.target.value)}
				></input>
				<button className="modal__btn" onClick={() => sendInfo()} type="submit">Отправить</button>
			</div>
		</div>
	);
};
export default ModalWindow;
