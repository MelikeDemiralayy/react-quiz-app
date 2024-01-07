import React, { useState } from "react";
import "./Introduce.css";
import Dropdown from "../../components/components/dropdown/Dropdown";
import { useNavigate } from "react-router-dom";
const Introduce = () => {
  const difficulty = ["easy", "medium", "hard"];
  const [difficultyChange, setDifficultyChange] = useState("");
  const navigate = useNavigate();
  const TOTAL_QUESTİONS = 10;

  const startQuiz = () => {
    if (difficultyChange) {
      navigate(`/quiz/${difficultyChange}/${TOTAL_QUESTİONS}`); // Dinamik yönlendirme işlemleri yapmak için
    }
  };
  return (
    <div className="introduce">
      <div className="introduce-container">
        <img
          src="https://t3.ftcdn.net/jpg/03/59/62/74/360_F_359627491_x8biSLaSBHJdxMoKahFd6xlecILJlfRY.jpg"
          alt=""
        />
        <Dropdown data={difficulty} setDifficultyChange={setDifficultyChange} />
        <div onClick={startQuiz} className="introduce-btn">
          Quiz e Başla
        </div>
      </div>
    </div>
  );
};

export default Introduce;
