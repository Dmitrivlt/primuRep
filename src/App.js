import React, { useState } from 'react';
import ClassCounter from './ClassCounter';
import Counter from './Counter';


function App() {
  const [value, setValue] = useState('Текст в ИНПУТЕ')



  return (
    <div className="App">
      <ClassCounter />
    </div >
  );
}

export default App;
