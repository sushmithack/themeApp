import { Link } from "react-router-dom";
import { useTheme } from "../theme-context";

function NavBar() {
  const { theme, toggleTheme } = useTheme();
  console.log("theme", theme);
  return (
    <div className="nav-bar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/blog">Blog</Link>
      <div className="mode-switch">
        <label>
          <input
            onChange={toggleTheme}
            type="checkbox"
            checked={theme === "dark"}
          />
          <span className="slider"></span>
        </label>
      </div>
    </div>
  );
}

export default NavBar;
