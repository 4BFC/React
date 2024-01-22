import Day from "./component/Day";
import DayList from "./component/DayList";
import Header from "./component/Header";
import EmptyPage from "./component/EmptyPage"
import CreateWord from "./component/CreateWord"
import CreateDay from "./component/CreateDay"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function ClassApp() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
        <Routes>
          <Route exact path="/" element={<DayList />}></Route>
          <Route path="/day/:day" element={<Day />}></Route>
          <Route path="*" element={<EmptyPage />} />
          <Route path="/create_word" element={<CreateWord></CreateWord>}></Route>
          <Route path="/create_day" element={<CreateDay></CreateDay>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default ClassApp;