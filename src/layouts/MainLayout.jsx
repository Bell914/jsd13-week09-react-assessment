import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-[#e5e5e5] text-black">
      <Navbar />
      <main className="w-full">
        <Outlet />
      </main>
    </div>
  );
}
