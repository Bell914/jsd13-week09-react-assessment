import { NavLink } from "react-router-dom";

export default function Navbar() {
  const navLinkClass = ({ isActive }) =>
    `px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
      isActive
        ? "bg-amber-400 text-slate-900 shadow-sm font-semibold"
        : "text-slate-200 hover:text-white hover:bg-slate-800"
    }`;

  return (
    <nav className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50 shadow-md">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-amber-400 flex items-center justify-center font-bold text-slate-900 text-lg shadow-sm">
              G
            </div>
            <span className="text-white font-bold text-lg tracking-tight">
              Generation Thailand
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <NavLink to="/" className={navLinkClass} end>
              Home
            </NavLink>
            <NavLink to="/owner" className={navLinkClass}>
              Owner
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
