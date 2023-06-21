import { useState } from "react";

function App () {
  const [drink, setDrink] = useState({
    title: "Americano",
    price: 5,
  });

  const handleClick = () => {
    const newDrink = {
      // copy the title
      title: drink.title,
      // change the price to 6
      price: 6
    }
    // pass newDrink to the set drink function
    setDrink(newDrink);
    console.log(handleClick);

  };

  return (
    <div>
      {drink.price}
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default App;
