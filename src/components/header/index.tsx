import { NavLink } from "react-router";

const Header = () => {
  return (
    <ul className="flex gap-2">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/todo">To-Do List</NavLink>
      </li>
    </ul>
  );
};

export default Header;
