import React, { useState } from "react";
import { AiFillDelete, AiOutlineCheck, AiTwotoneEdit } from "react-icons/ai";

interface Props {
  id: number;
  todo: string;
  isDone: boolean;
  doneHandl: (e: number) => void;
  deleteHandl: (e: number) => void;
  editHandl: (e: number, r: string) => void;
}

const SingleTodo = ({ id, todo, isDone, doneHandl, deleteHandl, editHandl }: Props) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [todoEdit, setTodoEdit] = useState<string>(todo);

  return (
    <div className="flex justify-between px-5 py-1 mb-1 border-2 border-slate-400">
      {isEdit ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            editHandl(id, todoEdit);
            setIsEdit(!isEdit);
          }}
        >
          <input value={todoEdit} onChange={(e) => setTodoEdit(e.target.value)} autoFocus />
        </form>
      ) : (
        <div
          className="font-semibold break-all min-w-fit min-h-min-w-fit"
          onClick={() => {
            setIsEdit(!isEdit);
          }}
        >
          {isDone ? <s>{todo}</s> : <span>{todo}</span>}
        </div>
      )}
      <div className="flex my-auto">
        <AiOutlineCheck onClick={() => doneHandl(id)} className="mx-2 hover:cursor-pointer" />
        <AiTwotoneEdit
          onClick={() => {
            editHandl(id, todoEdit);
            setIsEdit(!isEdit);
          }}
          className="mx-2 hover:cursor-pointer"
        />
        <AiFillDelete onClick={() => deleteHandl(id)} className="mx-2 hover:cursor-pointer" />
      </div>
    </div>
  );
};

export default SingleTodo;
