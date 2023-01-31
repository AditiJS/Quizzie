import './PopUp.css'
import React, { useRef } from 'react'


const PopUp = (props) => {
    const idRef = useRef();
    const queRef = useRef('');
    const op_1Ref = useRef('');
    const op_2Ref = useRef('');
    const op_3Ref = useRef('');
    const op_4Ref = useRef('');
    const ansRef = useRef('');

    function submitHandler(event){
event.preventDefault();
//    let setid = props.newID+1;
    const newQ = {
        id: idRef.current.valueOf,
        question: queRef.current.valueOf,
        option1: op_1Ref.current.valueOf,
        option2: op_2Ref.current.valueOf,
        option3: op_3Ref.current.valueOf,
        option4: op_4Ref.current.valueOf,
        correctAnswer: ansRef.current.valueOf
    }

    props.onAddingQue(newQ);
    props.changePopupState(false);

}

function handlePopupState(){
    props.changePopupState(false);
}


    return (
            (props.showPopUp) && (
        <div className='Card-body py-4 px-3 popup-div'>
            {console.log("new id "+ props.newID)}
            <div className="card-body text-center fs-2 fw-semibold mx-auto py-2 px-1 mt-5 mb-3  popup-div">
                <form className='form'onSubmit={submitHandler} >
                    <div className='card-body my-1'>
                        <label className="form-label fs-4 mx-3">ID:</label>
                        <input type="text" className="form-control w-50" ref={idRef} />
                    </div>
                    <div className='card-body my-1'>
                        <label className="form-label fs-4 mx-3">Question:</label>
                        <input type="text" className="form-control w-50" ref={queRef} />
                    </div>
                    <div className='card-body my-1'>
                        <label className="form-label fs-4 mx-3">Option 1:</label>
                        <input type="text" className="form-control w-50" ref={op_1Ref} />
                    </div>
                    <div className='card-body my-1'>
                        <label className="form-label fs-4 mx-3">Option 2:</label>
                        <input type="text" className="form-control w-50" ref={op_2Ref} />
                    </div>
                    <div className='card-body my-1'>
                        <label className="form-label fs-4 mx-3">Option 3:</label>
                        <input type="text" className="form-control w-50" ref={op_3Ref} />
                    </div>
                    <div className='card-body my-1'>
                        <label className="form-label fs-4 mx-3">Option 4:</label>
                        <input type="text" className="form-control w-50" ref={op_4Ref} />
                    </div>
                    <div className='card-body my-1'>
                        <label className="form-label fs-4 mx-3">Answer:</label>
                        <input type="text" className="form-control w-50" ref={ansRef} />
                    </div>
                    <div className='card-body my-1'>
                        <button type="submit" className="btn btn-light btn-lg mx-4" >submit</button>
                        <button className="btn btn-light btn-lg mx-4" onClick={handlePopupState}>close</button>
                    </div>
                </form>
            </div>
            </div>
            
    )
    )
}

export default PopUp