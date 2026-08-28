import Table from "../Table";

export default function Display({
  sector,
  employees,
  formData,
  errorMessage,
  handleInputChange,
  handleCreateMember,
  handleDeleteMember,
  handleDeleteAll,
}) {
  return (
    <div className="space-y-8">
      {/* Admin Sector: Create Member Form */}
      {sector === "admin" && (
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 max-w-3xl mx-auto space-y-6">
          <div className="border-b border-slate-100 pb-4 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-900">Create User Here</h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Add a new member to the directory.
              </p>
            </div>
            {employees.length > 0 && (
              <button
                type="button"
                onClick={handleDeleteAll}
                className="cursor-pointer text-xs font-semibold text-rose-600 hover:text-rose-700 hover:underline px-2 py-1"
              >
                Delete All
              </button>
            )}
          </div>

          <form onSubmit={handleCreateMember} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-semibold text-slate-700 mb-1"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="e.g. John"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3.5 py-2 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
                />
              </div>

              <div>
                <label
                  htmlFor="lastname"
                  className="block text-xs font-semibold text-slate-700 mb-1"
                >
                  Last Name
                </label>
                <input
                  id="lastname"
                  name="lastname"
                  type="text"
                  placeholder="e.g. Doe"
                  value={formData.lastname}
                  onChange={handleInputChange}
                  className="w-full px-3.5 py-2 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
                />
              </div>

              <div>
                <label
                  htmlFor="position"
                  className="block text-xs font-semibold text-slate-700 mb-1"
                >
                  Position
                </label>
                <input
                  id="position"
                  name="position"
                  type="text"
                  placeholder="e.g. Developer"
                  value={formData.position}
                  onChange={handleInputChange}
                  className="w-full px-3.5 py-2 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
                />
              </div>
            </div>

            {errorMessage && (
              <p className="text-xs font-medium text-rose-600 bg-rose-50 p-2.5 rounded-lg border border-rose-200">
                {errorMessage}
              </p>
            )}

            <div className="flex justify-end pt-2">
              <button
                type="submit"
                className="cursor-pointer inline-flex items-center justify-center px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold rounded-lg shadow-sm transition active:scale-95"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Table Section (User / Admin) */}
      {(sector === "user" || sector === "admin") && (
        <div className="space-y-4">
          <div className="flex items-center justify-between px-1">
            <h3 className="text-base font-bold text-slate-800">
              Members Directory ({employees.length})
            </h3>
            <span className="text-xs font-medium text-slate-500">
              Mode: {sector === "admin" ? "Admin (Editable)" : "User (Read-only)"}
            </span>
          </div>
          <Table
            members={employees}
            isAdmin={sector === "admin"}
            onDelete={handleDeleteMember}
          />
        </div>
      )}

      {/* Default State Message */}
      {sector === "default" && (
        <div className="bg-white rounded-2xl p-8 sm:p-12 text-center border border-slate-200 shadow-sm max-w-xl mx-auto space-y-4">
          <div className="w-16 h-16 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
            👥
          </div>
          <h3 className="text-xl font-bold text-slate-800">
            Welcome to React Assessment
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            Please choose a sector above to interact with the directory:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-left text-xs">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
              <span className="font-bold text-slate-800 block mb-1">User Sector</span>
              View the list of members in read-only format.
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
              <span className="font-bold text-slate-800 block mb-1">Admin Sector</span>
              Add new members and delete existing member records.
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
