import React, { useEffect, useState } from 'react';
import './App.css';
import Question from './components/Question';

import { getQuiz } from './services/getQuiz'
import { questionType, quizType } from './types/questionTypes'

function App() {
  
  const [quiz, setQuiz] = useState<quizType[]> ([])  

  useEffect(() => {
      async function getData(){
        const res: quizType[]  = await getQuiz(5, "easy");
        setQuiz(res)
      }
      getData();
  }, [])
  
  const handelClick = ()=>{
    (!quiz.length) ? console.log("Loading") : console.log(quiz)
  }

  return (
    <div className="App">
      <header className="App-header">
          Quiz App
          <Question />
          <button onClick={()=> handelClick()}>Click</button>
      </header>
    </div>
  );
}

export default App;
