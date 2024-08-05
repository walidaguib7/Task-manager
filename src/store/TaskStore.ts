import { create } from "zustand";

type TaskType = {
  Task: number;
  setTask: (value: number) => void;
  getTask: () => number;
};

export const useTaskStore = create<TaskType>()((set, get) => ({
  Task: 0,
  setTask: (Task) => set({ Task }),
  getTask: () => get().Task,
}));
