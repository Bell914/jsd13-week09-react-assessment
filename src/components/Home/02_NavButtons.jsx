export default function NavButtons({ sector, setSector }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-14 mb-16">
      <button
        type="button"
        onClick={() => setSector("user")}
        className={`cursor-pointer bg-white text-black font-bold text-sm px-6 py-3.5 rounded shadow-[0_2px_6px_rgba(0,0,0,0.15)] hover:shadow-[0_4px_10px_rgba(0,0,0,0.2)] active:scale-95 transition-all ${
          sector === "user" ? "ring-2 ring-black" : ""
        }`}
      >
        User Home Section
      </button>

      <button
        type="button"
        onClick={() => setSector("admin")}
        className={`cursor-pointer bg-white text-black font-bold text-sm px-6 py-3.5 rounded shadow-[0_2px_6px_rgba(0,0,0,0.15)] hover:shadow-[0_4px_10px_rgba(0,0,0,0.2)] active:scale-95 transition-all ${
          sector === "admin" ? "ring-2 ring-black" : ""
        }`}
      >
        Admin Home Section
      </button>
    </div>
  );
}
