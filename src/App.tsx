import React, { useState } from "react";
import InputForm from "./components/InputForm";
import TodoList from "./components/TodoList";
import { Todos } from "./models";

const App: React.FC = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState<Todos[]>([]);

  const addHandl = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo.trim()) {
      setTodos([{ id: Date.now(), todo, isDone: false }, ...todos]);
      setTodo("");
    }
  };

  const doneHandl = (id: number) => {
    setTodos(todos.map((e) => (e.id === id ? { ...e, isDone: !e.isDone } : e)));
  };

  const deleteHandl = (id: number) => {
    setTodos(todos.filter((e) => e.id !== id));
  };

  const editHandl = (id: number, todo: string) => {
    setTodos(todos.map((e) => (e.id === id ? { ...e, todo } : e)));
  };
  return (
    <div className="m-16 flex flex-col">
      <h1 className="my-7 text-center font-semibold text-2xl">Todolist React Typescript</h1>
      <InputForm todo={todo} setTodo={setTodo} addHandl={addHandl} />
      <TodoList todos={todos} doneHandl={doneHandl} deleteHandl={deleteHandl} editHandl={editHandl} />
    </div>
  );
};

export default App;
