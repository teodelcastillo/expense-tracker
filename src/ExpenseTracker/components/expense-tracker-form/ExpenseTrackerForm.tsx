import React from "react";
import { useForm, FieldValues, FormState } from "react-hook-form";
import categories from "../../cateogories";

interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface Props {
  onSubmit: (data: Expense) => void;
}

const ExpenseTrackerForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    trigger,
  } = useForm<Expense>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="expense-description" className="form-label">
          Expense description
        </label>
        <input
          {...register("description", {
            required: true,
            maxLength: 25,
          })}
          id="expense-description"
          type="text"
          className="form-control"
          placeholder="Apple"
          onBlur={() => trigger("description")}
        />
        {errors.description?.type === "required" && (
          <p className="text-danger">You must enter a description.</p>
        )}
        {errors.description?.type === "maxLength" && (
          <p className="text-danger">Description should be shorter.</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="expense-amount" className="form-label">
          Amount
        </label>
        <input
          {...register("amount", { required: true, min: 0.1 })}
          id="expenseamount"
          type="float z|number"
          className="form-control"
          placeholder="$1.99"
          onBlur={() => trigger("amount")}
        />
        {errors.amount?.type === "required" && (
          <p className="text-danger">You must enter a price.</p>
        )}
        {errors.amount?.type === "min" && (
          <p className="text-danger">You must enter a price.</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="expense-category" className="form-label">
          Category
        </label>
        <select
          id="expense-category"
          className="form-select"
          {...register("category", { required: true })}
          onBlur={() => trigger("category")}
        >
          {categories.map((category) => (
            <option key={category}>{category}</option>
          ))}
        </select>
        {errors.category?.type === "required" && (
          <p className="text-danger">You must pick a valid category</p>
        )}
      </div>
      <button type="submit" className="btn btn-primary" disabled={!isValid}>
        Submit
      </button>
    </form>
  );
};

export default ExpenseTrackerForm;
