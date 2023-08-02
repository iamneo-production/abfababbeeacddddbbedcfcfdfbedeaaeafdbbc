import React, {useState} from 'react';
import './App.css';

function App() {

  const [started, setStarted] = useState(false);

  const handleStartButton = () => {
    setStarted(!started);
  }

  return (
    <div className="App">
      <h1>Quizz App</h1>
      {
        started ? (
          <div className='quiz-container'>
            <div className='quiz-col-1'> 
              <div className='question-container'>
                <div className='question'>

                </div>
                <div className='options-container'></div>
              </div>
              <div className='question-container'>

              </div>
            </div>
            <div className='quiz-col-2'>
              <div className='question-container'>
                
              </div>
              <div className='question-container'>
                
              </div>
              <div className='question-container'>
                
              </div>
            </div>
            <div className='submit-btn-container'>

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
