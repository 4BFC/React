import { useState } from "react";

function Create(props) {
  return <article>
    <h2>Create</h2>
    <form onSubmit={event => {
      event.preventDefault();
      const title = event.target.title.value;//name이 title인 값을 가져온다.
      const body = event.target.body.value;
      props.onCreate(title, body)
    }}>
      <p><input type="text" name="title" placeholder="title"></input></p>
      <p><textarea name="body" placeholder="body"></textarea></p>
      <p><input type="submit" value="Create"></input></p>
    </form>
  </article>
}

function Header(props) {
  return <header>
    <title>section04</title>
    <h1><a href="/" onClick={(event) => {
      event.preventDefault();
      props.onChangeMode();
    }}>{props.title}</a></h1>
  </header>
}

function Article(props) {//현재 선택된 값의 이름과 내용 -> content에 들어가 있음
  return <article>
    <h2>{props.title}</h2>
    {props.body}
  </article>
}

function Nav(props) {//리스트
  const lis = []
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(
      <li key={t.id}>
        <a id={t.id} href={'/read/' + t.id}
          onClick={(event) => { //event로 클릭될 때
            event.preventDefault();
            props.onChangeMode(Number(event.target.id)); //Number는 int로 형변환
          }}//Number(event.target.id)는 _id이다.
        >{t.title}</a></li>
    )
  }
  return <nav>
    <ol>
      {lis}
    </ol>
  </nav>

}
//props는 외부자 state는 내부자
function Update(props) {
  const [title, setTitle] = useState(props.title);
  const [body, setBody] = useState(props.body);
  return <article>
    <h2>Update</h2>
    <form onSubmit={event => {
      event.preventDefault();
      const title = event.target.title.value;//name이 title인 값을 가져온다.
      const body = event.target.body.value;
      props.onUpdate(title, body)
    }}>
      <p><input type="text" name="title" placeholder="title" value={title} onChange={event => {
        setTitle(event.target.value);
      }}></input></p>
      <p><textarea name="body" placeholder="body" value={body} onChange={event => {
        setBody(event.target.value);
      }}></textarea></p>
      <p><input type="submit" value="Update"></input></p>
    </form>
  </article>
}

function App() {
  //조작하고 있는 장치
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(4);
  const [topics, setTopics] = useState([
    { id: 1, title: 'html', body: 'html is..' },
    { id: 2, title: 'css', body: 'css is..' },
    { id: 3, title: 'javascript', body: 'javascript is..' }
  ])

  let content = null;
  let contextControl = null;
  if (mode === 'WELCOME') {
    content = <Article title="Welcome" body="Hello, WEB" ></Article>
  }
  else if (mode === 'READ') { //READ모드이면..
    let title, body = null;
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === id) { //Nav로 부터 선택된 setId로 전달 받은 id값을 브라우저로 들어남
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body} ></Article>
    contextControl = <>
      <li><a href={"/update/" + id} onClick={event => {
        event.preventDefault();
        setMode('UPDATE');
      }}>Update</a></li>
      <li><input type="button" value="Delete" onClick={() => {
        const newTopics = [] //비어있는 배열
        for (let i = 0; i < topics.length; i++) {
          if (topics[i].id !== id) { //설정,선택되어 있는 값이 아닌 것들을 newTopics에 넣어둔다. css를 지운다면 js와 html만 있는 것이다.
            newTopics.push(topics[i])
            console.log(topics[i])
          }
        }
        setTopics(newTopics);// 제외된 값 나머지가 newTopics에 있고 setTopics로 새로 정의한다.
        setMode('WELCOME')
      }} /></li>
    </>
  }
  else if (mode === 'CREATE') {
    content = <Create onCreate={(_title, _body) => {
      const newTopic = { id: nextId, title: _title, body: _body }
      const newTopics = [...topics] //newTopic값을 push하기 위해서는 기존 topics를 스프레드해야한다. 그리고 해당 변수에 push 해야한다.
      newTopics.push(newTopic);
      setTopics(newTopics);
      setMode('READ');
      setId(nextId);
      setNextId(nextId + 1)
    }}></Create>
  }
  else if (mode === 'UPDATE') {
    let title, body = null;
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === id) { //Nav로 부터 선택된 setId로 전달 받은 id값을 브라우저로 들어남
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Update title={title} body={body} onUpdate={(_title, _body) => {
      const newTopics = [...topics];
      const updatedTopic = { id: id, title: _title, body: _body } //새로운 값 생성
      for (let i = 0; i < newTopics.length; i++) {
        if (newTopics[i].id === id) {
          newTopics[i] = updatedTopic;
          break;
        }
      }
      setTopics(newTopics);
      setMode('READ');
    }}></Update>
  }
  return (
    <div>
      <Header title="WEB" onChangeMode={() => {
        // mode = 'WELCOME';
        setMode('WELCOME')
      }}></Header>
      <Nav topics={topics} onChangeMode={(_id) => { //_id는 Number(event.target.id) 이다.
        setMode('READ')
        setId(_id); //onChangeMode의 event를 받은 해당 id 값
      }}></Nav>
      {content}
      <li><a href="/create" onClick={event => {
        event.preventDefault();
        setMode('CREATE')
      }}>Create</a></li>
      {contextControl}

    </div >
  );
}
export default App;  //contact App_5.js