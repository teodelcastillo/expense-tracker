import React from "react";
import categories from "../../cateogories";

interface Props {
  onSelected: (category: string) => void;
}

const ExpenseFilter = ({ onSelected }: Props) => {
  return (
    <select
      className="form-select"
      onChange={(event) => onSelected(event.target.value)}
    >
      <option value="">All categories</option>
      {categories.map((category) => (
        <option key={category}>{category}</option>
      ))}
    </select>
  );
};

export default ExpenseFilter;
