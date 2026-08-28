export default function NavButtons({ sector, setSector }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      <button
        type="button"
        onClick={() => setSector("user")}
        className={`cursor-pointer px-6 py-3 rounded-xl font-bold text-sm transition-all duration-200 shadow-sm active:scale-95 ${
          sector === "user"
            ? "bg-slate-900 text-white ring-2 ring-slate-900 ring-offset-2"
            : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-300"
        }`}
      >
        User Home Sector
      </button>

      <button
        type="button"
        onClick={() => setSector("admin")}
        className={`cursor-pointer px-6 py-3 rounded-xl font-bold text-sm transition-all duration-200 shadow-sm active:scale-95 ${
          sector === "admin"
            ? "bg-amber-500 text-slate-950 ring-2 ring-amber-500 ring-offset-2 font-extrabold"
            : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-300"
        }`}
      >
        Admin Home Sector
      </button>

      {sector !== "default" && (
        <button
          type="button"
          onClick={() => setSector("default")}
          className="cursor-pointer text-xs font-semibold text-slate-500 hover:text-slate-800 underline px-2 py-1"
        >
          Reset View
        </button>
      )}
    </div>
  );
}
