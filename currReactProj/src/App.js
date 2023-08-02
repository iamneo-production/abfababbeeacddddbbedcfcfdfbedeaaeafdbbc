import React, { useState } from "react";
import "./App.css";
import Banner from "./components/UI/Banner/Banner";
import Button from "./components/UI/Button/Button";
import Card from "./components/UI/Card/Card";
import questions from "./Data/data";

function App() {
  const [start, setStart] = useState(false);
  const [end, setEnd] = useState(false);
  const [questionsCorrect, setQuestionsCorrect] = useState(0);

  const startTest = () => {
    setQuestionsCorrect(0);
    setStart(true);
  };

  function checkQuestion(userAns) {
    if (userAns === true) {
      setQuestionsCorrect(questionsCorrect + 1);
      console.log("questionsCorrect: " + questionsCorrect);
    }
  }

  function showResults() {
    setStart(false);
    setEnd(true);
  }

  return (
    <div className="app">
      <h1>Quizz App</h1>
      {start ? (
        <div className="container">
          <div className="card-container">
            {questions.map(
              ({
                qId,
                question,
                option_1,
                option_2,
                option_3,
                option_4,
                answer,
              }) => {
                return (
                  <Card key={qId} question={question} correctAnswerMarkUpdate={checkQuestion} attempt={checkQuestion}
                    options={{
                      option1: option_1,
                      option2: option_2,
                      option3: option_3,
                      option4: option_4,
                    }}
                    answer={answer}
                  />
                );
              }
            )}
          </div>
          <Button onClick={showResults}>{"Show results"}</Button>
        </div>
      ) : (
        <div className="end">
          {end && (
            <Banner>You have answered {questionsCorrect} / 5 Correctly</Banner>
          )}
          <Button onClick={startTest}>{"Start Quiz"}</Button>
        </div>
      )}
    </div>
  );
}

export default App;
