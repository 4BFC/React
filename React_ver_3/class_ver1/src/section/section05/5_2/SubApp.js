import { useState, useEffect } from "react";

export default function SubApp() {
  const [counter, setCount] = useState(0);
  const [keyword, setKeyWord] = useState("");

  const onClick = () => setCount((prev) => prev + 1);
  const onChange = (event) => setKeyWord(event.target.value);
  // console.log("I run all the time");

  useEffect(() => {
    console.log("I run only once.");
  }, []);

  // useEffect(() => {
  //   if (keyword !== "" && keyword.length > 5) {
  //     console.log("SEARCH FOR", keyword);
  //   }
  // }, [keyword])

  // useEffect(() => {
  //   console.log("I run when 'keyword' changes.")
  // }, [keyword]);

  // useEffect(() => {
  //   console.log("I run when 'counter' changes.")
  // }, [counter]);

  // useEffect(() => {
  //   console.log("I run when keyword & counter change");
  // }, [keyword, counter])

  return (
    <>
      <input onChange={onChange}></input>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </>
  )
}