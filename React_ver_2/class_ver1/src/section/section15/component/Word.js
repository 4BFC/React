import { useState } from "react";
export default function Word(props) { //words.map(word => {
  //state를 사용해서 각버튼과 상태를 표현하기 위해서 단어 부분을 따로 컴포넌트로 때어낸다.
  const [word, setWord] = useState(props.word)//삭제 상태
  const [isShow, setIsShow] = useState(false);
  const [isDone, setIsDone] = useState(word.isDone);
  //버튼이 클릭 되었을 때 구현
  function toggleShow() {
    setIsShow(!isShow);
  }
  function toggleDone() {
    fetch(`http://localhost:3001/words/${word.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...word,
        isDone: !isDone,
      }),
    }).then(res => {
      if (res.ok) {
        setIsDone(!isDone)
      }
    })
  }
  if (word.id === 0) {
    return null;
  }
  function del() {
    if (window.confirm('삭제 하시겠습니까?')) {
      fetch(`http://localhost:3001/words/${word.id}`, {
        method: 'DELETE'
      }).then(res => {
        if (res.ok) {
          setWord({ id: 0 })
        }
      });
    }
  }

  /* key={props.word.id} 여기서 key를 지운다. */
  return (
    <tr className={isDone ? 'off' : ''}>
      <td>
        <input type="checkbox" checked={isDone} onChange={toggleDone}></input>
      </td>
      <td>{word.eng}</td>
      <td>{isShow && word.kor}</td>
      {/* isShow를 같이 두면서 true 여야지 보일 수 있다. ->짧은 서킷 평가(short-circuit evaluation) */}
      <td>
        <button onClick={toggleShow}>뜻 {isShow ? '숨기기' : '보기'}</button>
        <button onClick={del} className="btn_del">삭제</button>
      </td>
    </tr>
  )
}