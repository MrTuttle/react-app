import { useState } from "react";
import produce from "immer";

function App() {
  const [bugs, setBugs] = useState([
    {id: 1, title: 'bug 1', fixed: false },
    {id: 2, title: 'bug 2', fixed: true }

  ])

  const handleClick = () => {
    // setBugs(bugs.map(bug => bug.id === 1 ? {...bug, fixed: true} : bug))
    setBugs(produce(draft => {
      const bug = draft.find(bug => bug.id === 1);
      if (bug) bug.fixed = true;
    }))

  };

  return (
    <div>
      {bugs.map(bug => <p key={bug.id}>{bug.title} {bug.fixed ? 'Fixed' : 'New'}</p>)}
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default App;
