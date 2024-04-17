import { FC, useState } from "react";

interface SearchTodoProps {
  setSearch: (value: string) => void;
}

const SearchTask: FC<SearchTodoProps> = ({ setSearch }) => {
  const [value, setValue] = useState("");

  const search = () => {
    setSearch(value);
    setValue("");
  };

  return (
    <div className="input">
      <input
        type="text"
        name="title"
        value={value}
        placeholder="Search task..."
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={search}>Search Task</button>
    </div>
  );
};
export default SearchTask;
