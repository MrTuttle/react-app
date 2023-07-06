// src/App.tsx

import axios, { CanceledError } from "axios";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    axios
			// get -> promise -> res / err
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {signal: controller.signal})
      .then(res => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch(err => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      })


      // setLoading(false); cannot put false here cause server is asynchronous operation, code jump to the next line immediately.
      // we can hide the loader in the callback .then & .catch

      return () => controller.abort();
  }, [])

  return (
  <>
    {error && <p className="text-danger">{error}</p>}
    {isLoading && <div className="spinner-border"></div>}
    <ul>
      {users.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  </>
  );
}

export default App;
