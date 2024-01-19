import dummy from "../../../db/data.json"
import { useParams } from "react-router-dom";
import Word from "./Word";
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
            <Word word={word} key={word.id}></Word> /**key={word.id}는 왜 넣어야하지? Word.js에서 key값을 지우기 때문에*/
          )
        })}
      </tbody>
    </table>
  </>;
}