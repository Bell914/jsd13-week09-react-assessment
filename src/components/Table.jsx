export default function Table({ members = [], isAdmin = false, onDelete }) {
  return (
    <div className="w-full max-w-4xl mx-auto mt-8">
      <div className="text-xs text-neutral-500 mb-1 text-left">Table 1</div>
      <table className="w-full border-collapse border border-neutral-300 bg-white text-sm">
        <thead>
          <tr className="bg-neutral-100/90 text-black">
            <th className="border border-neutral-300 px-6 py-3 font-bold text-center">
              Name
            </th>
            <th className="border border-neutral-300 px-6 py-3 font-bold text-center">
              Last Name
            </th>
            <th className="border border-neutral-300 px-6 py-3 font-bold text-center">
              Position
            </th>
            {isAdmin && (
              <th className="border border-neutral-300 px-6 py-3 font-bold text-center">
                Action
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {members.length > 0 ? (
            members.map((member) => (
              <tr key={member.id} className="text-center hover:bg-neutral-50">
                <td className="border border-neutral-300 px-6 py-3 text-neutral-800">
                  {member.name}
                </td>
                <td className="border border-neutral-300 px-6 py-3 text-neutral-800">
                  {member.lastname}
                </td>
                <td className="border border-neutral-300 px-6 py-3 text-neutral-800">
                  {member.position}
                </td>
                {isAdmin && (
                  <td className="border border-neutral-300 px-6 py-3">
                    <button
                      type="button"
                      onClick={() => onDelete && onDelete(member.id)}
                      className="cursor-pointer text-red-600 font-bold hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                )}
              </tr>
            ))
          ) : (
            // Render empty rows if no members yet (matching wireframe appearance)
            <>
              <tr className="text-center h-12">
                <td className="border border-neutral-300 px-6 py-3 text-neutral-400"></td>
                <td className="border border-neutral-300 px-6 py-3 text-neutral-400"></td>
                <td className="border border-neutral-300 px-6 py-3 text-neutral-400"></td>
                {isAdmin && (
                  <td className="border border-neutral-300 px-6 py-3">
                    <span className="text-red-500 font-bold">Delete</span>
                  </td>
                )}
              </tr>
              <tr className="text-center h-12">
                <td className="border border-neutral-300 px-6 py-3 text-neutral-400"></td>
                <td className="border border-neutral-300 px-6 py-3 text-neutral-400"></td>
                <td className="border border-neutral-300 px-6 py-3 text-neutral-400"></td>
                {isAdmin && (
                  <td className="border border-neutral-300 px-6 py-3">
                    <span className="text-red-500 font-bold">Delete</span>
                  </td>
                )}
              </tr>
            </>
          )}
        </tbody>
      </table>
    </div>
  );
}
