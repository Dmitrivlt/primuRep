import React, { useState } from 'react';
// import ClassCounter from './components/ClassCounter';
// import Counter from './Counter';
import './styles/App.css';

function App() {
  const [value, setValue] = useState('Текст в ИНПУТЕ')



  return (
    <div className="App">
      <div className="post">
        <div className="post_content">
          <strong> 1. JavaScript</strong>
          <div>
            JavaScript - язык программирования!
          </div>
        </div>
        <div className="post_btns">
          <button>Удалить</button>
        </div>

      </div>
      <div className="post">
        <div className="post_content">
          <strong> 1. JavaScript</strong>
          <div>
            JavaScript - язык программирования!
          </div>
        </div>
        <div className="post_btns">
          <button>Удалить</button>
        </div>

      </div>
      <div className="post">
        <div className="post_content">
          <strong> 1. JavaScript</strong>
          <div>
            JavaScript - язык программирования!
          </div>
        </div>
        <div className="post_btns">
          <button>Удалить</button>
        </div>

      </div>

    </div >
  );
}

export default App;
