import { useState } from "react";
import { icons } from "../public/icons";
import "./App.css";

function App() {
  const [data, setData] = useState({
    color: getRandomColor(),
    icon: null,
  });

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function getRandomIcon() {
    const newIcon = icons[Math.floor(Math.random() * icons.length)];

    return newIcon.id === data?.icon?.id ? getRandomIcon() : newIcon;
  }

  function changeAvatar(elem) {
    if (elem == "color") {
      setData({ ...data, color: getRandomColor() });
    } else {
      setData({ ...data, icon: getRandomIcon() });
    }
  }

  console.log(data.icon);

  return (
    <div className="container">
      <div className={"container-avatar"}>
        <div style={{ backgroundColor: data.color }} className={"avatar"}>
          {data?.icon?.svg}
        </div>

        <button
          onClick={() => changeAvatar("icon")}
          style={{ backgroundColor: getRandomColor() }}
          className="btn"
        >
          Сгенерировать Иконку
        </button>

        <button
          onClick={() => changeAvatar("color")}
          style={{ backgroundColor: getRandomColor() }}
          className="btn"
        >
          Сгенерировать Цвет
        </button>
      </div>
    </div>
  );
}

export default App;
