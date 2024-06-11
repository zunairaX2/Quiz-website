import React from 'react'
import { quizdata } from '../data/quizdata'

export default function StartPage({setStart}) {
  return (
    
    <div>
      {/* navbar */}
      <nav class="navbar bg-dark">
        <div class="container">
          <a class="navbar-brand text-white" href="#">
            <img
              src="https://cdn.britannica.com/mendel-resources/3-117/images/games/games_nav_logo.png?v=3.117.4"
              alt="Bootstrap"
              width="250"
            />
          </a>
        </div>
      </nav>
      <div className="d-flex justify-content-center mt-4">
        <div class="card" style={{ width: "48rem" }}>
          <div
            class="card-body rounded"
            style={{
              backgroundRepeat:'no-repeat',
              backgroundSize:'cover',
              backgroundPosition:'center',
              height: 500,
              backgroundImage:
                "url('https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg')",
            }}
          >
            <div
              class="card text-center position-absolute top-50 start-50 translate-middle"
              style={{ width: "20rem" }}
            >
              <div class="card-body">
                <h5 class="card-title fs-2">
                  Information about USA
                </h5>
                <button className="btn btn-secondary fs-5" onClick={()=>(setStart(false))}>Start</button>
              </div>
              <h5>{quizdata.length} Questions</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
