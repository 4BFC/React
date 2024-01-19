function showName() {
  console.log('MyName')
}

function showAge() {
  console.log('MyAge')
}

//event 사용하기
function showText(e) {
  console.log(e.target.value)
}
function usedText(text) {
  console.log(text)
}

function Class_App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>App.js</h1>
        <button onClick={showName}>show name</button>
        <button onClick={showAge}>show age</button>
        <input type="text" onChange={showText}></input>
        <input type="text" onChange={(e) => {
          const txt = e.target.value;
          usedText(txt)
        }}></input>
      </header>
    </div>
  );
}

export default Class_App;