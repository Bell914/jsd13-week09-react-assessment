import { useState, useEffect } from "react";
import Header from "../components/Home/01_Header";
import NavButtons from "../components/Home/02_NavButtons";
import Display from "../components/Home/03_Display";

const API_URL = "https://67eca027aa794fb3222e43e2.mockapi.io/members";

export default function Home() {
  const [sector, setSector] = useState("default"); // 'default' | 'user' | 'admin'
  const [members, setMembers] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    position: "",
  });
  const fetchMembers = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error("Failed to fetch members");
      }
      const data = await response.json();
      setMembers(data);
    } catch (error) {
      console.error("Error fetching members:", error);
    }
  };

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

  return (
    <div className="flex flex-col items-center justify-center pt-16 pb-20 px-4 max-w-5xl mx-auto">
      {/* 01_Header Component */}
      <Header sector={sector} />

      {/* 02_NavButtons Component */}
      <NavButtons sector={sector} setSector={setSector} />

      {/* 03_Display Component */}
      <Display
        sector={sector}
        members={members}
        formData={formData}
        handleInputChange={handleInputChange}
        handleSave={handleSave}
        handleDelete={handleDelete}
      />
    </div>
  );
}
