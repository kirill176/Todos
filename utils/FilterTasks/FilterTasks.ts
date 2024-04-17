import { Task } from "../../types/types";

export const FilterTasks = (tasks: Task[], filter: string) => {
  const filteredTasks: Task[] = tasks.filter((todo: Task) => {
    if (filter === "completed") {
      return todo.completed;
    } else if (filter === "not_completed") {
      return !todo.completed;
    } else {
      return true;
    }
  });

  return filteredTasks;
};
