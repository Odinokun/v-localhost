import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState<number>(0);

  useEffect(() => {
    getFromLocalStorage();
  }, []);

  const counterHandler = () => {
    setValue(value + 1);
  };

  const setToLocalStorage = () => {
    localStorage.setItem('counterVal', JSON.stringify(value));
    localStorage.setItem('trash value', JSON.stringify(value + 100500));
  };

  const getFromLocalStorage = () => {
    const lsVal = localStorage.getItem('counterVal');
    if (lsVal) {
      setValue(JSON.parse(lsVal));
    }
  };

  const removeFromLocalStorage = () => localStorage.removeItem('trash value');

  const clearLocalStorage = () => {
    localStorage.clear();
    setValue(0);
  };

  return (
    <div>
      <h1>{value}</h1>
      <button onClick={counterHandler}>INC</button>
      <button onClick={setToLocalStorage}>Set to LS</button>
      <button onClick={getFromLocalStorage}>Get from LS</button>
      <button onClick={removeFromLocalStorage}>Remove from LS</button>
      <button onClick={clearLocalStorage}>Clear LS</button>
    </div>
  );
}

export default App;
