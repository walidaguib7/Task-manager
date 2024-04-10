
import { create } from 'zustand';


type TaskIdType = {
    TaskId: string;
    setTaskId: (value: string) => void;
    getTaskId: () => string;
    isLoggedIn: () => boolean;
};

export const useTaskStore = create<TaskIdType>()((set, get) => ({
    TaskId: "",
    setTaskId: (TaskId) => set({ TaskId }),
    getTaskId: () => get().TaskId,
    isLoggedIn: () => get().TaskId !== "",
}));