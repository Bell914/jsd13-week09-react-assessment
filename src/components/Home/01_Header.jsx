export default function Header({ sector }) {
  const getSubTitle = () => {
    if (sector === "user") return "Home - User Section";
    if (sector === "admin") return "Home - Admin Section";
    return "React - Assessment";
  };

  return (
    <div className="text-center space-y-2 mb-12">
      <h1 className="text-4xl font-extrabold text-black tracking-tight">
        Generation Thailand
      </h1>
      <h2 className="text-4xl font-extrabold text-black tracking-tight">
        {getSubTitle()}
      </h2>
    </div>
  );
}
