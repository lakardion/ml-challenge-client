import ItemData from "./ItemData";

interface ItemDetailData extends ItemData {
  sold_quantity: number;
  description: string;
}

export default ItemDetailData;
