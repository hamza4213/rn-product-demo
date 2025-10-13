import { create } from "zustand";

type FavoriteStore = {
  favorites: number[];
  toggleFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
};

export const useFavoritesStore = create<FavoriteStore>((set, get) => ({
  favorites: [],
  toggleFavorite: (id) => {
    const { favorites } = get();
    if (favorites.includes(id)) {
      set({ favorites: favorites.filter((item) => item !== id) });
    } else {
      set({ favorites: [...favorites, id] });
    }
  },
  isFavorite: (id) => get().favorites.includes(id),
}));
