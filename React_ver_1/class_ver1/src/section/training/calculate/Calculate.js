import { useState } from "react";

export default function Calculate(props) {
  const [type, typeSet] = useState()

  function calType() {
    if (typeof (props.value) === 'string') {
      typeSet('string')
    } else if (typeof (props.value) === 'number') {
      typeSet('number')
    }

  }
  const show = () => {
    if (props.onClick && type !== 'string') {
      props.onClick(props.value);
      calType();
    }
  }

  return (
    <div>
      <button onClick={show}>{props.value}</button>
    </div>
  );
}