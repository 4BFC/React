import './App.css';
import Day from './components/section9/Day';
import DayList from './components/section9/DayList';
import Header from './components/section9/Header';
import EmptyPage from './components/section9/EmptyPage';
import { BrowserRouter, Route, Routes } from "react-router-dom"
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<DayList />} />
          <Route path="/day/:day" element={<Day />} />
          <Route path="*" element={<EmptyPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
