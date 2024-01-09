function Header(props) {
  console.log(props)
  return <header>
    <title>section04</title>
    <h1><a href="/">{props.title}</a></h1>
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
  //map을 사용 할수 있도록 권장, foreach는?
  //동적으로 만들어주는 태그는 항상 key가 존재해야한다. 객체화가 항상 필요할 것이다.
  //리액트가 태그를 추적하는데 그때 키를 이용해서 추적한다.
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(<li key={t.id}><a href={'/read/' + t.id}>{t.title}</a></li>)
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
      <Header title="WEB"></Header>
      <Nav topics={topics}></Nav>
      <Article title="Welcome" body="Hello" ></Article>
    </div >
  );
}

export default App;  //contact App_4.js