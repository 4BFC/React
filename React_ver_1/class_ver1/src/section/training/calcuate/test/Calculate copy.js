import { useState } from "react";

export default function Calculate(props) {
  const value = props.value;
  const [values, setValues] = useState('');

  const handleClick = () => {
    const updatedValue = values + value;
    setValues(updatedValue);

    // 부모 컴포넌트로 이벤트 호출
    if (props.onChange) {
      props.onChange(updatedValue);
    }
  };

  return (
    <div>
      <h3>{values}</h3>
      <button onClick={handleClick}>append</button>
    </div>
  );
}