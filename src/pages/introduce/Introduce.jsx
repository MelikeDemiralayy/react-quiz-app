import React, { useState } from "react";
import "./Introduce.css";
import Dropdown from "../../components/dropdown/Dropdown";
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
          src="https://cdn.now.gg/apps-content/com.trivia.star.android/logo/trivia-star-quiz-games-offline.png"
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
