import ListGroup from "./components/ListGroup";

function App() {
  let items = ["new-york", "sans francisco", "tokyo", "london", "paris"];

  return (
    <div>
      <ListGroup items={items} heading={"Cities"} />
    </div>
  );
}

export default App;
