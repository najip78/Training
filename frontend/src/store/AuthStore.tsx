import { create } from "zustand";
import { AuthState, trdata } from "../types/UseAuthStore";

const useAuthStore = create<AuthState>((set) => ({
    isAuthenticated: false,
    user: null,
    login: (user) => set({ isAuthenticated: true, user }),
    logout: () => set({ isAuthenticated: false, user: null }),
  }));
  // add type
  
  
// Define the structure of the store
interface goodLuck {
  message: string;
  sender: string;
  setMessage: (message: string) => void;
}

// Create the Zustand store with a dynamic initial message
const goodluck = create<goodLuck>((set) => ({
  message: "",  // Start with an empty message or dynamic initialization
  sender: "Zustand",
  setMessage: (message: string) => set({ message }),  // Function to update the message
}));

  
export default useAuthStore ;
  
