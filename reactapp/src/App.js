import React, {useState} from 'react';
import './App.css';
import questions from "./Data/data";
import Card from "./components/UI/Card/Card";
import Banner from "./components/UI/Banner/Banner";
import Button from "./components/UI/Button/Button";

function App() {

  const [start, setStart] = useState(false);
  const [end, setEnd] = useState(false);
  const [questionsCorrect, setQuestionsCorrect] = useState(0);
  const [questionsAttempt, setQuestionsAttempt] = useState(0);

  const startTest = () => {
    setQuestionsCorrect(0);
    setStart(true);
  };

  function func(correct) {
    if (correct === true) {
      setQuestionsCorrect(questionsCorrect + 1);
    }
  }

  function isAllAtempted(variable) {
    if (variable === true) {
      setQuestionsAttempt(questionsAttempt + 1);
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
        start ? (
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
                  <Card
                    key={questionId}
                    question={question}
                    correctAnswerMarkUpdate={func}
                    attempt={isAllAtempted}
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
            { questionsAtteempt > 5 ? 
                (<Button onClick={showResults}>{"Show results"}</Button>)
              :
              ('')
            }
          </div>
          
        ) : 
        (
          <div className="end">
          {end && (
            <Banner>You have answered {questionsCorrect} / 5 Correctly</Banner>
          )}
          {   <Button onClick={startTest}>{"Start Quiz"}</Button>}
        </div>
        )
      }
      
    </div>
  );
}

export default App;
