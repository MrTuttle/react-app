import { useState } from "react";
import ListGroup from "./components/ListGroup";

import Button from "./components/Button";
import Alert from "./components/Alert";
import Like from './components/Like';


function App() {
  // state hook return a array of two states
  const [alertVisible, setAlertVisibility] = useState(false);
  let items = ["new-york", "sans francisco", "tokyo", "london", "paris"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  }
  return (
    <>
      <div>
        <Like onClick={ (toggle) => console.log('clicked') }/>

      </div>
      <div>
        <ListGroup items={items} heading={"Cities"} onSelectItem={handleSelectItem} />
      </div>
      <div>
        { alertVisible && <Alert onClose={() => setAlertVisibility(false)}>Mon alerte</Alert>}
        {console.log(`alertVisible = ${alertVisible}`)}
        {console.log(`setAlertVisibility = ${setAlertVisibility}`)}
        {console.log(`useState = ${useState}`)}


        <Button onClick={() => setAlertVisibility(true)}>Mon bouton</Button>
      </div>
    </>
  )
}

export default App
