import { useState, useEffect } from "react";

// function Hello() {
//   function byFn() {
//     console.log("bye :(");
//   }
//   function hiFn() {
//     console.log("created :)");
//     // let a = 0;
//     // const intervalId = setInterval(() => { console.log(a += 1) }, 1000);
//     // return () => {
//     //   clearInterval(intervalId); // 컴포넌트가 언마운트될 때 clearInterval을 호출하여 정리
//     //   byFn();
//     // };
//     return byFn();
//   }
//   useEffect(hiFn, []);
//   return <h1>Hello</h1>;
// }

function Hello() {
  useEffect(() => {
    console.log("created :)");
    return () => {
      console.log("bye :(");
    }
  }, []);
  return <h1>Hello</h1>;
}

export default function SubApp() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </>
  )
}