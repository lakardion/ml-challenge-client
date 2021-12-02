import Author from "../Author/Author";
import ItemData from "./ItemData";

interface ItemResponseData {
  author: Author;
  categories: string[];
  items: ItemData[];
}

export default ItemResponseData;
