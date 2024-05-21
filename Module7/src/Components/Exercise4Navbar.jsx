import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { MyThemeContext } from "../context/ThemeContext";

export default function Exercise4NavBar() {
  const { theme } = useContext(MyThemeContext);

  return (
    <nav
      className="NavBar"
      style={{ backgroundColor: theme.background, color: theme.foreground }}
    >
      <ul className="menu">
        <li>
          <NavLink to="/Exercise4Homepage">Home</NavLink>
        </li>
        <li>
          <NavLink to="/Exercise4login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/Exercise4Bitcoin">BitcoinRate</NavLink>
        </li>
      </ul>
    </nav>
  );
}
