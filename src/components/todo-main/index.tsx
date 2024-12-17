import React, { useEffect, useState } from "react";
import Input from "../Input";
import { Todo } from "../../model";
import TodoList from "../todo-list";

const TodoMain = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>(
    JSON.parse(localStorage.getItem("todos")) || '""'
  );

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo.trim() !== "") {
      setTodos([
        ...todos,
        { id: Date.now(), todo: todo, completed: false, edit: false },
      ]);
      setTodo("");
    }
    return setTodo("");
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="flex items-center w-full max-w-[40rem] min-h-screen flex-col p-1 mx-auto">
      <h1 className="text-center font-semibold text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-3xl my-5 text-neutral-200">
        To-Do List
      </h1>
      <Input todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default TodoMain;
