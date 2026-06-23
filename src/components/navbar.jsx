import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, MessageCircle, Bell, User, LogOut } from "lucide-react";
import { MessageSquare, Settings } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore.js";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { logout, authUser } = useAuthStore();

  const userRole = authUser?.role;

  const handleLogout = async() => {
    const success = await logout();
    if(success){
      navigate("/");
    }
  }

  const navItems = {
    user: [
      { name: "Home", path: "/" },
    ],
    admin: [
      { name: "Home", path: "/" },
      { name: "Add Product", path: "/addproductitems" },
      // { name: "All Users", path: "/users" },
    ],
  };

  const getNavItems = () => {
    if (userRole === "Admin") {
      return navItems.admin;
    }
    return navItems.user;
  };

  const currentNavItems = getNavItems();

  return (
    <div className="fixed top-0 w-full border-b bg-white z-50">
      <div className="flex items-center justify-between px-4 py-3">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <div className="bg-black text-white px-2 py-1 rounded font-bold">
            A
          </div>
          <h1 className="font-semibold text-lg">OnlineStore</h1>
        </div>

        <div className="hidden md:block w-1/3">
          <input
            type="text"
            placeholder="Search Products..."
            className="w-full border rounded-full px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="hidden md:flex items-center gap-6">
          {currentNavItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm ${item.name === "Home" ? "font-medium" : "text-gray-500"} hover:text-black transition-colors`}
            >
              {item.name}
            </Link>
          ))}

          <MessageCircle
            size={18}
            className="cursor-pointer hover:text-blue-500 transition-colors"
          />
          <Bell
            size={18}
            className="cursor-pointer hover:text-blue-500 transition-colors"
          />

          {authUser && (
            <button
              onClick={handleLogout}
              className="bg-red-600 flex justify-center items-center text-white size-12 w-40 rounded-xl"
            >
              <LogOut className="size-5" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          )}
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-4 pb-4 space-y-4 border-t">
          <div className="pt-2">
            <input
              type="text"
              placeholder="Search auctions..."
              className="w-full border rounded-full px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col gap-3">
            {currentNavItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm ${item.name === "Home" ? "font-medium" : "text-gray-500"}`}
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4 pt-2">
            <MessageCircle size={18} className="cursor-pointer" />
            <Bell size={18} className="cursor-pointer" />

             {authUser && (
            <button
              onClick={handleLogout}
              className="bg-red-600 flex justify-center items-center text-white size-12 w-40 rounded-xl"
            >
              <LogOut className="size-5" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          )}
          </div>
        </div>
      )}
    </div>
  );
}