import { create } from "zustand";

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

export default goodluck;
