import dummy from "../../db/data.json";
import { useParams } from "react-router-dom";
import Word from "../section11/Word";
export default function Day() {

  const { day } = useParams();//?
  const wordList = dummy.words.filter(word => word.day === Number(day));
  //dummy데이터에서 words의 day의 값을 wordList에 배열로 가지고 온다. 이후 Number(day)의 값과 같은 값들을 필터로 거쳐서 wordList에 담겨지고 해당 단어들이 페이지에 기제 된다.
  return <>
    <h2>Day {day}</h2>
    <table>
      <tbody>
        {wordList.map(word => (
          <Word word={word} key={word.id} />
        ))}
      </tbody>
    </table>
  </>
}

