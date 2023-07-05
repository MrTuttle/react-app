// src/App.tsx

import { useEffect, useRef, useState } from "react";

const connect = () => console.log('connecting');
const disconnect = () => console.log('disconnect');

function App() {
  useEffect( () => {
    connect();
    return () => disconnect();
  });

  return (
    <div>
    </div>
  );
}

export default App;
