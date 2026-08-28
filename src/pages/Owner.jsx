export default function Owner() {
  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Owner Profile
        </h1>
        <p className="text-slate-600 text-sm">
          React Assessment - Junior Software Developer Program
        </p>
      </div>

      <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-200 space-y-6">
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div className="relative">
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-gradient-to-tr from-amber-400 to-amber-200 border-4 border-white shadow-md flex items-center justify-center text-4xl font-black text-slate-800">
              JS
            </div>
            <span className="absolute bottom-1 right-1 w-5 h-5 bg-emerald-500 border-2 border-white rounded-full"></span>
          </div>

          <div className="text-center sm:text-left space-y-1">
            <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-100 text-amber-900 mb-1">
              JSD Cohort
            </span>
            <h2 className="text-2xl font-bold text-slate-900">
              Developer Name - Group Number
            </h2>
            <p className="text-sm font-medium text-slate-600">
              Junior Fullstack Developer Student
            </p>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-6 space-y-3">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700">
            Short Biography
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            Hello! I am a passionate developer currently participating in the
            Junior Software Developer program at Generation Thailand. I enjoy
            building responsive web applications with modern frontend technologies
            such as React, JavaScript, and Tailwind CSS.
          </p>
        </div>

        <div className="border-t border-slate-100 pt-6">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700 mb-3">
            Key Skills & Tech Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              "React.js",
              "JavaScript (ES6+)",
              "HTML5 & CSS3",
              "Tailwind CSS",
              "Node.js",
              "Git & GitHub",
              "Vite",
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-slate-100 text-slate-800 text-xs font-medium rounded-lg border border-slate-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
