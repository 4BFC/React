import Class_App from "./section/section08/Class_App";
import My_App from "./section/section08/My_App"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Class_App age={10}></Class_App>
        <Class_App age={20}></Class_App>
        <Class_App age={30}></Class_App>
        {/* <My_App></My_App> */}
      </header>
    </div>
  );
}

export default App;
