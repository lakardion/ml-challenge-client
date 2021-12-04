import Price from "../Price/Price";

interface ItemData {
  id: string;
  title: string;
  price: Price;
  picture: string;
  condition: string;
  free_shipping: boolean;
  state_name: string;
}

export default ItemData;
