import { useState } from 'react'
import dummy from "../db/data.json";

export default function Day(props) {
  // const [day, setDay] = useState(props.day);
  const day = props.day;
  // console.log("day.js", props.day)
  //동적으로 변화를 해야하니 동적인 요소가 있는 모든 컴포넌트들은 모두 useState를 사용해야하는 줄 알았다.
  const wordList = dummy.words.filter(word => word.day === day); //1일차 dummy data를 가지고 온다.
  return <>
    <table>
      <tbody>
        {wordList.map(word => {
          return (
            <tr key={word.id}>
              <td>{word.eng}</td>
              <td>{word.kor}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  </>;
}