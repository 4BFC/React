export default function Form(props) {
  function handleClick(symbols) {
    switch (symbols) {
      case 'AC':
        return console.log('remove');
      case '+':
        return console.log('add');
      case '-':
        return console.log('minus');
      case 'x':
        return console.log('multiply');
      case '/':
        return console.log('divide');
      case '=':
        return console.log('result');
      default:
        break;
    }
  }
  //onClick={console.log(props.symbols)}이와 같이 작성하면 onClick이 직접 호출하는 코드가 되기 때문에 누르지 않아도 바로 호출이된다.

  // const handleClickButton = () => {
  //   handleClick(props.symbols);
  // }

  return (
    <div>
      <button onClick={() => {
        handleClick(props.symbols)
      }}>{props.symbols}</button>
      {/* <button onClick={() => { setValue(); }}>AC</button>
      <button onClick={() => { setValue(); }}>+</button>
      <button onClick={() => { setValue(); }}>-</button>
      <button onClick={() => { setValue(); }}>x</button>
      <button onClick={() => { setValue(); }}>/</button>
      <button onClick={() => { setValue(); }}>=</button>
      <button onClick={() => { setValue(); }}>1</button>
      <button onClick={() => { setValue(); }}>2</button>
      <button onClick={() => { setValue(); }}>3</button>
      <button onClick={() => { setValue(); }}>4</button>
      <button onClick={() => { setValue(); }}>5</button>
      <button onClick={() => { setValue(); }}>6</button>
      <button onClick={() => { setValue(); }}>7</button>
      <button onClick={() => { setValue(); }}>8</button>
      <button onClick={() => { setValue(); }}>9</button> */}
    </div>
  );
}