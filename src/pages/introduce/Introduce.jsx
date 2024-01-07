import React from "react";
import "./Introduce.css";
import Dropdown from "../../components/dropdown/Dropdown";
const Introduce = () => {
  const difficulty = ["easy", "medium", "hard"];
  return (
    <div className="introduce">
      <div className="introduce-container">
        <img
          src="https://t3.ftcdn.net/jpg/03/59/62/74/360_F_359627491_x8biSLaSBHJdxMoKahFd6xlecILJlfRY.jpg"
          alt=""
        />
        <Dropdown />
        <div className="introduce-btn">Quiz e Başla</div>
      </div>
    </div>
  );
};

export default Introduce;
