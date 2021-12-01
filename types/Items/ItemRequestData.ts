import Author from "../Author/Author";
import ItemData from "./ItemData";

interface ItemRequestData {
  author: Author;
  categories: string[];
  items: ItemData[];
}

export default ItemRequestData;
