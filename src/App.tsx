import React, { useState } from "react";
import List from "./components/Listing";

function App() {
  const [cart, setCart] = useState({
    discount: .1,
    items: [
      { description: 'Milk', category:'grocery', amount: 1},
      { description: 'eggs', category:'Utilities', amount: 1},

    ],
  });

  const handleClick = () => {
    //game.player.title = 'bob';
    // setBugs(bugs.map(bug => bug.id === 1 ? {...bug, fixed: true} : bug))

    console.log(cart.items.map(item => item.amount))
  };

  return (
    <>
    <div>
      <List />
      {/* {cart.discount}{cart.items} */}
      <button className="btn btn-primary" onClick={handleClick}>Click me</button>
    </div>
    </>
  );
}

export default App;
