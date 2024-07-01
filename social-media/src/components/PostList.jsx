// import React, { useContext } from 'react'
import { useContext, useEffect, useState } from 'react';
import Posts from './Posts';
import Message from './Message';
import { PostListContext } from './store/PostList-store'
import LoadingSpinner from './LoadingSpinner';

export default function PostList() {
  const { postItem, getPost } = useContext(PostListContext);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    setLoading(!loading)
    fetch('https://dummyjson.com/posts', { signal })
      .then(res => res.json())
      .then(data => {
        getPost(data.posts);
        setLoading(false);
      }


      );
    return () => {
      controller.abort();
      console.log("cleanUp Api Call");
    }

  }, [])


  // fetch('https://dummyjson.com/posts')
  //   .then(res => res.json())
  //   .then(data => getPost(data.posts));




  return (
    <div>
      {loading && <LoadingSpinner />}
      {!loading && postItem.length === 0 && <Message />}
      {!loading && postItem.map((Item) => <Posts Item={Item} key={Item.id} />)}


    </div>
  )
}
