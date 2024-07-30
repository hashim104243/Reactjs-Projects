import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
// import { counterAction } from '../Store/Index';

import { counterAction } from '../Store/Counter';
import { privacyAction } from '../Store/Privacy';
export default function Controls() {
  const refInput = useRef();
  const dispatch = useDispatch();
  function handleIncreament() {
    console.log("inc");
    dispatch(counterAction.inc())

  }
  function handleDec() {
    console.log("dec");
    dispatch(counterAction.dec())
  }
  function AddValue() {

    dispatch(counterAction.add(refInput.current.value
    ))
  }
  function subtractValue() {
    dispatch(counterAction.subtract(refInput.current.value
    ))
  }
  function handleToggle() {
    dispatch(privacyAction.toggle())
  }
  return (
    <div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center" style={{ margin: "10px" }}>
        <button onClick={handleIncreament} type="button" className="btn btn-primary">+1</button>

        <button onClick={handleDec} type="button" className="btn btn-success">-1</button>
        <button onClick={handleToggle} type="button" className="btn btn-success">private Counter</button>
      </div>

      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <input ref={refInput} type="text" className="btn btn-primary" />
        <button onClick={AddValue} type="button" className="btn btn-primary">add</button>

        <button onClick={subtractValue} type="button" className="btn btn-success">subtract</button>
      </div>
    </div>
  )
}



// import React, { useRef } from 'react';
// import { useDispatch } from 'react-redux';
// import { counterAction } from '../Store/Index';

// export default function Controls() {
//   const refInput = useRef();
//   const dispatch = useDispatch();

//   function handleIncrement() {
//     dispatch(counterAction.inc());
//   }

//   function handleDec() {
//     dispatch(counterAction.dec());
//   }

//   function addValue() {
//     const value = parseInt(refInput.current.value, 10);
//     if (!isNaN(value)) {
//       dispatch(counterAction.add(value));
//     }
//   }

//   function subtractValue() {
//     const value = parseInt(refInput.current.value, 10);
//     if (!isNaN(value)) {
//       dispatch(counterAction.subtract(value));
//     }
//   }

//   return (
//     <div>
//       <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
//         <button onClick={handleIncrement} type="button" className="btn btn-primary">+1</button>
//         <button onClick={handleDec} type="button" className="btn btn-success">-1</button>
//       </div>

//       <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
//         <input ref={refInput} type="text" className="btn btn-primary" placeholder="Enter a number" />
//         <button onClick={addValue} type="button" className="btn btn-primary">Add</button>
//         <button onClick={subtractValue} type="button" className="btn btn-success">Subtract</button>
//       </div>
//     </div>
//   );
// }