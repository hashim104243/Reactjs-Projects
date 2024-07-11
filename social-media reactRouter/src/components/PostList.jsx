// import React, { useContext } from 'react'
import { useContext, useEffect, useState } from 'react';
import Posts from './Posts';
import Message from './Message';
import { PostListContext } from './store/PostList-store'
import LoadingSpinner from './LoadingSpinner';
import { useLoaderData } from 'react-router-dom';

export default function PostList() {
  // const { postItem } = useContext(PostListContext);
  const postItem = useLoaderData();


  // fetch('https://dummyjson.com/posts')
  //   .then(res => res.json())
  //   .then(data => getPost(data.posts));




  return (
    <div>
     
      {postItem.length === 0 && <Message />}
      {postItem.map((Item) => <Posts Item={Item} key={Item.id} />)}

    </div>
  )
}



export function PostLoader() {
  return fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then(data => {
      return data.posts;

    })
}

// {loading && <LoadingSpinner />}
// {!loading && postItem.length === 0 && <Message />}
// {!loading && postItem.map((Item) => <Posts Item={Item} key={Item.id} />)}