import useItemsStore from "../../stores/itemsStore";
import Item from "../../components/Items/Item";

const ItemsList = () => {
  const items = useItemsStore((is) => is.items);
  return items.map((i) => <Item key={i.id} itemData={i} />);
};
export default ItemsList;
