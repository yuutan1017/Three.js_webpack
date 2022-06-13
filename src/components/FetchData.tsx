import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

type task = {
  id: number;
  title: string;
  created_at?: string;
  updated_at?: string;
};

export const FetchData = () => {
  const [tasks, setTasks] = useState<task[]>([]);
  const [selectedTask, setSelectedTask] = useState<any>([]);
  const [id, setId] = useState("");

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/tasks/", {
        headers: {
          Authorization: "Token 467b4263e8c64a1a5a8883274b38d5a2bb45a4c2",
        },
      })
      .then((res) => {
        setTasks(res.data);
      });
  }, []);

  const getTask = () => {
    axios
      .get(`http://127.0.0.1:8000/api/tasks/${id}/`, {
        headers: {
          Authorization: "Token 467b4263e8c64a1a5a8883274b38d5a2bb45a4c2",
        },
      })
      .then((res) => {
        setSelectedTask(res.data);
        console.log(res.data);
      });
  };

  return (
    <div>
      {tasks.map((task) => (
        <h2 key={task.id}>
          {task.id} : {task.title}
        </h2>
      ))}
      <input
        type="text"
        value={id}
        onChange={(e) => {
          setId(e.target.value);
        }}
      />
      <br />
      <button type="button" onClick={() => getTask()}>
        Get Task
      </button>
      <h2>
        {selectedTask.id}
        {selectedTask.title}
      </h2>
      <Link to="/">Home</Link>
    </div>
  );
};
