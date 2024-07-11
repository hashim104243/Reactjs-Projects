import { useCallback, useEffect, useState } from "react";
import { createContext, useReducer } from "react";


function reducer(currentPostList, action) {
  let item = currentPostList
  if (action.type == "Delet_Post") {
    item = item.filter((item) => item.id !== action.payload.deletedId)
  }
  else if (action.type == "Add_Post") {
    item = [action.payload, ...item]
  }
  else if (action.type == "All_Posts") {

    item = action.payload.posts
  }
  return item;
}
export const PostListContext = createContext({
  postItem: [],
  addPost: () => { },
  deletePost: () => { },



});

function PostContext({ children }) {
  // const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   const controller = new AbortController();
  //   const signal = controller.signal;
  //   setLoading(!loading)
  //   fetch('https://dummyjson.com/posts', { signal })
  //     .then(res => res.json())
  //     .then(data => {
  //       getPost(data.posts);
  //       setLoading(false);
  //     }


  //     );
  //   return () => {
  //     controller.abort();

  //   }

  // }, [])
  // const postListItem = [
  //   {
  //     id: 1,
  //     title: "Learn React Js",
  //     Body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
  //     reaction: "10",
  //     tag: ["reactJs", "Learn Frontend", "javascript"]

  //   }, {
  //     id: 2,
  //     title: "Learn Python ",
  //     Body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
  //     reaction: "90",
  //     tag: [" Python", "Learn ML", "Learn Ds"]

  //   }
  // ]
  const [postItem, DispatchPostvalues] = useReducer(reducer, []);

  function addPost(post) {
    console.log(post);
    console.log("when click on add post btn then values is ", post);
    DispatchPostvalues({
      type: "Add_Post",
      payload: post

    })
  }
  const deletePost = useCallback((deletedId) => {

    const deleteItemId = {
      type: "Delet_Post",
      payload: {
        deletedId: deletedId
      }
    }
    DispatchPostvalues(deleteItemId)
  }, [DispatchPostvalues])

  function getPost(posts) {
    console.log(posts);
    const getPosts = {
      type: "All_Posts",
      payload: {
        posts
      }
    }
    DispatchPostvalues(getPosts)
  }

  return (
    <PostListContext.Provider value={{
      postItem: postItem,
      deletePost: deletePost,
      addPost: addPost,

    }} >

      {children}
    </PostListContext.Provider >
  )
}
export default PostContext;
