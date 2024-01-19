import { useState, useEffect } from "react";
import { Link } from "react-router-dom"

export default function DayList() {
  const [days, setDays] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3001/days')
      .then(res => {
        return res.json() //res는 실제 json이 아니기에 형변환해야함
      })
      .then((data) => {
        setDays(data);
      });

  }, []);
  return (
    <ul className="list_day">
      {days.map(day => {
        return (
          <li key={day.id}>
            <Link to={`/day/${day.day}`}> Day {day.day} </Link>
          </li>
        )
      })}
    </ul>
  );
}