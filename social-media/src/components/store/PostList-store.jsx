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
  postListItem: [],
  addPost: () => { },
  deletePost: () => { },
  getPost: () => { }


});

function PostContext({ children }) {
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

  function addPost(userId, utitle, postContent, userreaction, userTag) {
    console.log(userId + " " + utitle + " " + postContent + " " + userreaction + " " + userTag);
    DispatchPostvalues({
      type: "Add_Post",
      payload: {
        id: Date.now(),
        title: utitle,
        Body: postContent,
        reaction: userreaction,
        tags: userTag
      }

    })
  }
  function deletePost(deletedId) {
    console.log(deletedId);
    const deleteItemId = {
      type: "Delet_Post",
      payload: {
        deletedId: deletedId
      }
    }
    DispatchPostvalues(deleteItemId)
  }

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
      getPost: getPost
    }} >

      {children}
    </PostListContext.Provider >
  )
}
export default PostContext;
