import { FaCirclePlus } from "react-icons/fa6";

interface inputProps {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const Input = ({ todo, setTodo, handleAdd }: inputProps) => {
  return (
    <form className="w-[98%] relative" onSubmit={(e) => handleAdd(e)}>
      <input
        type="input"
        name="taskname"
        autoFocus
        id="taskname"
        placeholder="Add Task"
        className="shadow appearance-none rounded-2xl py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-green-300 ring-1 focus:ring-green-500
        w-full h-[100%]
        "
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className={`absolute right-1 top-[50%] translate-y-[-70%]   rounded-full transition-all
        ${todo.trim() === "" ? "" : "active:scale-[0.97] active:shadow"}
        `}
        disabled={todo.trim() === "" ? true : false}
      >
        <FaCirclePlus
          size={30}
          className={`text-gray-600 
        
${
  todo.trim() === ""
    ? "cursor-not-allowed"
    : "cursor-pointer hover:text-gray-500 active:text-green-800"
}
        `}
        />
      </button>
    </form>
  );
};

export default Input;
