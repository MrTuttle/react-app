import Button from "./components/Button";
import Alert from "./components/Alert";


function App() {
  return (
    <div>
      <Alert>Mon <strong>alerte</strong></Alert>
      <Button onClick={() => console.log("clicked")}>Mon bouton</Button>
    </div>
  )
}

export default App
