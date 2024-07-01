import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css"
import Header from './components/Header';
import Footer from './components/Footer';
import SiderBar from './components/SiderBar';
import PostList from './components/PostList';
import CreatePost from './components/CreatePost';
import PostContext, { PostListContext } from './components/store/PostList-store';
import { useContext } from 'react';
export default function App() {


  const [selected, setSelected] = useState("home");
  return (
    <PostContext>
      <div className='Parent-Box'>
        <SiderBar selected={selected} setSelected=
          {setSelected} />
        <div className='Right-box'>
          <Header />
          {selected == "home" ? <PostList /> : <CreatePost />}

          <Footer />
        </div>
      </div>
    </PostContext>

  )
}
