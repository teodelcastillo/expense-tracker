import React from "react";
import { useForm, FieldValues, FormState } from "react-hook-form";
import categories from "../../cateogories";

interface Props {
  onSubmit: (data: FieldValues) => void;
}

const ExpenseTrackerForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const validation =
    errors.expensedescription?.type === "required" ||
    errors.expenseamount?.type === "required" ||
    errors.expensedescription?.type === "maxLength" ||
    errors.expenseamount?.type === "min"
      ? true
      : false;
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="expense-description" className="form-label">
          Expense description
        </label>
        <input
          {...register("expensedescription", {
            required: true,
            maxLength: 25,
          })}
          id="expense-description"
          type="text"
          className="form-control"
          placeholder="Apple"
        />
        {errors.expensedescription?.type === "required" && (
          <p className="text-danger">You must enter a description.</p>
        )}
        {errors.expensedescription?.type === "maxLength" && (
          <p className="text-danger">Description should be shorter.</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="expense-amount" className="form-label">
          Amount
        </label>
        <input
          {...register("expenseamount", { required: true, min: 0.1 })}
          id="expenseamount"
          type="number"
          className="form-control"
          placeholder="$1.99"
        />
        {errors.expenseamount?.type === "required" && (
          <p className="text-danger">You must enter a price.</p>
        )}
        {errors.expenseamount?.type === "min" && (
          <p className="text-danger">You must enter a price.</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="expense-category" className="form-label">
          Category
        </label>
        <select
          id="expense-category"
          className="form-control"
          {...register("category")}
        >
          {categories.map((category) => (
            <option key={category}>{category}</option>
          ))}
        </select>
      </div>
      <button type="submit" className="btn btn-primary" disabled={validation}>
        Submit
      </button>
    </form>
  );
};

export default ExpenseTrackerForm;
