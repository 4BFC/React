function Header(props) {
  return <header>
    <title>section04</title>
    <h1><a href="/" onClick={(event) => {
      event.preventDefault();
      props.onChangeMode();
    }}>{props.title}</a></h1>
  </header>
}
function Article(props) {
  return <article>
    <h2>{props.title}</h2>
    {props.body}
  </article>
}
function Nav(props) {
  const lis = []
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(
      <li key={t.id}>
        <a
          href={'/read/' + t.id}
          onClick={(event) => {
            event.preventDefault();
            alert(t.id)
            props.onChangeMode();
          }}
        >{t.title}</a></li>
    )
  }
  return <nav>
    <ol>
      {lis}
    </ol>
  </nav>

}
function App() {
  const topics = [
    { id: 1, title: 'html', body: 'html is..' },
    { id: 2, title: 'css', body: 'css is..' },
    { id: 3, title: 'javascript', body: 'javascript is..' }
  ]
  return (
    <div>
      <Header title="WEB" onChangeMode={() => {
        alert('Header');
        console.log('test')
      }
      }></Header>
      <Nav topics={topics} onChangeMode={() => {
        // alert(`${topics.id}`)
      }}></Nav>
      <Article title="Welcome" body="Hello" ></Article>
    </div >
  );
}
export default App;  //contact App_5.js