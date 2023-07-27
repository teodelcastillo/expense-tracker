import React from "react";

interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface Props {
  expenses: Expense[];
  onDelete: (id: number) => void;
}

const ExpenseTable = ({ expenses, onDelete }: Props) => {
  if (expenses.length === 0)
    return <h5>Add your first expense to display table</h5>;

  const totalAmount = expenses
    .reduce((accumulate, expense) => +expense.amount + accumulate, 0)
    .toFixed(2);
  return (
    <>
      <h1>Expenses list</h1>
      {expenses.length === 0 ? null : (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Description</th>
              <th>Amount</th>
              <th>Category</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <tr key={expense.id}>
                <td id="td-expense-description">{expense.description}</td>
                <td>$ {expense.amount}</td>
                <td>{expense.category}</td>
                <td>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => onDelete(expense.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td>Total</td>
              <td id="td-total">${totalAmount}</td>
              <td></td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      )}
    </>
  );
};

export default ExpenseTable;
