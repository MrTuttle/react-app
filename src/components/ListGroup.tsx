import { MouseEvent } from "react";

function ListGroup() {
  let items = ["new-york", "sans francisco", "tokyo", "london", "paris"];


  // EventHandler convention : name it handle(nameEvent)
	// log(event) or log(event.something) to target all event properties
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className="list-group-item"
            key={item}
            onClick={handleClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;

// => SyntheticBaseEvent {_reactName: 'onClick', _targetIn
