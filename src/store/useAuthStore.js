import { create } from "zustand";
import { axiosInstance } from "../libs/axios.js";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const useAuthStore = create((set, get) => ({
  
    authUser: null,
    isSigningIng: false,
    isLogingIng: false,

    isCheckingAuth: true,

    checkAuth: async () => {
    try {
      const res = await axiosInstance.get("/auth/check");

      set({ authUser: res.data });
    } catch (error) {
      console.log("Error in checkAuth:", error);
      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },

    signup: async (data) => {
    set({ isSigningUp: true });
    try {
      const res = await axiosInstance.post("/auth/signup", data);
      set({ authUser: res.data });
      toast.success("Account created successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isSigningUp: false });
    }
  },

    login: async (data) => {
    set({isLogingIng: true})
    try {
      const res = await axiosInstance.post("/auth/login", data);
      set({ authUser: res.data});
      toast.success("LogIn Successfully");
    } catch (error) {
      console.log("Error in LogIn", error);
      toast.error(error.response.data.message);
    }finally{
      set({isLogingIng: false})
    }
  },

  logout: async() => {
    try {
      await axiosInstance.post("/auth/logout");
      set({authUser: null});
      return true;
      toast.success("LogOut Successfully")
    } catch (error) {
      console.log("Error in Logout", error);
      toast.error(error.response.data.message);
    }
  },

  }),
);
