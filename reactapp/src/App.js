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


        ) : 
        (
        <div className="start-btn-container">
        <button onClick={() => handleStartButton()} className="start-btn">Start Quiz</button>
      </div>)
      }
      
    </div>
  );
}

export default App;
