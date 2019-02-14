import axios from "axios";

const fetchTodos = async () => {
  const res = await axios.get("/api/todos", {
    headers: { accept: "application/json" }
  });
  const json = await res.data;
  return { status: res.status, todos: json.todos };
};

const createTodo = async description => {
<<<<<<< HEAD
  const res = await fetch("/api/todos", {
    method: "POST",
    headers: { accept: "application/json", "content-type": "application/json" },
    body: JSON.stringify({
      description: description,
      critical: false,
      done: false
    })
  });
  const json = await res.json();
=======
  const config = {
    headers: { accept: "application/json", "content-type": "application/json" }
  };
  const data = {
    description: description,
    critical: false,
    done: false
  };
  const res = await axios.post("/api/todos", data, config);
  const json = await res.data;
>>>>>>> 5da61c1... Chapter 8 complete
  return { status: res.status, todos: json.todos };
};

const deleteTodo = async todoId => {
<<<<<<< HEAD
  const res = await fetch(`/api/todos/${todoId}`, {
    method: "DELETE",
    headers: { accept: "application/json", "content-type": "application/json" }
  });
  const json = await res.json();
=======
  const config = {
    headers: { accept: "application/json", "content-type": "application/json" }
  };
  const res = await axios.delete(`/api/todos/${todoId}`, config);
  const json = await res.data;
>>>>>>> 5da61c1... Chapter 8 complete
  return { status: res.status, todos: json.todos };
};

export { fetchTodos, createTodo, deleteTodo };
