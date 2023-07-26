import { useState } from "react";
import ExpenseTable from "./ExpenseTracker/components/expense-table/ExpenseTable";
import ExpenseTrackerForm from "./ExpenseTracker/components/expense-tracker-form/ExpenseTrackerForm";
import ExpenseFilter from "./ExpenseTracker/components/expense-filter/ExpenseFilter";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const [expenses, setExpenses] = useState([
    { id: 1, description: "Comida", amount: 10, category: "Utilities" },
    { id: 2, description: "gato", amount: 10, category: "Food" },
    { id: 3, description: "manzana", amount: 10, category: "Services" },
    { id: 4, description: "pera", amount: 10, category: "Other" },
  ]);

  const filteredExpenses = selectedCategory
    ? expenses.filter((c) => c.category === selectedCategory)
    : expenses;
  return (
    <div>
      <div className="mb-3">
        <ExpenseTrackerForm
          onSubmit={(newExpense) => console.log(newExpense)}
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelected={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseTable
        expenses={filteredExpenses}
        onDelete={(id) => setExpenses(expenses.filter((del) => del.id !== id))}
      />
    </div>
  );
}

export default App;
