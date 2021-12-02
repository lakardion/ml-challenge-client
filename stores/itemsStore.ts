import create, { State } from "zustand";
import Author from "../types/Author/Author";
import ItemData from "../types/Items/ItemData";
import ItemDetailData from "../types/Items/ItemDetailData";
import ItemDetailResponseData from "../types/Items/ItemDetailResponseData";
import ItemResponseData from "../types/Items/ItemResponseData";
import { getItemsByQueryUri, getItemUri } from "../Utils/ApiUris";
import axiosInstance from "../Utils/axiosInstance";

interface ItemState extends State {
  author: Author;
  categories: string[];
  singleItem: ItemDetailData;
  items: ItemData[];
  fetchItems: (searchQuery: string) => Promise<void>;
  fetchSingleItem: (itemId: string) => Promise<void>;
  clearCurrentItemDetail: () => void;
}

const useItemsStore = create<ItemState>((set, get) => ({
  author: null,
  categories: [],
  singleItem: null,
  items: [],
  fetchItems: async (searchQuery: string) => {
    try {
      const { data } = await axiosInstance.get<ItemResponseData>(
        getItemsByQueryUri(searchQuery)
      );
      set({
        items: data.items,
        author: data.author,
        categories: data.categories,
      });
    } catch (err) {
      console.error(err);
    }
  },
  fetchSingleItem: async (itemId: string) => {
    try {
      const { data } = await axiosInstance.get<ItemDetailResponseData>(
        getItemUri(itemId)
      );
      set({ author: data.author, singleItem: data.item });
    } catch (err) {
      console.error(err);
    }
  },
  clearCurrentItemDetail: () => set({ singleItem: null }),
}));

export default useItemsStore;
