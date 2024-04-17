import { FC, FormEvent, useState } from "react";

interface AddTodoProps {
  addTask: (value: string, description: string) => void;
  show: boolean;
  setShow: (show: boolean) => void;
}

const AddTask: FC<AddTodoProps> = ({ addTask, show, setShow }) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const addTodos = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title.length == 0 && description.length == 0) {
      setError(true);
    } else {
      setError(false);
      addTask(title, description);
      setTitle("");
      setDescription("");
      setShow(false);
    }
  };

  const close = () => {
    setError(false);
    setShow(false);
  };

  return (
    <form className={`addTask ${show ? "show" : ""}`} onSubmit={addTodos}>
      <button className="addTask-close" onClick={close}></button>
      <div className="addTask-title">
        <h5>Add a new task</h5>
      </div>
      <div className="addTask-input">
        <input
          type="text"
          name="title"
          value={title}
          className={error ? "error" : ""}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          name="Description"
          cols={30}
          rows={30}
          value={description}
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        {error ? <p>Fill in all the fields</p> : null}
        <button>Add Task</button>
      </div>
    </form>
  );
};

export default AddTask;
