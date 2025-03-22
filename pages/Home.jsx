import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const goToTest = (e) => {
    /*    console.log(e.currentTarget.value); */
    navigate(`/${e.currentTarget.value}`);
  };

  return (
    <>
      <section className="text_box">
        <h1>
          Welcome to the <span>Frontend Quiz</span>
        </h1>
        <p>Pick a subject to get started.</p>
      </section>
      <section className="selection_box">
        <button className="quiz_options html" value="HTML" onClick={goToTest}>
          <div className="img_box html"></div>
          <span>HTML</span>
        </button>

        <button className="quiz_options css" value="CSS" onClick={goToTest}>
          <div className="img_box css"></div>
          <span>CSS</span>
        </button>

        <button
          className="quiz_options js"
          value="Javascript"
          onClick={goToTest}
        >
          <div className="img_box js"></div>
          <span>Javascript</span>
        </button>

        <button
          className="quiz_options accessibility"
          value="Accessibility"
          onClick={goToTest}
        >
          <div className="img_box access"></div>
          <span>Accessibility</span>
        </button>
      </section>
    </>
  );
}
