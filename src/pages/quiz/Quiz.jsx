import React, { useEffect, useState } from "react";
import "./Quiz.css";
import { useParams } from "react-router-dom";
import * as api from "../../api/api";
import Modal from "../../components/modal/Modal";
import QuestionsCard from "../../components/questionsCard/QuestionsCard";
const Quiz = () => {
  const { difficulty, amount } = useParams();
  const [questionsData, setQuestionsData] = useState([]); //ekranda dönen dataları tutmak için
  const [score, setScore] = useState(0);
  const [count, setCount] = useState(0);
  const [modal, setModal] = useState(false); //Quiz bittiğinde diğer sayfaya geçilmesini sağlayan yapı

  useEffect(() => {
    const getData = async () => {
      const data = await api.fetchQuizData(difficulty, amount);
      setQuestionsData(data);
    };
    getData();
  }, [difficulty, amount]);
  console.log(questionsData, "questionsData");

  return (
    <div className="quiz">
      {modal ? (
        <Modal score={score} />
      ) : questionsData.length > 0 ? (
        <QuestionsCard
          questionsData={questionsData}
          score={score}
          setScore={setScore}
          count={count}
          setCount={setCount}
          modal={modal}
          setModal={setModal}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Quiz;
