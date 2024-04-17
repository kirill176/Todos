import { Task } from "../../types/types";

export const SearchTasks = (tasks: Task[], searchTerm: string) => {
  const SearchTerm = searchTerm.toLowerCase().trim();
  const filteredTasks: Task[] = tasks.filter((tasks: Task) => {
    return (
      tasks.title.toLowerCase().includes(SearchTerm) ||
      tasks.description.toLowerCase().includes(SearchTerm)
    );
  });

  return filteredTasks;
};
