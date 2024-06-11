import React from "react";
import { quizdata } from "../data/quizdata";

export default function ResultPage({ score, handelAgain }) {
  return (
    <div className="d-flex justify-content-center mt-5">
    <div class="card text-center mb-3" style={{width: "18rem"}}>
      <div class="card-body">
      <h2>{score>2 ? "Congratulations":"Best of Luck"}</h2>
        <p class="card-text">
        {score} out of {quizdata.length}
        </p>
        <button type="button" className="btn btn-dark" onClick={handelAgain}>Try Again</button>
      </div>
    </div>
    </div>
    //   
  );
}
