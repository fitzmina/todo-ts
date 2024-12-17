import {
  FaRegCheckSquare,
  FaEdit,
  FaTrash,
  FaRegSquare,
  FaPencilAlt,
} from "react-icons/fa";
import { Todo } from "../../model";
import { useEffect, useRef, useState } from "react";

type SingleTodoProps = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ todo, todos, setTodos }: SingleTodoProps) => {
  const [editTodo, setEditTodo] = useState<string>(todo.todo.trim());

  const refs = useRef<HTMLInputElement>(null);

  const handleDelete = (id: number) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };
  const handleCompleted = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed, edit: false }
          : todo
      )
    );
  };

  const handleEdit = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, edit: !todo.edit } : todo
      )
    );
  };

  const handleBlur = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, todo: editTodo.trim(), edit: false } : todo
      )
    );
  };

  const handleSubmit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, todo: editTodo.trim(), edit: false } : todo
      )
    );
  };

  useEffect(() => {
    refs.current?.focus();
  }, [todo.edit]);

  return (
    <form
      onSubmit={(e) => handleSubmit(e, todo.id)}
      className={`flex gap-2 items-center bg-sky-200 p-2 rounded select-none hover:scale-[1.009] hover:bg-sky-100 transition-all
        
        
        ${todo.completed ? "bg-yellow-50 line-through" : "bg-sky-200"}`}
    >
      {todo.completed === true ? (
        <FaRegCheckSquare
          size={25}
          className="cursor-pointer hover:opacity-75"
          onClick={() => handleCompleted(todo.id)}
        />
      ) : (
        <FaRegSquare
          size={25}
          className="cursor-pointer hover:opacity-75"
          onClick={() => handleCompleted(todo.id)}
        />
      )}
      {todo.edit ? (
        <input
          type="text"
          className="flex-1 ring-1 rounded
          ring-blue-500 outline-none focus:shadow
          "
          value={editTodo}
          onBlur={() => handleBlur(todo.id)}
          onChange={(e) => setEditTodo(e.target.value)}
          ref={refs}
        ></input>
      ) : (
        <span className="flex-1 overflow-hidden">{todo.todo}</span>
      )}

      {!todo.edit ? (
        <button disabled={todo.completed ? true : false}>
          <FaPencilAlt
            size={25}
            className={`${
              todo.completed
                ? "cursor-not-allowed"
                : "cursor-pointer hover:opacity-75"
            }`}
            onClick={() => handleEdit(todo.id)}
          />{" "}
        </button>
      ) : (
        <FaEdit
          size={25}
          className="cursor-pointer hover:opacity-75"
          onClick={() => handleBlur(todo.id)}
        />
      )}

      <FaTrash
        size={25}
        className="cursor-pointer hover:text-orange-400 active:scale-[0.97] "
        onClick={() => handleDelete(todo.id)}
      />
    </form>
  );
};

export default SingleTodo;
