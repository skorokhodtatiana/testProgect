import { useState } from "react";
import "./_modalWindow.scss";

const ModalWindow = (props) => {
  const { active, setActive, choseId, author, emptyInput } = props;
  const [inputValue, setinputValue] = useState(emptyInput);

  const sendInfo = async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ body: inputValue }),
    });
    console.log(response.status);
    if (response.status === 201) {
      console.log("test");
      props.updataAfterDelete(choseId);
      setinputValue(" ");
    }
  };
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <div className="modal__author">{author}</div>
        <input
          type="text"
          value={inputValue}
          onChange={(event) => setinputValue(event.target.value)}
        ></input>
        <button className="modal__btn" onClick={() => sendInfo()} type="submit">
          Отправить
        </button>
      </div>
    </div>
  );
};
export default ModalWindow;
