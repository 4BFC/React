import { useEffect } from "react";

export default function SubApp() {
  function onClick() {
    console.log("Click!");
  }
  console.log("I run all the time");
  useEffect(() => {
    console.log("Call The Api..");
  }, [])
  // useEffect는 한번만 랜더링이 된다.
  return (
    <>
      <h1>useEffect</h1>
      <button onClick={onClick}>Click me</button>
    </>
  )
}