import Price from "../Price/Price";

interface ItemData {
  id: string;
  title: string;
  price: Price;
  pictures: string[];
  condition: boolean;
  free_shipping: boolean;
}

export default ItemData;
