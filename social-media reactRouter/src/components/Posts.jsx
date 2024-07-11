import React, { useContext } from 'react'
import { TiDelete } from "react-icons/ti";
import { PostListContext } from './store/PostList-store';
export default function ({ Item }) {

  const { deletePost } = useContext(PostListContext);
  return (

    <div className="card post-card" style={{ width: "36rem" }}>

      <div className="card-body">
        <span style={{ fontSize: "40px" }} className="position-absolute top-0 start-100 translate-middle p-2 text-danger border border-light rounded-circle"
          onClick={() => deletePost(Item.id)}
        ><TiDelete /> </span>
        <h5 className="card-title">{Item.title}

        </h5>
        <p className="card-text">{Item.Body}</p>
        <div >

          {(Item.tags || []).map((tag, l) => (
            <span style={{ margin: "5px" }} key={l} className="badge text-bg-primary">
              {tag}
            </span>
          ))}


        </div>
        <div className=" reaction alert alert-info" role="alert">
          This post has been reacted by {Item.reaction} people

        </div>

      </div>
    </div>
  )
}
