import create, { State } from "zustand";
import Author from "../types/Author/Author";

interface ItemMetadataState extends State {
  author: Author;
  categories: string[];
  setAuthor: (author: Author) => void;
  setCategories: (categories: string[]) => void;
}

const useItemMetadataStore = create<ItemMetadataState>((set, get) => ({
  author: null,
  categories: [],
  setAuthor: (author) => set({ author }),
  setCategories: (categories) => set({ categories }),
}));

export default useItemMetadataStore;
