
import { create } from 'zustand';


type UserType = {
    user: string;
    setUser: (value: string) => void;
    getUser: () => string;
    isLoggedIn: () => boolean;
};

export const useUserStore = create<UserType>()((set, get) => ({
    user: "",
    setUser: (user) => set({ user }),
    getUser: () => get().user,
    isLoggedIn: () => get().user !== "",
}));