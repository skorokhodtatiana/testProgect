import { useState, useEffect } from "react";
import "./listImg.scss";

const ListImg = (props) => {
  const { isChangeArr, isSelectImg } = props;
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
        },
        (error) => {
          setisLoaded(true);
          seterror(error);
        }
      );
  }, []);
  const passFunction = (id) => {
    props.handleClick(items, id);
  };

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    return (
      <ul className="listWrapper">
        {!isChangeArr
          ? items.map((item) => (
              <li key={item.id}>
                <div className="imgWrapper">
                  <img
                    onClick={() => passFunction(item.id)}
                    className="img"
                    src={item.download_url}
                    alt={item.name}
                  />
                </div>
              </li>
            ))
          : items
              .filter((el) => el.id !== isSelectImg)
              .map((item) => (
                <li key={item.id}>
                  <div className="imgWrapper">
                    <img
                      onClick={() => passFunction(item.id)}
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

export default ListImg;
