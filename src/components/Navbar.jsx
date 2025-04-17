import { NavLink, useLocation } from "react-router-dom";
import { logo } from "../assets/images";

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/"; // Check if we're on the Home page

  return (
    <header className="header flex items-center justify-between">
      <NavLink to="/">
        <img src={logo} alt="logo" className="w-8 h-8 object-contain" />
      </NavLink>
      <nav className="flex items-center text-lg gap-7 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-600" : isHomePage ? "text-white" : "text-black"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-blue-600" : isHomePage ? "text-white" : "text-black"
          }
        >
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
