import React, { useState } from 'react'

function App() {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: 'John',
    },
  });

  const handleClick = () => {
    //game.player.name = 'bob';
    setGame({
      ...game,
      player: {...game.player, name: 'bob'}

    })

  }

  return (
    <div>
      {game.player.name}
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default App
