export default function Header({ sector }) {
  const getSectorTitle = () => {
    switch (sector) {
      case "admin":
        return "Home - Admin Sector";
      case "user":
        return "Home - User Sector";
      default:
        return "React - Assessment";
    }
  };

  return (
    <div className="text-center space-y-3">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
        Generation Thailand
      </h1>
      <h2 className="text-xl sm:text-2xl font-bold text-amber-600">
        {getSectorTitle()}
      </h2>
      <p className="text-slate-600 text-sm max-w-md mx-auto">
        Manage and view member records across different sector views.
      </p>
    </div>
  );
}
