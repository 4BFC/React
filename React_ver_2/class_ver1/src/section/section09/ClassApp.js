import Day from "./component/Day";
import DayList from "./component/DayList";
import Header from "./component/Header";
function ClassApp() {
  return (
    <div className="App">
      <Header></Header>
      <DayList></DayList>
      <Day></Day>
    </div>
  );
}
export default ClassApp;