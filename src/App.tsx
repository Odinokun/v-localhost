import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState<number>(0);

  const counterHandler = () => setValue(value + 1);

  useEffect(() => {
    const lsVal = localStorage.getItem('counterVal');
    // !!!!Achtung!!!! проверка lsVal !== '0' делается,
    // что бы избежать зачистки данных из-за
    // двойной перезагрузки вызванной <StrictMode></StrictMode>
    if (lsVal && lsVal !== '0') {
      setValue(JSON.parse(lsVal));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('counterVal', JSON.stringify(value));
  }, [value]);

  // const setToLocalStorage = () => {
  //   localStorage.setItem('counterVal', JSON.stringify(value));
  //   localStorage.setItem('trash value', JSON.stringify(value + 100500));
  // };

  // const getFromLocalStorage = () => {
  //   const lsVal = localStorage.getItem('counterVal');
  //   if (lsVal) {
  //     setValue(JSON.parse(lsVal));
  //   }
  // };

  // const removeFromLocalStorage = () => localStorage.removeItem('trash value');

  // const clearLocalStorage = () => {
  //   localStorage.clear();
  //   setValue(0);
  // };

  return (
    <div>
      <h1>{value}</h1>
      <button onClick={counterHandler}>INC</button>
      {/* <button onClick={setToLocalStorage}>Set to LS</button>
      <button onClick={getFromLocalStorage}>Get from LS</button>
      <button onClick={removeFromLocalStorage}>Remove from LS</button>
      <button onClick={clearLocalStorage}>Clear LS</button> */}
    </div>
  );
}

export default App;
