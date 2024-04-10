
import { create } from 'zustand';


type TaskType = {
    Task: string;
    setTask: (value: string) => void;
    getTask: () => string;
    
};

export const useTaskStore = create<TaskType>()((set, get) => ({
    Task: "",
    setTask: (Task) => set({ Task }),
    getTask: () => get().Task,

}));