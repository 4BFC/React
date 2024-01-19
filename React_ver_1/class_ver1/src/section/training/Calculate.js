export default function Calculate(props) {
  const show = () => {
    if (props.onClick) {
      props.onClick(props.value);
    }
  }
  return (
    <div>
      <button onClick={show}>{props.value}</button>
    </div>
  );
}