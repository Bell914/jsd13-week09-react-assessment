export default function Table({ members = [], isAdmin = false, onDelete }) {
  if (!members || members.length === 0) {
    return (
      <div className="w-full bg-white rounded-xl shadow-sm border border-slate-200 p-8 text-center text-slate-500">
        <p className="text-base font-medium">No members found.</p>
        {isAdmin && (
          <p className="text-sm text-slate-400 mt-1">
            Fill in the form above to add a new member.
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="w-full overflow-hidden bg-white rounded-xl shadow-sm border border-slate-200">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-100/80 border-b border-slate-200 text-slate-700 text-xs font-semibold uppercase tracking-wider">
              <th className="py-3.5 px-6">Name</th>
              <th className="py-3.5 px-6">Last Name</th>
              <th className="py-3.5 px-6">Position</th>
              {isAdmin && <th className="py-3.5 px-6 text-center">Action</th>}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm text-slate-700">
            {members.map((member) => (
              <tr
                key={member.id}
                className="hover:bg-slate-50/80 transition-colors"
              >
                <td className="py-4 px-6 font-medium text-slate-900">
                  {member.name}
                </td>
                <td className="py-4 px-6">{member.lastname}</td>
                <td className="py-4 px-6">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-50 text-amber-800 border border-amber-200/60">
                    {member.position}
                  </span>
                </td>
                {isAdmin && (
                  <td className="py-4 px-6 text-center">
                    <button
                      type="button"
                      onClick={() => onDelete && onDelete(member.id)}
                      className="cursor-pointer inline-flex items-center justify-center px-3 py-1.5 text-xs font-semibold text-rose-600 hover:text-white bg-rose-50 hover:bg-rose-600 border border-rose-200 hover:border-rose-600 rounded-lg transition-all duration-150 active:scale-95 shadow-xs"
                    >
                      Delete
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
