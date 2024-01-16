import dummy from "../db/data.json";

export default function Day() {
  const day = 1;
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