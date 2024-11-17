import { message } from "antd";
import { create } from "zustand";

// Define the structure of the store
interface goodLuck {
  message?: string | undefined;
  sender: string;
  setMessage: (message: string) => void;
  setSender: (sender: string) => void;
 }
// Create the Zustand store
 const useGoodLuckStore = create<goodLuck>((set) => ({
  sender: "someone",
  setMessage: (message) => set((state) => ({...state, message })),
  setSender: (sender) => set((state) => ({...state, sender })),
}));

export default useGoodLuckStore

