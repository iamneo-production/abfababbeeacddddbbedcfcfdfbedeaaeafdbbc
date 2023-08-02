import React, {useState} from 'react';
import './App.css';
import questions from "./Data/data";
import card from "./components/UI/Card/card";

function App() {

  const [start, setStart] = useState(false);
  const [end, setEnd] = useState(false);
  const [questionsCorrect, setQuestionsCorrect] = useState(0);

  const startTest = () => {
    setQuestionsCorrect(0);
    setStart(true);
  };

  function func(correct) {
    if (correct === true) {
      setQuestionsCorrect(questionsCorrect + 1);
      console.log("questionsCorrect: " + questionsCorrect);
    }
  }

  function showResults() {
    setStart(false);
    setEnd(true);
  }

  return (
    <div className="App">
      <h1>Quizz App</h1>
      {
        started ? (
          <div className='quiz-container'>
            <div className='card-container'>
            {questions.map(
              ({
                questionId,
                question,
                option1,
                option2,
                option3,
                option4,
                answer,
              }) => {
                return (
                  <card
                    key={questionId}
                    question={question}
                    correctAnswerMarkUpdate={func}
                    attempt={func}
                    options={{
                      option1: option1,
                      option2: option2,
                      option3: option3,
                      option4: option4,
                    }}
                    answer={answer}
                  />
                );
              }
            )}
            </div>
          </div>
        ) : 
        (
          <div className="start-btn-container">
            <button onClick={() => handleStartButton()} className="start-btn">Start Quiz</button>
          </div>
        )
      }
      
    </div>
  );
}

export default App;
