import { useState } from 'react';
import './App.css';
import Calculate from "./section/training/Calculate"
import Show from './section/training/Show';

function App() {

  const [result, setResult] = useState("")

  const handleShow = (show) => { //show = props.value
    console.log("show", show);
    setResult(result + show)//배열도 이렇게 진행해도 괜찮다.
  }

  return (
    <div>
      <Show value={result}></Show>
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

      {/* <button onClick={handleShow}>AC</button>
      <button>+</button>
      <button>-</button>
      <button>x</button>
      <button>/</button>
      <button>=</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>7</button>
      <button>8</button>
      <button>9</button> */}

    </div>
  );
}

export default App;
