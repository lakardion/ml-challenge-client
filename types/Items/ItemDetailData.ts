import ItemData from "./ItemData";

interface ItemDetailData extends Omit<ItemData, "picture"> {
  pictures: string[];
  sold_quantity: number;
  description: string;
}

export default ItemDetailData;
