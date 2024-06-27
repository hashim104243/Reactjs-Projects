// import React, { useRef, useState } from 'react'
// import { MdOutlineAdd } from "react-icons/md";
// export default function AddTodo({ getValues }) {
//   const [text, setText] = useState("");
//   const [date, setDate] = useState("");

//   function handleText(e) {
//     setText(e.target.value)

//   }
//   function handleDate(e) {
//     setDate(e.target.value)

//   }
//   function handleValues(e) {

//     e.preventDefault();
//     getValues(text, date)
//     setText("");
//     setDate("");
//   }


//   return (
//     <div className='container'>
//       <form onSubmit={handleValues}>
//         <div className="row kg-row">
//           <div className="col-3">
//             <input value={text} type='input' placeholder='Enter todo here' onChange={handleText} />
//           </div>
//           <div className="col-3">
//             <input value={date} type='date' placeholder='Enter todo here' onChange={handleDate} />
//           </div>
//           <div className='col-2 ab'>
//             <button type="submit" className="btn btn-success" ><MdOutlineAdd /></button>

//           </div>
//         </div>
//       </form>

//     </div>
//   )
// }



/* Learn UseRef   */
// cant re-render component
// hold previous state also send as a prop to other compnent

import React, { useRef } from 'react'
import { MdOutlineAdd } from "react-icons/md";
export default function AddTodo({ getValues }) {


  const nameRef = useRef(null);
  const dateRef = useRef(null);

  function handleValues(e) {

    e.preventDefault();
    if (nameRef && dateRef) {
      const name = nameRef.current.value
      const dueDate = dateRef.current.value


      getValues(name, dueDate)
      nameRef.current.value = " ";
      dateRef.current.value = " "
    }
    else {
      return
    }


  }


  return (
    <div className='container'>
      <form onSubmit={handleValues}>
        <div className="row kg-row">
          <div className="col-3">
            <input ref={nameRef} type='text' placeholder='Enter todo here' />
          </div>
          <div className="col-3">
            <input ref={dateRef} type='date' placeholder='Enter todo here' />
          </div>
          <div className='col-2 ab'>
            <button type="submit" className="btn btn-success" ><MdOutlineAdd /></button>

          </div>
        </div>
      </form>

    </div>
  )
}