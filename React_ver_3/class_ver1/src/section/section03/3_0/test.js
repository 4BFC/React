import { useState } from "react"

export default function Test() {
  const [number, setNumber] = useState(0);
  // const [after, setAfter] = useState(number); //랜더링 후
  // const [before, setBefore] = useState(number); //랜더링 전

  return (
    <div>
      {/* <input onClick={setNumber((e) => { e.target.value })}></input> */}
      <h3>{number}</h3>
      <button onClick={() => { setNumber(number + 1); console.log(number) }}>click</button>
      {/* <spn>first Value{number}</spn> */}
      {/* <input onClick={setAfter((e) => { e.target.value })}></input> */}
      {/* <spn>second Value{after}</spn> */}

    </div>
  )
}