import { NavLink } from "react-router-dom";

const Sidebar: React.FC = () => (
  <aside className="w-64 bg-gray-800 text-gray-100 min-h-screen">
    <div className="px-4 py-5 text-lg font-semibold">LOGO</div>
    <nav className="mt-2">
      <ul>
        <li>
          <NavLink to="/" end className="block px-4 py-2 hover:bg-gray-700">
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" className="block px-4 py-2 hover:bg-gray-700">
            Products
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className="block px-4 py-2 hover:bg-gray-700">
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  </aside>
);

export { Sidebar };
