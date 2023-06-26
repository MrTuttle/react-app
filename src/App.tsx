import { useState } from "react";

function App() {
  const [cart, setCart] = useState({
    discount: .1,
    items: [
      {id: 1, title: 'product 1', quantity: 1},
      {id: 2, title: 'product 2', quantity: 1},

    ]
  });

  const handleClick = () => {
    setCart({...cart, items: cart.items.map( item =>  item.id === 1 ? {...item, quantity: item.quantity + 1} : item)})
    console.log(cart.items)


  }

  return (
    <div>
      <p>Item 1 quantité : </p>
      <button onClick={handleClick}>Click me</button>

    </div>
  );
}
export default App;
