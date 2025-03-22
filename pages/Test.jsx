import React from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";
import { useNavigate } from "react-router-dom";
import icon_correct from "../assets/images/icon-correct.svg";
import icon_wrong from "../assets/images/icon-incorrect.svg";

export default function Test() {
  const { type } = useParams();
  const navigate = useNavigate();

  const examQuestions = data.quizzes.find(
    (quiz) => quiz.title.toLowerCase() === type.toLowerCase()
  ).questions;

  const [qId, setQId] = React.useState(0);
  const [question, setQuestion] = React.useState(examQuestions[qId]);
  const [selection, setSelection] = React.useState(null);
  const totalQuestions = examQuestions.length;
  const [isSubmit, setIsSubmit] = React.useState(false);
  const [isCorrect, SetIsCorrect] = React.useState(false);
  const [correct, SetCorrect] = React.useState(0);

  const handleSelection = (index) => {
    if (index === selection) {
      setSelection(null);
    } else {
      setSelection(index);
    }
  };

  const handleSubmit = () => {
    if (selection === null) {
      return;
    }
    setIsSubmit(true);
    if (question.options[selection] === question.answer) {
      SetIsCorrect(true);
      SetCorrect(correct + 1);
    } else {
      SetIsCorrect(false);
    }
  };

  const getNextQuestion = () => {
    if (qId + 1 === totalQuestions) {
      navigate(`/${type}/summary`, {
        state: {
          correct,
          totalQuestions,
          type,
        },
      });
    } else {
      setQId(qId + 1);
      setQuestion(examQuestions[qId + 1]);
      setIsSubmit(false);
      SetIsCorrect(false);
      setSelection(null);
    }
  };

  return (
    <>
      <section className="text_box">
        <p>
          Question {qId + 1} of {totalQuestions}
        </p>
        <h2>{question.question}</h2>
      </section>
      <section className="selection_box">
        {question.options.map((item, index) => {
          let borderStyle = selection === index ? "3px solid #A729F5" : null;
          let labelBG = selection === index ? "#A729F5" : null;
          let labelColor = selection === index ? "white" : null;
          if (isSubmit) {
            if (index === selection) {
              borderStyle = isCorrect
                ? "3px solid #26D782"
                : "3px solid #EE5454";
              labelBG = isCorrect ? "#26D782" : "#EE5454";
            }
          }

          let icon = null;
          if (isSubmit && index === selection) {
            icon = isCorrect ? "correct" : "false";
          }
          console.log(icon);

          return (
            <button
              className="option"
              key={index}
              onClick={() => handleSelection(index)}
              style={{
                border: borderStyle,
              }}
              disabled={isSubmit}
            >
              <div
                style={{
                  backgroundColor: labelBG,
                  color: labelColor,
                }}
              >
                {String.fromCharCode(65 + index)}
              </div>
              <span>{item}</span>
              {icon && (
                <img
                  src={isCorrect ? icon_correct : icon_wrong}
                  alt={isCorrect ? "Correct" : "Incorrect"}
                  style={{ width: "25px", height: "25px" }}
                />
              )}
            </button>
          );
        })}
        {isSubmit ? (
          <button type="submit" className="submit" onClick={getNextQuestion}>
            Next Question
          </button>
        ) : (
          <button type="submit" className="submit" onClick={handleSubmit}>
            Submit Answer
          </button>
        )}
      </section>
    </>
  );
}
