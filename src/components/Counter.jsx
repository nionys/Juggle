export default function Counter(props) {
  const {increment, children} = props;
  return <>
    <button onClick={increment}>{children}</button>
  </>;
}