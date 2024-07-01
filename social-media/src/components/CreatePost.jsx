import React, { useContext, useRef } from 'react'
import { PostListContext } from './store/PostList-store';

export default function CreatePost() {
  const { addPost } = useContext(PostListContext)
  const UserId = useRef();
  const UserTitle = useRef();
  const PostContent = useRef();
  const Userreaction = useRef();
  const UserTag = useRef();




  function handleSubmit(e) {
    e.preventDefault();


    const userId = UserId.current.value;
    const utitle = UserTitle.current.value;
    const postContent = PostContent.current.value;
    const userreaction = Userreaction.current.value;
    const userTag = UserTag.current.value.split(" ");


    if (!userId || !utitle || !postContent || !userreaction || !UserTag.current.value) {
      alert('Please fill in all fields before submitting.');
      return;
    }
    addPost(userId, utitle, postContent, userreaction, userTag);
    UserId.current.value = ''
    UserTitle.current.value = ""
    PostContent.current.value = ""
    Userreaction.current.value = ""
    alert('Your post has been successfully uploaded!');
  }
  return (
    <form className='create-Post' onSubmit={handleSubmit}>


      <div className="mb-3">
        <label htmlFor="Uid" className="form-label">Enter User Id</label>
        <input ref={UserId} type="text" className="form-control" id="Uid" placeholder='Write Post title Here' />

      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Post Title</label>
        <input ref={UserTitle} type="text" className="form-control" id="title" placeholder='Write Post title Here' />

      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">Post Content</label>
        <textarea ref={PostContent} type="text" rows="4" className="form-control" id="body" placeholder='Write Post content Here' />

      </div>

      <div className="mb-3">
        <label htmlFor="reaction" className="form-label">Number of reaction</label>
        <input ref={Userreaction} type="text" className="form-control" id="reaction" placeholder='How many poeple react this post' />

      </div>


      <div className="mb-3">
        <label htmlFor="Tags" className="form-label">Enter your hashtags here</label>
        <input ref={UserTag} type="text" className="form-control" id="Tags" placeholder='write tags' />

      </div>

      <button type="submit" className="btn btn-primary">Post</button>
    </form>
  )
}
