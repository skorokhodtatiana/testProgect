import { useEffect, useState } from "react";
import "./_modalWindow.scss";
//import Data from "../Data";

const ModalWindow = (props) => {
  const { active, setActive, arrData, choseId, author, emptyInput } = props;
  const [inputValue, setinputValue] = useState(emptyInput);
  // const [iaActive, setiaActive] = useState(false);

  // const handleChange = (event) => {
  //   setinputValue(event.target.value);
  // };

  const sendInfo = async () => {
    console.log(typeof inputValue);
    console.log(inputValue);
    console.log(JSON.stringify(inputValue));

    let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ body: inputValue }),
    });
    // .then((response) => console.log(response.json()))
    // .then((responseUser) => {
    //   console.log(responseUser);
    // })
    // let result = await response.json();
    // .catch((error) => console.log(error.message));
    console.log(response);

    let newArr = arrData.filter((el) => el.id !== choseId);
    console.log(newArr);
    // props.updataAfterDelete(newArr);
    // setiaActive(false);
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
