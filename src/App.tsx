// src/App.tsx

import axios, { CanceledError } from "axios";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));
    axios
      .delete("https://jsonplaceholder.typicode.com/users/" + user.id)
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  const addUser = (user: User) => {
    // for the .catch method
    const originalUsers = [...users];
    // in real world, properties here will be based on the values of a form
    const newUser = { id: 0, name: "Flo" };
    // add newUser to state
    setUsers([newUser, ...users]);
    axios
      .post("https://jsonplaceholder.typicode.com/users", newUser)
      // include new object in the body of the response (res.data), and spread the users array (...users)
      // if the call is successfull we refresh the list with the saved user
      .then(({ data: savedUser }) => setUsers([savedUser, ...users]))
      // same .catch than deleteUser
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  const updateUser = (user: User) => {
    // hard coding update for this example - form data in real world
    const updatedUser = {...user, name: user.name + '!'};

    // => if id of current user (u) equals the id of the user that is passed to this function (user: User)
    // then return the update user (updateUser), otherwise return the current user (u)
    setUsers(users.map(u => u.id === user.id ? updatedUser : u));

    // for . catch
    const originalUsers = [...users];

    axios
    .patch("https://jsonplaceholder.typicode.com/users/" + user.id, updatedUser )
    .catch(err => {
      setError(err.message);
      setUsers(originalUsers);
    });




  };

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <button className="btn btn-primary mb-3" onClick={addUser}>
        Add
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            {user.name}
            <div>
              <button
                className="btn btn-outline-secondary mx-2"
                onClick={() => updateUser(user)}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(user)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
