import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";
import useFetch from "../section13/hooks/useFetch";

export default function DayList() {
  const days = useFetch("http://localhost:3001/days");
  // const [days, setDays] = useState([]);
  // const [count, setCount] = useState(0);

  // function onclick() {
  //   setCount(count + 1);
  // }

  // function onclick2() {
  //   setDays([
  //     ...days,
  //     {
  //       id: Math.random(),
  //       day: 1,
  //     }
  //   ]);
  // }

  // useEffect(() => {
  //   fetch('http://localhost:3001/days')
  //     .then(res => {
  //       return res.json()
  //     })// 여기서 res는 실제 json이 아니고 http인 것이다. 이것을 res로 받아서 .json파일로 변환하는 것이다.
  //     .then(data => {
  //       setDays(data);
  //     })//이후에 해당 API의 데이터 값을 data 매개변수로 가지고 와 setDays(data)의 형태로 days 변수에 값을 넣는다. 그렇면 return문에 있는 days.map함수가 돌아가면서 해당 데이터의 배열을 나열 할 것이다.
  // }, [])

  // // 랜더링 변화는 돔의 반응 직후에 나온다.

  return (
    <>
      < ul className="list_day" >
        {
          days.map(day => (
            <li key={day.id}>
              <Link to={`/day/${day.day}`}>Day{day.day}</Link>
            </li>
          ))
        }
      </ul >
      {/* <button onClick={onclick}>{count}</button>
      <button onClick={onclick2}>Day change</button> */}
    </>
  )
}

