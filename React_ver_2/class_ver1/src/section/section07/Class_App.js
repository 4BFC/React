import { useState } from "react";

function Class_App() {
  const [name, setName] = useState("Mike");
  // let name = "Mike"

  function changeName() {
    // name = name === "Mike" ? "Jane" : "Mike"; //먄약 name이 Mike라면 Jane으로 또느 그의 반대
    // const newName = name === "Mike" ? "Jane" : "Mike"; //먄약 name이 Mike라면 Jane으로 또느 그의 반대
    setName(name === "Mike" ? "Jane" : "Mike");
  }

  return (
    <div>
      <h1>state</h1>
      <h2>{name}</h2>
      {/* <button onClick={changeName}>Change</button> */}
      <button onClick={() => {
        setName(name === "Mike" ? "Jane" : "Mike");
      }}>Change</button>

    </div>
  );
}

export default Class_App;