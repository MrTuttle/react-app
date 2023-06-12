import Button from "./components/Button";

function App() {
  return (
    <div>
      <Button color="secondary" onClick={() => console.log("clicked")}>Mon bouton</Button>
    </div>
  )
}

export default App
