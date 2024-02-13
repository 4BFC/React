import React, { useState } from 'react';

function App() {
  const [testDivs, setTestDivs] = useState([]);

  const handleButtonClick = () => {
    setTestDivs((prevDivs) => [...prevDivs, <input key={prevDivs.length} />]);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>버튼을 눌러 새로운 input 추가</button>
      {testDivs.map((testDiv, index) => (
        <div key={index}>{testDiv}</div>
      ))}
    </div>
  );
}

export default App;
