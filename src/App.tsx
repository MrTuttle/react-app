import React, { useState } from "react";
import List from "./components/Listing";
import FormProducts from "./components/FormProducts";

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
    //
    console.log("description :" + cart.items.map(item => item.description))
    console.log("description :" + cart.items.map(item => item.category))
    console.log("amount :" + cart.items.map(item => item.amount))
    console.log("first product :" + cart.items[0].description)
    console.log("second product :" + cart.items[1].description)


  };

  return (
    <>
    <div>
      <FormProducts />
      <List />
      {/* {cart.discount}{cart.items} */}
      <button className="btn btn-primary" onClick={handleClick}>Click me</button>
    </div>
    </>
  );
}

export default App;
