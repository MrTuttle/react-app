import { useState } from "react";
import Button from "./components/Button";
import Alert from "./components/Alert";


function App() {
  // state hook return a array of two states
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      // condition && : rendre l'alerte uniquement si elle est définit sur true
      { alertVisible && <Alert onClose={() => setAlertVisibility(false)}>Mon alerte</Alert>}
      {console.log(`alertVisible = ${alertVisible}`)}
      {console.log(`setAlertVisibility = ${setAlertVisibility}`)}
      {console.log(`useState = ${useState}`)}


      <Button onClick={() => setAlertVisibility(true)}>Mon bouton</Button>
    </div>
  )
}

export default App
