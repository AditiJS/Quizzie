import React, { useState } from "react"
import './Status.css'
const Status = (props) => {
// const[isRight,setisRight] = useState(false);
// const[res,setRes]=useState(0);


  // function statusCheckHandler() {
  //   if((props.checkAns)==true) 
  //   setisRight(true);

  //   finalRes();

  //   console.log(isRight);
  //   console.log(props.finRes);
  // }

  function finalRes(){
    // if(isRight===true) 
    if((props.checkAns)===true) 
    props.resHandler((props.finRes)+1);
    // else 
    // props.resHandler(props.finRes);
  }

  return (
    <div>
      {/* <div className="card mx-5 my-3 w-25  buttons-sub">
        <button className="btn btn-light w-25 actual-btn" value={props.ide} onClick={statusCheckHandler}>Submit</button>
      </div> */}
      {/* {isRight && <div className="card mx-5 my-3 w-25 div-points">{props.finRes}</div>} */}
      <div className="card mx-5 my-3 w-25 div-points">{props.finRes}</div>
    </div>
  )
}

export default Status;