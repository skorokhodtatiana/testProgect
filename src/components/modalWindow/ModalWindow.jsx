import { useState } from "react";
import "./_modalWindow.scss";
import Data from "../Data";

const ModalWindow = (props) => {
  const { active, setActive } = props;
  const [inputValue, setinputValue] = useState();

  const handleChange = (event) => {
    setinputValue(event.target.value);
  };

  Data().then((result) => console.log(result));

  const sendInfo = () => {};
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <div></div>
        <input value={inputValue} onChange={() => handleChange()}></input>
        <button onClick={() => sendInfo()} type="submit">
          Отправить
        </button>
      </div>
    </div>
  );
};
export default ModalWindow;
