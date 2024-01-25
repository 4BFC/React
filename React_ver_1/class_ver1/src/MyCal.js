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
  const [lis, setLis] = useState([])

  const Cal = (cal) => {
    let resultValue;
    switch (cal) {
      case '+': resultValue = parseInt(a) + parseInt(b); break;
      case '-': resultValue = parseInt(a) - parseInt(b); break;
      case 'x': resultValue = parseInt(a) * parseInt(b); break;
      case '/': resultValue = parseInt(a) / parseInt(b); break;
      case '%': resultValue = parseInt(a) % parseInt(b); break;
      default: ;
    }
    setResult(resultValue);
    setLis((prevLis) => [...prevLis, a + cal + b + "=" + resultValue]);
    //내부적으로 내부 값은 변동되고 UI로 랜더링 되는 구간의 변화(동적) 값을 useState를 사용해야한다.
    //useState의 사용과 내부 변수의 활용 차이
    //prevLis 처럼 값을 어떻게 가져 올 수 있는지..
    setA("");//초기화
    setB("");//초기화
  }
  function select(e) {
    setCal(e.target.value)
  }

  function reset() {
    setA("")
    setB("")
    setResult("Result");
  }

  // function delete_Fn() {
  //   setLis((prevLis)=>[])
  // }

  function delete_Fn(indexToDelete) {//이부분 분석이 필요함
    setLis((prevLis) => prevLis.filter((_, index) => index !== indexToDelete));
  }


  function delete_All() {
    setLis([]);
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
        <button onClick={() => {
          Cal(cal)
        }}>result</button>
        <button onClick={reset}>RESET</button>
      </div>
      <div>
        <span>List</span>
        <span><button onClick={() => { delete_Fn(0) }}>Delete</button></span>
        <span><button onClick={delete_All}>Delete All</button></span>
        <ul>
          {lis.map((data, index) => (
            <li key={index}>{data}</li>
          ))}
        </ul>
      </div>
    </>
  )
}