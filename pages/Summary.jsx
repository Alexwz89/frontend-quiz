import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Summary() {
  const location = useLocation();
  const navigation = useNavigate();
  const { correct, totalQuestions, type } = location.state || {
    correct: 0,
    totalQuestions: 0,
    type: "unknow",
  };

  const returnToHome = () => {
    navigation("/");
  };
  return (
    <>
      <section className="text_box">
        <h1>
          Quiz completed <span>You scored...</span>
        </h1>
      </section>
      <section className="selection_box summary">
        <div>
          <h2>{type}</h2>
          <span>{correct}</span>
          <p>out of {totalQuestions}</p>
        </div>
        <button onClick={returnToHome}>Play Again</button>
      </section>
    </>
  );
}
