import './App.css';
import Day from './components/section9_10/Day';
import DayList from './components/section9_10/DayList';
import Header from './components/section9_10/Header';
import EmptyPage from './components/section9_10/EmptyPage';
import CreateWord from './components/section15/CreateWord'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import CreateDay from './components/section15/CreateDay';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<DayList />} />
          <Route path="/day/:day" element={<Day />} />
          <Route path="*" element={<EmptyPage />} />
          <Route path='/create_word' element={<CreateWord />} />
          <Route path='/create_day' element={<CreateDay />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
