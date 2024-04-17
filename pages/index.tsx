import { useEffect, useState } from "react";
import AddTask from "../components/AddTask";
import { Task } from "../types/types";
import Todo from "../components/Todo";
import FilterTask from "../components/FilterTask";
import { FilterTasks } from "../utils/FilterTasks/FilterTasks";
import SearchTodo from "../components/SearchTask";
import { SearchTasks } from "../utils/SearchTasks/SearchTasks";
import { DragEvent } from "react";

const Index = () => {
  const [task, setTask] = useState<Task[]>([]);
  const [filter, setFilter] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const [formShow, setFormShow] = useState<boolean>(false);
  const [currentTask, setCurrentTask] = useState<Task>();

  useEffect(() => {
    const todos = localStorage.getItem("todos");
    if (todos) {
      setTask(JSON.parse(todos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(task));
  }, [task]);

  const addTask = (title: string, description: string) => {
    const taskItem: Task = {
      id: Date.now(),
      title: title,
      description: description,
      completed: false,
    };
    setTask([...task, taskItem]);
  };

  const toggleCompleted = (id: number) => {
    setTask((prevTask) => {
      return prevTask.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        } else {
          return item;
        }
      });
    });
  };

  const removeTask = (id: number) => {
    setTask(task.filter((item) => item.id !== id));
  };

  const filteredTasks: Task[] = FilterTasks(task, filter);
  const searchTasks: Task[] =
    search.length > 0 ? SearchTasks(filteredTasks, search) : filteredTasks;

  function dropHandler(e: DragEvent<HTMLDivElement>, index: number) {
    e.preventDefault();
    const newTask = [...task];
    if (currentTask) {
      if (task.indexOf(currentTask) !== index) {
        newTask.splice(task.indexOf(currentTask), 1);
        newTask.splice(index + 1, 0, currentTask);
        setTask(newTask);
      }
    }
  }

  return (
    <>
      <AddTask addTask={addTask} show={formShow} setShow={setFormShow} />
      <div className={`wrapper ${formShow ? "blur" : ""}`}>
        <h1>Todo List</h1>
        <div className="container">
          <SearchTodo setSearch={setSearch} />
          <button className="button" onClick={() => setFormShow(true)}>
            Add new Task
          </button>
        </div>
        <FilterTask setFilter={setFilter} />
        {search.length > 0 ? (
          <div className="cancel">
            <button onClick={() => setSearch("")}>
              Cancel search: {search}
            </button>
          </div>
        ) : null}

        {searchTasks.map((item, index) => (
          <Todo
            key={item.id}
            task={item}
            removeTask={removeTask}
            toggleCompleted={toggleCompleted}
            dropHandler={dropHandler}
            setCurrentTask={setCurrentTask}
            index={index}
          />
        ))}
      </div>
    </>
  );
};

export default Index;
