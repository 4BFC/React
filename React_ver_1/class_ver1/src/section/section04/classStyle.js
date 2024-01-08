//수업에서 만든 컴포넌트
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
function Nav() {
  return <nav>
    <ol>
      <li><a href="/read/1">html</a></li>
      <li><a href="/read/2">css</a></li>
      <li><a href="/read/3">js</a></li>
    </ol>
  </nav>

}
function App() {
  return (
    <div>
      <Header></Header>
      <Nav></Nav>
      <Article></Article>
    </div>


  );
}

export default App;  //contact App_4.js