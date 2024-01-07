import React, { useEffect, useState } from "react";
import "./Quiz.css";
import { useParams } from "react-router-dom";
import * as api from "../../api/api";
const Quiz = () => {
  const { difficulty, amount } = useParams();
  const [questionsData, setQuestionsData] = useState([]); //ekranda dönen dataları tutmak için

  useEffect(() => {
    const getData = async () => {
      const data = await api.fetchQuizData(difficulty, amount);
      setQuestionsData(data);
    };
    getData();
  }, []);
  console.log(questionsData, "questionsData");

  return (
    <div className="quiz">
      {difficulty} - {amount}
    </div>
  );
};

export default Quiz;
