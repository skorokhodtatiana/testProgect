import { useState, useEffect } from "react";
import "./data.scss";

const Data = (props) => {
  const [error, seterror] = useState(null);
  const [isLoaded, setisLoaded] = useState(false);
  const [items, setitems] = useState([]);

  useEffect(() => {
    fetch("https://picsum.photos/v2/list?page=2&limit=100")
      .then((res) => res.json())
      .then(
        (result) => {
          setisLoaded(true);
          setitems(result);
          console.log(result);
        },
        (error) => {
          setisLoaded(true);
          seterror(error);
        }
      );
  }, []);

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    return (
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <div className="imgWrapper">
              <img
                onClick={props.handleClick}
                className="img"
                src={item.download_url}
                alt={item.name}
              />
            </div>
          </li>
        ))}
      </ul>
    );
  }
};

export default Data;
