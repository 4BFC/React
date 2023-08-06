import './App.css';
import Hello from './components/section1/Hello';

function App() {
  console.log("App.js")
  return (
    <div className="App">
      <Hello age={10} />
      <Hello age={20} />
      <Hello age={30} />
    </div>
  );
}

export default App;
