export default function Owner() {
  return (
    <div className="flex flex-col items-center justify-center pt-12 pb-20 px-4 max-w-4xl mx-auto text-center">
      {/* Name / Group Header */}
      <h1 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight mb-8">
        13 Ittikorn Tipson(บีเอ็ม) - JSD13
      </h1>

      {/* Picture Wireframe Box with 'X' and 'picture' label */}
      <div className="relative w-80 h-56 border-2 border-neutral-700 flex flex-col items-center justify-start pt-6 mb-8 bg-[#e5e5e5]">
        {/* Diagonal X Lines */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="0"
            y1="0"
            x2="100%"
            y2="100%"
            stroke="#404040"
            strokeWidth="1.5"
          />
          <line
            x1="100%"
            y1="0"
            x2="0"
            y2="100%"
            stroke="#404040"
            strokeWidth="1.5"
          />
        </svg>

        {/* 'picture' Label */}
        <span className="relative z-10 text-black text-sm font-bold">
          picture
        </span>
      </div>

      {/* Biography Section */}
      <div className="max-w-2xl space-y-3">
        <h2 className="text-sm font-bold text-black">
          Short Biography:
        </h2>
        <p className="text-xs text-black leading-relaxed font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
}
