import { useState, useEffect } from "react";
import Table from "../components/Table";

const API_URL = "https://67eca027aa794fb3222e43e2.mockapi.io/members";

export default function Home() {
  const [sector, setSector] = useState("default"); // 'default' | 'user' | 'admin'
  const [members, setMembers] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    position: "",
  });
  const [loading, setLoading] = useState(false);

  // 1. GET: Fetch all members from API
  const fetchMembers = async () => {
    try {
      setLoading(true);
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error("Failed to fetch members");
      }
      const data = await response.json();
      setMembers(data);
    } catch (error) {
      console.error("Error fetching members:", error);
    } finally {
      setLoading(false);
    }
  };

  // Run fetch on initial component mount
  useEffect(() => {
    fetchMembers();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 2. POST: Create a new member via API
  const handleSave = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.lastname.trim() || !formData.position.trim()) {
      return;
    }

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          lastname: formData.lastname.trim(),
          position: formData.position.trim(),
        }),
      });

      if (response.ok) {
        const createdMember = await response.json();
        setMembers((prev) => [...prev, createdMember]);
        setFormData({ name: "", lastname: "", position: "" });
      }
    } catch (error) {
      console.error("Error saving member:", error);
    }
  };

  // 3. DELETE: Remove a member via API
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setMembers((prev) => prev.filter((m) => m.id !== id));
      }
    } catch (error) {
      console.error("Error deleting member:", error);
    }
  };

  // Determine dynamic subtitle based on current Sector
  const getSubTitle = () => {
    if (sector === "user") return "Home - User Section";
    if (sector === "admin") return "Home - Admin Section";
    return "React - Assessment";
  };

  return (
    <div className="flex flex-col items-center justify-center pt-16 pb-20 px-4 max-w-5xl mx-auto">
      {/* Header Section */}
      <div className="text-center space-y-2 mb-12">
        <h1 className="text-4xl font-extrabold text-black tracking-tight">
          Generation Thailand
        </h1>
        <h2 className="text-4xl font-extrabold text-black tracking-tight">
          {getSubTitle()}
        </h2>
      </div>

      {/* Sector Switcher Buttons */}
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

      {/* Admin Sector: Create User Form */}
      {sector === "admin" && (
        <div className="w-full max-w-4xl mb-12">
          <h3 className="text-xl font-bold text-black mb-4 text-left">
            Create User Here
          </h3>
          <form onSubmit={handleSave} className="flex flex-wrap sm:flex-nowrap items-center gap-4">
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

      {/* Table Section (User / Admin) */}
      {(sector === "user" || sector === "admin") && (
        <Table
          members={members}
          isAdmin={sector === "admin"}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
}
