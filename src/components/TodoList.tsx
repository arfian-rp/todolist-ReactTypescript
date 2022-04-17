import React from "react";
import { Todos } from "../models";
import SingleTodo from "./SingleTodo";

interface Props {
  todos: Todos[];
  doneHandl: (e: number) => void;
  deleteHandl: (e: number) => void;
  editHandl: (e: number, r: string) => void;
}

const TodoList = ({ todos, doneHandl, deleteHandl, editHandl }: Props) => {
  console.info(todos);
  return (
    <div className="border-2 border-slate-400 w-96 mx-auto mt-5">
      <div className="font-semibold text-center flex justify-between w-[20%] mx-auto">
        <span>total:</span>
        <span>{todos.length}</span>
      </div>
      {todos.length ? todos.map((e) => <SingleTodo key={e.id} id={e.id} todo={e.todo} isDone={e.isDone} doneHandl={doneHandl} deleteHandl={deleteHandl} editHandl={editHandl} />) : <span className="flex justify-center">Empty</span>}
    </div>
  );
};

export default TodoList;
