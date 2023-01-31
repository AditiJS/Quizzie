import React from "react";
import './OptionsCard.css'

const OptionsCard = (props) => {

  function onSelectHandler(event) {
    
    let val = (event.target).value;

    if (val === (props.answer)) {
      console.log((val === (props.answer)));
      props.pointsHandler(1);
      props.calScore((props.fin) + 1);
    }
    else props.pointsHandler(0);
  }

  return (
    <div>
      <div className="btn-group card  my-3 w-75 mx-auto bg-black OptionCardDiv" role="group" aria-label="Basic radio toggle button group">
        <input type="radio" className="btn-check" name="btnradio" value={props.op_1} id={props.op_1} autocomplete="off" onChange={onSelectHandler} />
        <label className="btn btn-light btn-lg my-2 mx-auto w-50 optionRadio" for={props.op_1} >{props.op_1}</label>

        <input type="radio" className="btn-check" name="btnradio" value={props.op_2} id={props.op_2} autocomplete="off" onChange={onSelectHandler} />
        <label className="btn btn-light btn-lg my-2 mx-auto w-50 optionRadio" for={props.op_2}>{props.op_2}</label>

        <input type="radio" className="btn-check" name="btnradio" value={props.op_3} id={props.op_3} autocomplete="off" onChange={onSelectHandler} />
        <label className="btn btn-light btn-lg my-2 mx-auto w-50 optionRadio" for={props.op_3}>{props.op_3}</label>

        <input type="radio" className="btn-check" name="btnradio" value={props.op_4} id={props.op_4} autocomplete="off" onChange={onSelectHandler} />
        <label className="btn btn-light btn-lg my-2 mx-auto w-50 optionRadio" for={props.op_4}>{props.op_4}</label>
      </div>
      <div>
       points {" : " + props.fin}
      </div>
    </div>
  )
}

export default OptionsCard;
