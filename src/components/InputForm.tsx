import React from "react";

interface Props {
  todo: string;
  setTodo: (e: string) => void;
  addHandl: (e: React.FormEvent) => void;
}

const InputForm = ({ todo, setTodo, addHandl }: Props) => {
  return (
    <div>
      <form className="flex justify-center" onSubmit={addHandl}>
        <div className="">
          <input value={todo} onChange={(e) => setTodo(e.target.value)} className="border-2 border-slate-400 text-center" type="text" autoFocus />
        </div>
        <div className="">
          <button className="border-2 border-slate-400 w-16">Add</button>
        </div>
      </form>
    </div>
  );
};

export default InputForm;
