import React from 'react';
import './HeadQuiz.css'
import PopUp from './PopUp'


const HeadQuiz = (props) => {
// const[showPop,setShowPop] = useState(false);

function AddQueHandler(){
    props.handlePop(true);
}


    return(
    <div id="HeaderDiv" className="card text-center w-50 mx-auto mb-5 mt-3 headerDiv">
       
        <div className="card-body MainHeadDiv mb-3 w-50 mx-auto">
            <h1 className="card-title MainHeading fs-1">{props.mainHead}</h1>
        </div>
        <div className="card-header mb-2 welcomeDiv fs-5">
            <button className='btn btn-light btn-lg'onClick={props.onFetching} >Start Quiz</button>
        </div>

        <div className="card-header mb-2 welcomeDiv fs-5">
            <button className='btn btn-light btn-lg' onClick={AddQueHandler}>Add new question</button>
        </div>
        <PopUp newID={props.lastID} showPopUp={props.showPop} onAddingQue={props.insertQue} changePopupState={props.handlePop} />
    </div>
    );
}

export default HeadQuiz;