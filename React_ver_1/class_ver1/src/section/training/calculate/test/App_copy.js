import './App.css';
import Calculate from "../../Calculate"
function App() {

  const handleCalculateChange = (updatedValues) => {
    console.log("Updated Values:", updatedValues);
  };

  return (
    <div>
      <Calculate value={1} onChange={handleCalculateChange}></Calculate>
      <Calculate value={2} onChange={handleCalculateChange}></Calculate>
      <Calculate value={3} onChange={handleCalculateChange}></Calculate>
      <Calculate value={4} onChange={handleCalculateChange}></Calculate>
    </div>
  );
}

export default App;
