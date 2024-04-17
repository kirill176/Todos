import { describe, expect, test } from "@jest/globals";
import { Task } from "../../types/types";
import { FilterTasks } from "./FilterTasks";

describe("FilterTodos", () => {
  const tasks: Task[] = [
    {
      id: 1,
      title: "Buy groceries",
      description: "Go to the store",
      completed: false,
    },
    {
      id: 2,
      title: "Walk the dog",
      description: "Take Fido for a walk",
      completed: true,
    },
    {
      id: 3,
      title: "Do homework",
      description: "Finish math assignment",
      completed: false,
    },
  ];

  test("should return all todos when filter is not specified", () => {
    const filter = "";
    const result = FilterTasks(tasks, filter);
    expect(result).toEqual(tasks);
  });

  test("should return completed todos when filter is 'completed'", () => {
    const filter = "completed";
    const result = FilterTasks(tasks, filter);
    expect(result).toEqual([
      {
        id: 2,
        title: "Walk the dog",
        description: "Take Fido for a walk",
        completed: true,
      },
    ]);
  });

  test("should return not completed todos when filter is not_completed", () => {
    const filter = "not_completed";
    const result = FilterTasks(tasks, filter);
    expect(result).toEqual([
      {
        id: 1,
        title: "Buy groceries",
        description: "Go to the store",
        completed: false,
      },
      {
        id: 3,
        title: "Do homework",
        description: "Finish math assignment",
        completed: false,
      },
    ]);
  });

  test("should return empty array when filter is unknown", () => {
    const filter = "unknown";
    const result = FilterTasks(tasks, filter);
    expect(result).toEqual([
      {
        id: 1,
        title: "Buy groceries",
        description: "Go to the store",
        completed: false,
      },
      {
        id: 2,
        title: "Walk the dog",
        description: "Take Fido for a walk",
        completed: true,
      },
      {
        id: 3,
        title: "Do homework",
        description: "Finish math assignment",
        completed: false,
      },
    ]);
  });
});
