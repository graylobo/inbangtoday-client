import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

interface UserState {
  count: number;
  age: number;
  increment: () => void;
  ageIncrement: () => void;
}

// export const useUserStore = create<UserState>((set) => ({
//   count: 0,
//   age: 0,
//   increment: () => set((state) => ({ count: state.count + 1 })),
//   ageIncrement: () => set((state) => ({ age: state.age + 1 })),
// }));

// useUserStore.subscribe((state) => {
//     console.log('Count changed to', state.count);
//   });

export const useUserStore = create<UserState>()(
  subscribeWithSelector((set) => ({
    count: 0,
    age: 0,
    increment: () => set((state: any) => ({ count: state.count + 1 })),
    ageIncrement: () => set((state: any) => ({ age: state.age + 1 })),
  }))
);

useUserStore.subscribe(
  (state) => state.count,
  (count) => {
    console.log("Count changed to", count);
  }
);
