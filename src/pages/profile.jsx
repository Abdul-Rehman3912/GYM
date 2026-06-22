import React from "react";
import { LogOut, MessageSquare, Settings, User } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore.js";
import { useNavigate } from "react-router-dom";

function profile() {
  const { logout, authUser } = useAuthStore();
  const navigate = useNavigate();

  const handleLogOut = async() => {
    const success = await logout();

    if(success){
      navigate("/login");
    }
  }
  return (
    <div>
      <button
        onClick={handleLogOut}
        className="bg-red-600 flex justify-center items-center text-white size-12 w-40 rounded-xl"
      >
        <LogOut className="size-5" />
        <span className="hidden sm:inline">Logout</span>
      </button>
    </div>
  );
}

export default profile;
