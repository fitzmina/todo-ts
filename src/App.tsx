import { Route, Routes } from "react-router";
// import Header from "./components/header";

// import Home from "./components/home";
import TodoMain from "./components/todo-main";

const App = () => {
  return (
    <div className="flex flex-col gap-2 items-center w-full max-w-[40rem] min-h-screen  p-1 mx-auto">
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<TodoMain />} />
        {/* <Route path="/todo" element={<TodoMain />} /> */}
      </Routes>
    </div>
  );
};

export default App;
