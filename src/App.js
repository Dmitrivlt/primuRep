import { getByTitle } from '@testing-library/react';
import React, { useRef, useState } from 'react';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
// import ClassCounter from './components/ClassCounter';
// import Counter from './Counter';
import './styles/App.css';
import MyInput from './components/UI/input/MyInput'

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Invatam' },
    { id: 2, title: 'React', body: 'Acum la moment' },
    { id: 3, title: 'Front-end', body: 'In process' },

  ])
  // // const [posts2, setPost2] = useState([
  // //   { id: 1, title: 'Back-end', body: 'In asteptare' },
  // //   { id: 2, title: 'Phyton', body: 'In asteptare' },
  // //   { id: 3, title: 'Dream-work', body: 'Pizdets si tare vreu' }

  // ])
  const [post, setPost] = useState({ title: '', body: '' })


  const addNewPost = (e) => {
    e.preventDefault()
    setPosts([...posts, { ...post, id: Date.now() }])
    setPost({ title: '', body: '' })
  }

  return (
    <div className="App">
      <form>
        {/* Управляемый компонент */}
        <MyInput
          value={post.title}
          onChange={e => setPost({ ...post, title: e.target.value })}
          type="text"
          placeholder="Название поста" />
        {/* Не Управляемый компонент  */}
        <MyInput
          value={post.body}
          onChange={e => setPost({ ...post, body: e.target.value })}
          type="text"
          placeholder="Описание поста"
        />
        <MyButton onChange={addNewPost} >  Создать пост  </MyButton>
      </form>
      <PostList posts={posts} title="Посты про Front-End" />
      {/* <PostList posts={posts2} title="Посты про Back-End " /> */}
    </div >
  );
}

export default App;
