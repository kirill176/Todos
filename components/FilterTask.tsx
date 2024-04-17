import { FC } from "react";

interface FilterTodoProps {
  setFilter: (filter: string) => void;
}

const FilterTask: FC<FilterTodoProps> = ({ setFilter }) => {
  return (
    <>
      <div className="filter">
        <p>Filter as: </p>
        <select name="filter" id="" onChange={(e) => setFilter(e.target.value)}>
          <option value="">All tasks</option>
          <option value="completed">Completed tasks</option>
          <option value="not_completed">Not completed tasks</option>
        </select>
      </div>
    </>
  );
};

export default FilterTask;
