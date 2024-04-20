import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header fixed top-0 right-0 w-full z-50 bg-main-header text-light-gray">
      <div className="flex justify-between items-center container pt-6 pb-6">
        <Link to="/" className="text-white font-bold">
          NkhiliCSS
        </Link>
        <ul className="flex gap-5 capitalize">
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => (isActive ? { color: "white" } : null)}
              className="hover-text-white"
            >
              home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/docs/introduction"
              style={({ isActive }) => (isActive ? { color: "white" } : null)}
              className="hover-text-white"
            >
              docs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="https://github.com/Mustapha-Nkhili/nkhilicss"
              target="_blanck"
              style={({ isActive }) => (isActive ? { color: "white" } : null)}
              className="hover-text-white"
            >
              github
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
