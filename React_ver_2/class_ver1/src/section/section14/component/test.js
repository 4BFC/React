import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
//dummy를 지우고 data Api를 통해서 가지고 올 것이다.

export default function DayList() {
  const [days, setDays] = useState([]);//배열로 가지고 오기
  const [count, setCount] = useState(0);
  //useEffect는 랜더링 결과가 실제 dom에 반영된 직후이다. 컴포넌트가 사라지기 직전에도 한번 호출 된다.

  function onClick() {
    setCount(count + 1);
  }

  function onClick2() {
    //setDays에 객체가 할당이 되면서 li태그가 그만큼 늘어난다.
    setDays([
      ...days,
      {
        id: Math.random(),
        day: 1,
      },
    ]);
  }


  useEffect(() => { //단일 Hook이다.
    console.log("Count change")
  }, [count]) //의존성 배열

  return (
    <>
      <ul className="list_day">
        {days.map(day => {
          return (
            <li key={day.id}>
              <Link to={`/day/${day.day}`}> Day {day.day} </Link>
            </li>
          )
        })}
      </ul>
      <button onClick={onClick}>{count}</button>
      <button onClick={onClick2}>dayChange</button>
    </>
  );
}