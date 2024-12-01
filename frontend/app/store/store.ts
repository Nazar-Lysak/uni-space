import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { LoginPopupState } from './interfaces';

export const useLoginPopupStore = create<LoginPopupState>()(
  persist(
    (set) => ({
      isOpen: false,
      openPopup: () => set({ isOpen: true }),
      closePopup: () => set({ isOpen: false }),
    }),
    {
      name: 'login-popup-storage',
    }
  )
);
