import React, {useState} from 'react';
import './index.scss';

import Game from './Components/Game';
import Result from './Components/Result';
import { questions } from './data/questions';


function App() {
  const [step, setStep] = useState(0);
  const question = questions[step]
  const [correct, setCorrect] = useState(0);

  const percentage = Math.round((step/ questions.length)*100) 

  const onClickVariant = (index) => {
      setStep( step + 1)
      if( index === question.correct){
        setCorrect(correct +1)
      }
    }

  return (
    <div className="App">
      {
        step !== questions.length 
        ? <Game step = {step} question={question} onClickVariant={onClickVariant} percentage={percentage}/>
        : <Result correct={correct} questions={questions}/>
      }
      
      
    </div>
  );
}

export default App;
