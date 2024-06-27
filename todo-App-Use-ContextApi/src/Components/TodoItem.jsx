import React, { useContext } from 'react'
import { MdDelete } from "react-icons/md";
import { todoItemContext } from '../Store/TodoItems-store';
export default function TodoItem() {
  const { todoItem, deleteItem } = useContext(todoItemContext);

  return (
    <div>
      {todoItem.map((items, j) => {
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
                <button type="button" onClick={() => deleteItem(items.name)} className="btn btn-danger" ><MdDelete /></button>

              </div>
            </div>

          </div>

        )
      })
      }
    </div >)

}
