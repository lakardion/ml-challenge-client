import create, { State } from "zustand";
import Author from "../types/Author/Author";
import ItemData from "../types/Items/ItemData";
import ItemDetailData from "../types/Items/ItemDetailData";

interface ItemState extends State {
  author: { name?: string; lastName?: string };
  categories: string[];
  singleItem: ItemDetailData;
  items: ItemData[];
  fetchItems: (searchQuery: string) => Promise<void>;
  fetchSingleItem: (itemId: string) => Promise<void>;
}

const useItemsStore = create<ItemState>((set, get) => ({
  author: {} as Author,
  categories: [],
  singleItem: {} as ItemDetailData,
  items: [],
  fetchItems: async (searchQuery: string) => {
    //TODO: fetch items
  },
  fetchSingleItem: async (itemId: string) => {
    //TODO: fetchSingleItem
  },
}));

export default useItemsStore;
