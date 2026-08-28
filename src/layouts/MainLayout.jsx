import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar />
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <Outlet />
      </main>
      <footer className="py-6 border-t border-slate-200 text-center text-xs text-slate-500 bg-white">
        &copy; {new Date().getFullYear()} Generation Thailand - React Assessment
      </footer>
    </div>
  );
}
