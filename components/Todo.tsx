import { DragEvent, FC, useState } from "react";
import { Task } from "../types/types";
import { useRouter } from "next/router";

interface TodoItemProps {
  task: Task;
  removeTask: (id: number) => void;
  toggleCompleted: (id: number) => void;
  dropHandler: (e: DragEvent<HTMLDivElement>, index: number) => void;
  setCurrentTask: (currentTask: Task) => void;
  index: number;
}

const Todo: FC<TodoItemProps> = ({
  task,
  removeTask,
  toggleCompleted,
  dropHandler,
  setCurrentTask,
  index,
}) => {
  const router = useRouter();

  const goToTodoDetails = () => {
    router.push(`/task-details/${task.id}`);
  };
  function dragStartHandler(e: DragEvent<HTMLDivElement>, task: Task) {
    setCurrentTask(task);
  }

  return (
    <div
      className="task"
      draggable={true}
      onDragStart={(e) => {
        dragStartHandler(e, task);
      }}
      onDragOver={(e) => {
        e.preventDefault();
      }}
      onDrop={(e) => {
        dropHandler(e, index);
      }}
    >
      <div className="task-text">
        <p> {task.title}</p>
      </div>

      <div className="task-items">
        <div className="task-status">
          <p className="status">Status:</p>
          <input
            name="checkbox"
            type="checkbox"
            checked={task.completed}
            onChange={(e) => toggleCompleted(task.id)}
          />
          <p>{task.completed ? "Completed" : "Not completed"}</p>
        </div>
        <div className="task-buttons">
          <button className="task-details" onClick={goToTodoDetails}>
            Details
          </button>
          <button className="task-remove" onClick={() => removeTask(task.id)}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
