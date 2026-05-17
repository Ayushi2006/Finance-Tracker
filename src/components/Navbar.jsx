import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-slate-800 px-8 py-4 flex justify-between items-center shadow-lg">
      <h1 className="text-2xl font-bold">Finance Tracker</h1>

      <div className="flex gap-6 text-lg">
        <Link to="/" className="hover:text-blue-400 transition">
          Home
        </Link>

        <Link to="/about" className="hover:text-blue-400 transition">
          About
        </Link>

        <Link to="/profile" className="hover:text-blue-400 transition">
          Profile
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
