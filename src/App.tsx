import { useState } from "react";
import ExpenseTable from "./ExpenseTracker/components/expense-table/ExpenseTable";
import ExpenseTrackerForm from "./ExpenseTracker/components/expense-tracker-form/ExpenseTrackerForm";
import ExpenseFilter from "./ExpenseTracker/components/expense-filter/ExpenseFilter";

interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const [expenses, setExpenses] = useState<Expense[]>([]);

  const filteredExpenses = selectedCategory
    ? expenses.filter((c) => c.category === selectedCategory)
    : expenses;

  return (
    <div>
      <h1 className="mb-5">Expense tracker App</h1>
      <div className="mb-5">
        <ExpenseTrackerForm
          onSubmit={(newExpense) =>
            setExpenses([
              ...expenses,
              { ...newExpense, id: expenses.length + 1 },
            ])
          }
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
