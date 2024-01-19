import dummy from "../db/data.json";
import { useParams } from "react-router-dom";
export default function Day() {
  // const { day } = useParams();
  const day = useParams().day;
  const wordList = dummy.words.filter(word => word.day === Number(day)); //1일차 dummy data를 가지고 온다.
  return <>
    <h2>Day {day}</h2>
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