export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center pt-20 pb-16 px-4">
      {/* Title Section */}
      <div className="text-center space-y-2 mb-14">
        <h1 className="text-4xl font-extrabold text-black tracking-tight">
          Generation Thailand

        </h1>
        <h2 className="text-4xl font-extrabold text-black tracking-tight">
          React - Assessment
        </h2>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-16">
        <button
          type="button"
          className="cursor-pointer bg-white text-black font-bold text-sm px-6 py-3.5 rounded shadow-[0_2px_6px_rgba(0,0,0,0.15)] hover:shadow-[0_4px_10px_rgba(0,0,0,0.2)] active:scale-95 transition-all"
        >
          User Home Section
        </button>

        <button
          type="button"
          className="cursor-pointer bg-white text-black font-bold text-sm px-6 py-3.5 rounded shadow-[0_2px_6px_rgba(0,0,0,0.15)] hover:shadow-[0_4px_10px_rgba(0,0,0,0.2)] active:scale-95 transition-all"
        >
          Admin Home Section
        </button>
      </div>
    </div>
  );
}
