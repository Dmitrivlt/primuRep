import { getByTitle } from '@testing-library/react';
import React, { useRef, useState } from 'react';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
// import ClassCounter from './components/ClassCounter';
// import Counter from './Counter';
import './styles/App.css';
import MyInput from './components/UI/input/MyInput'
import PostForm from './components/PostForm';

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
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  // Получаем post из дочернего компонента
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }


  return (
    <div className="App">
      <PostForm create={createPost} />
      {posts.length !== 0
        ?
        <PostList remove={removePost} posts={posts} title="Посты про Front-End" />
        :
        <h1 style={{ textAlign: 'center' }}
        > Данный пост не был найден ! </h1>
      }
      {/* <PostList posts={posts2} title="Посты про Back-End " /> */}
    </div >
  );
}

export default App;
