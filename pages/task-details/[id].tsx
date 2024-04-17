import { useEffect, useState } from "react";
import { Task } from "../../types/types";
import { useRouter } from "next/router";

export default function ({ id }: { id: number }) {
  const [task, setTask] = useState<Task | null>(null);
  const router = useRouter();
  useEffect(() => {
    const tasks = localStorage.getItem("todos");
    if (tasks) {
      const parsedTasks = JSON.parse(tasks);
      const filterTasks = parsedTasks.find((task: Task) => task.id == id);

      if (filterTasks) {
        setTask(filterTasks);
      } else {
        router.push("/error-page");
      }
    } else {
      router.push("/error-page");
    }
  }, [id]);

  const handleBackClick = () => {
    router.back();
  };

  return (
    <>
      <div className="details">
        <button className="details-back" onClick={handleBackClick}>
          Turn back
        </button>
        <div className="details-content">
          <h6>{task?.title}</h6>
          <p>{task?.description}</p>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps({
  params,
}: {
  params: { id: number };
}): Promise<{ props: { id: number } }> {
  const { id } = params;
  return { props: { id } };
}
