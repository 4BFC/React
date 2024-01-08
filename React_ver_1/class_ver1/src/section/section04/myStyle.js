//내가 만든 컴포넌트
function Header() {
  return <header>
    <title>section04</title>
    <h1><a href="/">WEB</a></h1>
  </header>
}
function Article() {
  return <article>
    <h2>Welcome</h2>
    Hello, WEB
  </article>
}
function List() {
  return <nav>
    <ol>
      <li><a href="/read/1">html</a></li>
      <li><a href="/read/2">css</a></li>
      <li><a href="/read/3">js</a></li>
    </ol>
    <Article></Article>
  </nav>

}

function Intro() {
  return <h1><a href='#' onClick={() => { alert("test") }}>hello! section04</a></h1>
}


function App() {
  return (
    <div>
      <Header></Header>
      <Intro></Intro>
      <List></List>
    </div>


  );
}

export default App;  //contact App_4.js