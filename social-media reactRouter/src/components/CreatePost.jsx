
import { Form, redirect } from 'react-router-dom';

export default function CreatePost() {





  function handleSubmit(e) {

  }
  return (
    <Form method='POST' className='create-Post' >


      <div className="mb-3">
        <label htmlFor="Uid" className="form-label">Enter User Id</label>
        <input name="userId" type="text" className="form-control" id="Uid" placeholder='Write Post title Here' />

      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Post Title</label>
        <input name="title" type="text" className="form-control" id="title" placeholder='Write Post title Here' />

      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">Post Content</label>
        <textarea name="Body" type="text" rows="4" className="form-control" id="body" placeholder='Write Post content Here' />

      </div>

      <div className="mb-3">
        <label htmlFor="reaction" className="form-label">Number of reaction</label>
        <input name="reaction" type="text" className="form-control" id="reaction" placeholder='How many poeple react this post' />

      </div>


      <div className="mb-3">
        <label htmlFor="Tags" className="form-label">Enter your hashtags here</label>
        <input name="tags" type="text" className="form-control" id="Tags" placeholder='write tags' />

      </div>

      <button type="submit" className="btn btn-primary">Post</button>
    </Form>
  )
}



export async function CreatePostAction(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split("");
  console.log(postData);
  fetch('https://dummyjson.com/posts/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(postData)
    //   JSON.stringify({
    //   userId: userId,
    //   title: utitle,
    //   Body: postContent,
    //   reaction: userreaction,
    //   tags: userTag
    //   /* other product data */
    // })
  })
    .then(res => res.json())
    .then((post) => {
      console.log("seerver response is", post);
      addPost(post)
      navigate("/")
    }
    )
  return redirect("/")
}