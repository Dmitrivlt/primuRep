import React, { useState } from 'react';
import ClassCounter from './ClassCounter';
import Counter from './Counter';


function App() {
  const [value, setValue] = useState('Текст в ИНПУТЕ')



  return (
    <div className="App">
      <ClassCounter />
      <h1> iiiiiiiiiii </h1>
    </div >
  );
}

export default App;
