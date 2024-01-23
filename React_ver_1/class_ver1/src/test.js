import { useState } from "react"

export default function Test() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState("Result")

  function add() {
    console.log(typeof (a));
    setResult(parseInt(a) + parseInt(b));
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
        <select></select>
      </div>
      <input value={a} placeholder="a" onChange={(e) => { setA(e.target.value) }}></input>
      <div>+</div>
      <input value={b} placeholder="b" onChange={(e) => { setB(e.target.value) }}></input>
      <div>
        <button onClick={add}>result</button>
        <button onClick={reset}>RESET</button>
      </div>
    </>
  )
}