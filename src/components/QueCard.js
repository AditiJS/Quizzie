import React,{useState} from "react"
import OptionsCard from './Options';
import './QueCard.css'


const QueCard = (props) =>{
    const[res,setRes]=useState(0);
    const[score,setScore] = useState(0);
    
    return (
   (! props.showPop) &&  ( <div>
        { props.quizzes.map((quiz)=> 
        <div id="QuestionDiv" key={quiz.id} className="card-body text-center fs-3 fw-semibold mx-auto mt-5 mb-3 w-75 bg-black">
        {quiz.que}
        {/* {console.log("this is quiz")}
        {console.log(quiz)} */}
        <OptionsCard op_1={quiz.op1} op_2={quiz.op2} op_3={quiz.op3} op_4={quiz.op4} answer={quiz.ans} addPt={res} pointsHandler={setRes} calScore={setScore} fin={score} identy={quiz.id}/>
         </div> 
        )}
       </div>)
    )
}

export default QueCard;