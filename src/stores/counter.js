import { create } from 'zustand'

const useCounterStore = create((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
  increaseByN: (n) => set((state) => ({ count: state.count + n })),
}))

export default useCounterStore;