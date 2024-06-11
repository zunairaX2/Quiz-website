import React, { useState } from "react";
import StartPage from "./components/StartPage";
import Quiz from "./components/Quiz";
import { quizdata } from './data/quizdata';
import ResultPage from "./components/ResultPage";
import "./index.css";
import confetti from "canvas-confetti";

export default function App() {
  let [start, setStart] = useState(true);
  let [next, setNext] = useState(true);
  let [nextQuestion,setNextQuestion] = useState(0);
  let [score,setScore] = useState(0);
  let [selectedOption,setselectedOption] = useState(null);

  let handleAnswer =(option)=>{
    setselectedOption(option);
    if(option === quizdata[nextQuestion].answer)
      {
        setScore(score+1);
      }
  }

  let handleNext =()=>{
    if(nextQuestion < quizdata.length-1){
      setNextQuestion(nextQuestion+1);
      setselectedOption(null);
    }
    else{
      setNext(false);
      triggerConfetti();
    } 
  }

  let handelAgain = ()=>{
    setStart(true);
    setNext(true);
    setselectedOption(null);
    setScore(0);
    setNextQuestion(0);
  }

  const triggerConfetti = () => {
    confetti({
      particleCount: 200,
      spread: 80,
      origin: { y: 0.6 },
    });
  };

  if (start) {
    return (
      <div>
        <StartPage setStart={setStart} />
      </div>
    );
  } else {
    return (
      <div>
        {next ? (
          <div>
            <Quiz setNext={setNext} quizdata={quizdata} nextQuestion={nextQuestion} 
            setNextQuestion={setNextQuestion} handleNext={handleNext} handleAnswer={handleAnswer} 
            score={score} selectedOption={selectedOption}/>
          </div>
        ) : (
          <div>
            <ResultPage score={score} handelAgain={handelAgain} />
          </div>
        )}
      </div>
    );
  }
}
