import dummy from "../db/data.json";

export default function DayList() {
  console.log(dummy)
  return (
    //Key는 반복되는 요소에 고유값을 넣어야해서 필요하다.
    <ul className="list_day">
      {dummy.days.map(day => {
        return (
          <li key={day.id}> Day {day.day} </li>
        )
      })}
      <li></li>
    </ul>
  );
}

/*
return (
  <ul className="list_day">
    {dummy.days.map(day => (
      <li>
        Day {day.day}
      </li>
    ))}
  </ul>
);
*/