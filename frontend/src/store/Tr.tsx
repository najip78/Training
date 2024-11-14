// store/AuthStore.ts
import { create } from "zustand";
import { trdata } from "../types/UseAuthStore";

const useMytrdata = create<trdata>(() => ({
  name: "salad",
  age: 0,
}));

export default useMytrdata;
