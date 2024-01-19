import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Word from "./Word";

export default function Day() {
  // const { day } = useParams();
  const [words, setWords] = useState([]); //json data는 배열이기 때문에 빈배열을 넣어야 한다. []
  const day = useParams().day;

  useEffect(() => {
    fetch(`http://localhost:3001/words?day=${day}`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        setWords(data);
      });
  }, [day]);


  return <>
    <h2>Day {day}</h2>
    <table>
      <tbody>
        {words.map(word => {
          return (
            <Word word={word} key={word.id}></Word>
          )
        })}
      </tbody>
    </table>
  </>;
}