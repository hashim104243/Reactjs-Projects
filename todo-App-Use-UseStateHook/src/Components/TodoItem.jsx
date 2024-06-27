import React from 'react'
import { MdDelete } from "react-icons/md";
export default function TodoItem({ items, handleDelete }) {

  return (
    <div>
      {items.map((items, j) => {
        return (

          <div className='container' key={j}>
            <div className="row kg-row">

              <div className="col-3">
                <p>{items.name}</p>
              </div>
              <div className="col-3">
                <p>{items.dueDate}</p>
              </div>
              <div className='col-2'>
                <button type="button" onClick={() => handleDelete(items.name)} className="btn btn-danger" ><MdDelete /></button>

              </div>
            </div>

          </div>

        )
      })
      }
    </div >)

}
