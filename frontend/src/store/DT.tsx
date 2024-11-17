import { create } from "zustand";

/*************  ✨ Codeium Command 🌟  *************/
/*************  ✨ Codeium Command 🌟  *************/
interface forfun {
  numbers: number;
  addnewnumber: (value: number) => void;
}

// create a new state
  const useforfun = create<forfun>((set) => ({
    numbers: 100,
    addnewnumber: (value) => set((state) => ({ numbers: state.numbers + value }))
  }));

  
  export default useforfun