import { useEffect, useRef } from "react";

function App() {
  const ref = useRef<HTMLInputElement>(null);



  useEffect(() => {
    document.title = "My App";
  });

  return (
    <div>
      <input ref={ref} type="text" className="form-control" />
    </div>
  );
}

export default App;
