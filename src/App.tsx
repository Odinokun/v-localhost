import { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState<number>(0);

  const counterHandler = () => {
    setValue(value + 1);
  };

  const setToLocalStorage = () => {};

  const getFromLocalStorage = () => {};

  return (
    <div>
      <h1>{value}</h1>
      <button onClick={counterHandler}>INC</button>
      <button onClick={setToLocalStorage}>Set to Local Storage</button>
      <button onClick={getFromLocalStorage}>Get from Local Storage</button>
    </div>
  );
}

export default App;
