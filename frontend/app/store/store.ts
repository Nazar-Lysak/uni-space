import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { FetchMarketState, LoginPopupState } from './interfaces';
import { fetchMarketList } from './utils/marketListApi';

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

export const useMarketList = create<FetchMarketState>()((set, get) => ({
  marketList: [{value: 'UK', market: 'uk'}], 
  isLoading: false, 
  error: null, 
  fetchMarkets: async () => {
    const { marketList } = get();
    if (marketList.length > 1) return;
    
    set({ isLoading: true, error: null });
    const data = await fetchMarketList();
    if (data) {
      setTimeout(() => {
        set({ marketList: data, isLoading: false });
      }, 500)
      
    } else {
      set({ error: 'Error fetch list', isLoading: false });
    }
  },
}));

