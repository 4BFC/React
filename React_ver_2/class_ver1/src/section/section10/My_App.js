import { useState } from "react"
import Day from "./mycomponent/Day";
import DayList from "./mycomponent/DayList";
import Header from "./mycomponent/Header";
function ClassApp() {
  const [newDay, setDay] = useState()
  // let _day = 0;
  return (
    <div className="App">
      <Header></Header>
      <DayList onClick={(day) => {
        setDay(day);
        console.log(day)
      }}></DayList>
      <Day day={newDay}></Day>
    </div>
  );
}
export default ClassApp;