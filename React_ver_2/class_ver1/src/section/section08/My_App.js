import { useState } from "react";

function Class_App() {
  const [name, setName] = useState("Mike");
  // let name = "Mike"

  function changeName() {
    // name = name === "Mike" ? setName("Jane") : setName("Mike"); //실행 안됨
    if (name === "Mike") {
      setName("Jane")
    } else if (name === "Jane") {
      setName("Mike")
    }
  }

  return (
    <div>
      <h1>state</h1>
      <h2>{name}</h2>
      <button onClick={changeName}>Change</button>
    </div>
  );
}

export default Class_App;