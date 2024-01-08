//this is default js
//run build를 하게되면 배포할 수 있는 build를 생성한다.
//npx serve -s build nodejs를 이용한 serve를 생성
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <h1><a href='#' onClick={() => { alert("test") }}>hello!</a></h1>
  );
}

export default App;
