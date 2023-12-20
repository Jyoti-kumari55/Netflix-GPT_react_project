
export default function List(props){
  const list = props.number;
  const updatedNums = list.map((num) => {
    return <li>{num}</li>
  });
  return (
    <ul>{updatedNums}</ul>
  )
}
