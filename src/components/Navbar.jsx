import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full bg-[#e5e5e5] border-b border-neutral-600 px-12 py-5 flex justify-end items-center gap-8">
      <Link to="/" className="text-black font-bold text-base hover:underline">
        Home
      </Link>
      <Link to="/owner" className="text-black font-bold text-base hover:underline">
        Owner
      </Link>
    </nav>
  );
}
