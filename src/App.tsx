import { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([
    {id: 1, description: 'aaa', amount: 10, category: 'Grocerys'},
    {id: 2, description: 'bbb', amount: 32.52, category: 'Truc'},
    {id: 3, description: 'ccc', amount: 32.52, category: 'Free txt'},
    {id: 4, description: 'bbdb', amount: 32.52, category: 'Truc'},
  ]);
  return (
    <div>
      <ExpenseList expenses={expenses} onDelete={(id) => setExpenses(expenses.filter(e => e.id !== id))}/>
    </div>
  );
}
export default App;
