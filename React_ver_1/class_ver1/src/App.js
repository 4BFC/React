import { useState } from 'react';
import './App.css';
import Calculate from "./section/training/Calculate"

function App() {

  const [result, setResult] = useState()
  const handleShow = (show) => {
    console.log("show", show);
    setResult(show)
  }

  return (
    <div>
      <h3>{result}</h3>
      <Calculate value={'AC'} onClick={handleShow}></Calculate>
      <Calculate value={'+'} onClick={handleShow}></Calculate>
      <Calculate value={'-'} onClick={handleShow}></Calculate>
      <Calculate value={'x'} onClick={handleShow}></Calculate>
      <Calculate value={'/'} onClick={handleShow}></Calculate>
      <Calculate value={'='} onClick={handleShow}></Calculate>
      <Calculate value={1} onClick={handleShow}></Calculate>
      <Calculate value={2} onClick={handleShow}></Calculate>
      <Calculate value={3} onClick={handleShow}></Calculate>
      <Calculate value={4} onClick={handleShow}></Calculate>
      <Calculate value={5} onClick={handleShow}></Calculate>
      <Calculate value={6} onClick={handleShow}></Calculate>
      <Calculate value={7} onClick={handleShow}></Calculate>
      <Calculate value={8} onClick={handleShow}></Calculate>
      <Calculate value={9} onClick={handleShow}></Calculate>
    </div>
  );
}

export default App;
