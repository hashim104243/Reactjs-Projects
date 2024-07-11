import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import CreatePost, { CreatePostAction } from './components/CreatePost.jsx'
import PostList, { PostLoader } from './components/PostList.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/", element: <PostList />, loader: PostLoader
      },
      { path: "/create-post", element: <CreatePost />, action: CreatePostAction }
    ]
  }

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
