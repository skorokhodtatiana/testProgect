import { useState } from "react";
import "./_modalWindow.scss";

const ModalWindow = (props) => {
  const { active, setActive, arrData, choseId, author, emptyInput } = props;
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
      let newArr = arrData.filter((el) => el.id !== choseId);
      props.updataAfterDelete(newArr, choseId);
      setinputValue("");
    }
  };
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <div>{author}</div>
        <input
          type="text"
          value={emptyInput}
          onChange={(event) => setinputValue(event.target.value)}
        ></input>
        <button onClick={() => sendInfo()} type="submit">
          Отправить
        </button>
      </div>
    </div>
  );
};
export default ModalWindow;
