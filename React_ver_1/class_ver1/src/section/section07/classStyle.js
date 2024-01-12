import { useState } from "react";

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
        <a id={t.id} href={'/read/' + t.id}
          onClick={(event) => {
            event.preventDefault();
            props.onChangeMode(Number(event.target.id)); //함수를 props로 호출해서 컨트롤 하는 것이다.
            //props.onChangeMode(t.id);
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
  //첫번째 인자는 상태이고 두번째 인자는 상태를 변경하는 함수이다. WELCOME은 초기 값이다.
  // let _mode = useState('WELCOME') //event가 발생 했을 때 변경되는 변수 값
  // const mode = _mode[0];
  // const setMode = mode[1];
  const [mode, setMode] = useState('WELCOME'); //setMode로 변경된 값이 mode로 값이 전달
  const [id, setId] = useState(null);

  const topics = [
    { id: 1, title: 'html', body: 'html is..' },
    { id: 2, title: 'css', body: 'css is..' },
    { id: 3, title: 'javascript', body: 'javascript is..' }
  ]
  let content = null;
  if (mode === 'WELCOME') {
    content = <Article title="Welcome" body="Hello, WEB" ></Article>
  } else if (mode === 'READ') {
    let title, body = null;
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body} ></Article>
  }
  return (
    <div>
      <Header title="WEB" onChangeMode={() => {
        // mode = 'WELCOME';
        setMode('WELCOME')
      }}></Header>
      <Nav topics={topics} onChangeMode={(_id) => {
        // mode = 'READ'; //이렇게 해도 변경이 되지 않는다 이유는 App함수가 한번 적용 되었기 때문이다 즉, 우리가 흔히 많이 사용되는 함수 내부에서 값을 변경하려고 했을 때 발생되는 문제와 비슷하다. 보통 이럴 때 setTimeout을 사용하곤 했다. 그래서 react에서는 상태값을 변경 시켜야한다. 그 역할이 useState이고 내부에서 새로고침이 되는 것이다.
        setMode('READ')
        setId(_id);
      }}></Nav>
      {content}
    </div >
  );
}
export default App;  //contact App_5.js