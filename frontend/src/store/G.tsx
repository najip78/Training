import { create } from "zustand"

/*************  ✨ Codeium Command 🌟  *************/
interface gdata {
    text: string;
    setText: (text: string) => void;
}
export const useGdata = create<gdata>((set)=>({
    text: "default:",
    setText: (text: string) => set({ text }),
}))
interface count {
    count: number;
    increment: () => void;
    decrement: () => void;
}
export const Usecount = create<count>((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
}))