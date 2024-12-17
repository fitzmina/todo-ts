import { useRef } from "react";
import { Todo } from "../../model";

import SingleTodo from "../single-todo";

type TodoListProps = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const TodoList = ({ todos, setTodos }: TodoListProps) => {
  const refs = useRef<number[]>([]);

  console.log(refs);

  return (
    <ul className="w-[97%] flex flex-col gap-2">
      {todos.map((todo: Todo) => (
        <SingleTodo
          key={todo.id}
          todo={todo}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </ul>
  );
};

export default TodoList;
