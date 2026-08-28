import Table from "../Table";

export default function Display({
  sector,
  members,
  formData,
  handleInputChange,
  handleSave,
  handleDelete,
}) {
  if (sector !== "user" && sector !== "admin") {
    return null;
  }

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
      {/* Admin Sector: Create User Form */}
      {sector === "admin" && (
        <div className="w-full mb-12">
          <h3 className="text-xl font-bold text-black mb-4 text-left">
            Create User Here
          </h3>
          <form
            onSubmit={handleSave}
            className="flex flex-wrap sm:flex-nowrap items-center gap-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              className="flex-1 min-w-[140px] bg-white text-black text-sm px-4 py-2.5 rounded shadow-[0_1px_4px_rgba(0,0,0,0.1)] border border-neutral-200 focus:outline-none placeholder-neutral-400"
            />
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              value={formData.lastname}
              onChange={handleInputChange}
              className="flex-1 min-w-[140px] bg-white text-black text-sm px-4 py-2.5 rounded shadow-[0_1px_4px_rgba(0,0,0,0.1)] border border-neutral-200 focus:outline-none placeholder-neutral-400"
            />
            <input
              type="text"
              name="position"
              placeholder="Position"
              value={formData.position}
              onChange={handleInputChange}
              className="flex-1 min-w-[140px] bg-white text-black text-sm px-4 py-2.5 rounded shadow-[0_1px_4px_rgba(0,0,0,0.1)] border border-neutral-200 focus:outline-none placeholder-neutral-400"
            />
            <button
              type="submit"
              className="cursor-pointer bg-[#5c67f5] hover:bg-[#4b55e0] text-white font-semibold text-sm px-7 py-2.5 rounded shadow active:scale-95 transition"
            >
              Save
            </button>
          </form>
        </div>
      )}

      {/* Table Section */}
      <Table
        members={members}
        isAdmin={sector === "admin"}
        onDelete={handleDelete}
      />
    </div>
  );
}
