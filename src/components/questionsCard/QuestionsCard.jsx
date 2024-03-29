import React, { useEffect, useState } from "react";
import "./QuestionsCard.css";

const QuestionsCard = ({
  questionsData,
  score,
  setScore,
  count,
  setCount,
  modal,
  setModal,
}) => {
  console.log("QuestionsData in QuestionsCard:", questionsData);
  const [timer, setTimer] = useState(30);

  const approvedChoice = (e) => {
    console.log(e.currentTarget.value);
    const checkAnswer =
      e.currentTarget.value === questionsData[count]?.correct_answer; //Cevabın doğruluğunun kontrolü
    console.log(checkAnswer);
    if (checkAnswer) {
      setScore(score + 100); //Doğruysa scoru arttır
    }
    setCount(count + 1); //Sonraki soruya geç
    if (count === 9) setModal(true); // Sorular bittikten sonra farklı sayfa
    setTimer(30);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      }
      if (timer === 0 && count < 10) {
        setCount(count + 1);
        setTimer(30);
      } else if (count >= 10) {
        setModal(true);
      }
    }, 1000);
    return () => {
      clearInterval(interval); // Düşerken anormal gözükmesin diye
    };
  }, [timer, count, setCount, setModal]);

  return (
    <div className="questionsCard">
      <div className="questionsCard-timer">{timer}</div>
      <div className="questionsCard-title">
        {count + 1}/10 - {questionsData[count]?.question}
      </div>
      {questionsData[count]?.answers?.map((answer, i) => (
        <button onClick={approvedChoice} key={i} value={answer}>
          {answer}
        </button>
      ))}
    </div>
  );
};

export default QuestionsCard;
