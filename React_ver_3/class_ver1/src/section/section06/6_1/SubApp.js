import { useState } from "react"

export default function SubApp() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDo("")
    setToDos(currentArray => [toDo, ...currentArray]) //num = [1,2,3,4] / setNum = [5, ...number]
  }
  console.log(toDos);
  return (
    <div>
      <h1>My To Do ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      {toDos.map((data, index) => (<li key={index}>{data}</li>))
      }
    </div >
  )
}