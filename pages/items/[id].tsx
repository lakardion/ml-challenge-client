import useFetchFromQuery from "../../components/hooks/useFetchFromQuery";
import ItemDetail from "../../components/Items/ItemDetail";
import useItemsStore from "../../stores/itemsStore";

const ItemById = () => {
  const fetchItemDetail = useItemsStore((is) => is.fetchSingleItem);
  const clearItemDetail = useItemsStore((is) => is.clearCurrentItemDetail);

  useFetchFromQuery(fetchItemDetail, "id", clearItemDetail);

  return <ItemDetail />;
};
export default ItemById;
