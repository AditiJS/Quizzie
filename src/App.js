import './App.css';
import HeadQuiz from './components/HeadQuiz';
import QueCard from './components/QueCard';
import { Helmet } from "react-helmet";

import React, { useState } from 'react';


function App() {
  const [quiz, setQuiz] = useState([]);
  const [showPop, setShowPop] = useState(false);

// id must be set
  async function insertNewQue(quiz) {
    const response = await fetch('http://localhost:8000/quizzes',
      {
        method: 'POST',
        //  method : 'GET' (by default)
        body: JSON.stringify(quiz), //JavaScript obj to JSON
        headers: {
          'Content-Type': 'application/json'
        }
      });

    const data = await response.json()
    console.log(data);
  }

  async function fetchQuestionHandler() {

    fetch('http://localhost:8000/quizzes').then(
      res=>{
        return res.json();
      }
    ).then(data=>{
      console.log(data);
      // console.log(data[1]);
      let loadedQuizzes = [];
      
      for(const _id in data){
        loadedQuizzes.push({
          id: _id,
          que: data[_id].question,
          op1: data[_id].option1,
          op2: data[_id].option2,
          op3: data[_id].option3,
          op4: data[_id].option4,
          ans: data[_id].correctAnswer
        })
      }
      setQuiz(loadedQuizzes);
      // console.log("this is last id "+loadedQuizzes[(loadedQuizzes.length)-1].id);
    })

  }


  return (

    <div className='card text-center my-5 mx-auto py-2 bg-black'>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Quizzie</title>
        <link rel="canonical" href="https://quizzie-workspaceaditi832-gmailcom.vercel.app/" />
        <meta name="description" content="Basic quiz app" />
      </Helmet>
      <div className='mainAppdiv'>
        <HeadQuiz lastID={quiz.length}  mainHead="Quizzie" onFetching={fetchQuestionHandler} insertQue={insertNewQue} showPop={showPop} handlePop={setShowPop} />
        <QueCard quizzes={quiz} showPop={showPop} />

      </div>

    </div>

  );
}

export default App;
