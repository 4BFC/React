import { useState } from "react"
import './myStyle.css'
//계산한 기록도 만들기
//a와 b에 아무것도 없을 때 error를 호출 한다.
//create를 해서 새로운 인자를 붙힐 수 있게 한다.
export default function MyCal() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState("Result")
  const [cal, setCal] = useState('+')

  const Cal = (cal) => {
    switch (cal) {
      case '+': setResult(parseInt(a) + parseInt(b)); break;
      case '-': setResult(parseInt(a) - parseInt(b)); break;
      case 'x': setResult(parseInt(a) * parseInt(b)); break;
      case '/': setResult(parseInt(a) / parseInt(b)); break;
      case '%': setResult(parseInt(a) % parseInt(b)); break;
    }
    setA("")
    setB("")
  }
  function select(e) {
    setCal(e.target.value)
  }

  function reset() {
    setA("")
    setB("")
    setResult("Result");
  }

  return (
    <>
      <h3>{result}</h3>
      <div>
        <select onChange={select}>
          <option value={'+'}>+</option>
          <option value={'-'}>-</option>
          <option value={'x'}>x</option>
          <option value={'/'}>/</option>
          <option value={'%'}>%</option>
        </select>
      </div>
      <input value={a} placeholder="a" onChange={(e) => { setA(e.target.value) }}></input>
      <div>{cal}</div>
      <input value={b} placeholder="b" onChange={(e) => { setB(e.target.value) }}></input>
      <div>
        <button onClick={() => { Cal(cal) }}>result</button>
        <button onClick={reset}>RESET</button>
      </div>
    </>
  )
}